Ext.define('Products.controller.Root', {
    extend: 'Ext.app.Controller',

    onLaunch: function () {
        
        this.login = new Products.view.login.Login({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });
    },

    onLogin: function() {
        this.login.destroy();
        this.main = new Products.view.main.Main({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                exit: 'offLogin',
                openCard: 'onCard'
            }
        });
    },

    offLogin: function() {
        this.main.destroy();
        this.login = new Products.view.login.Login({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });
    },

    onCard: function(field, cardData) {

        if(!this.card || this.card.destroyed) {
            this.card = new Products.view.card.Card({
                session: this.session,
                autoShow: true,
                listeners: {
                    scope: this,
                    closeCard: 'offCard'
                }
            });
            this.main.add(this.card);
            const cardForm = Ext.create('Ext.form.Panel', {
    
                reference: 'card',
    
                items: [
                    {
                        xtype: 'displayfield',
                        value: `ID: ${cardData.id}`,
                    },
                    {
                        xtype: 'displayfield',
                        value: `Название: ${cardData.name}`,
                    },
                    {
                        xtype: 'textfield',
                        name: 'price',
                        value: cardData.price,
                        fieldLabel: 'Цена'
                    },   
                    {
                        xtype: 'textfield',
                        name: 'number',
                        value: cardData.number,
                        fieldLabel: 'Кол-во',
                    }
                ]            
            });
            this.card.add(cardForm);
        }
    },

    offCard: function() {
        this.card.destroy();
    }
});