Ext.define('Porducts.view.card.CardController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.card',

    saveCardChanges: function() {
        const store = this.lookupReference('card').up('main').down('grid').getStore();
        const formData = this.lookupReference('card').getValues();
        formData.id = this.lookupReference('card').down('displayfield').value.replace(/\D/g, '');
        const record = store.findRecord('id', +formData.id);
        if((record.data.price != +formData.price || record.data.number != +formData.number)
            && (isNaN(formData.price) === false && +formData.price >= 0 && isNaN(formData.number) === false && +formData.number >= 0 && Number.isInteger(+formData.number))) {
            store.fireEvent('removeRecord', formData);
            if(!this.warningMessage) {
                this.warningMessage = Ext.create(Ext.form.field.Display, {
                    value: 'Данные изменены'
                })
                this.lookupReference('card').add(this.warningMessage);
            }
        }
    },

    closeCard: function() {
        this.fireViewEvent('closeCard');
    }
})