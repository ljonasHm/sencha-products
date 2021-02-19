Ext.define('Products.controller.Root', {
    extend: 'Ext.app.Controller',

    requires: [
        'Products.view.login.Login',
        'Products.view.main.Main',
        'Products.view.main.MainController',
        'Products.view.list.List'
    ],

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
        this.main.destroy();
        this.card = new Products.view.card.Card({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                closeCard: 'offCard'
            }
        });
        const cardForm = Ext.create('Ext.form.Panel', {
            
            items: [
                {
                    xtype: 'displayfield',
                    value: `Название: ${cardData.name}`,
                },
                {
                    xtype: 'displayfield',
                    value: `ID: ${cardData.id}`,
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
    },

    offCard: function() {
        this.card.destroy();
        this.main = new Products.view.main.Main({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                exit: 'offLogin',
                openCard: 'onCard'
            }
        });
    }
});