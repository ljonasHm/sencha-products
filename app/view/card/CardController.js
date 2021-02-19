Ext.define('Porducts.view.card.CardController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.card',

    saveCardChanges: function() {
        const store = new Products.store.Productlist;
        let recordForRemove;
        console.log(store);
        store.load(function() {
            store.each(function(record){
                console.log(record.data);
            });
        })
        store.load(function() {
            store.each(function(record){
                if(record.data.id == 1) {
                    recordForRemove = record;
                }
            });
        });
        store.add({id: 5, name: '111'});
        store.remove(recordForRemove);
        // Ext.Ajax.request({
        //     url: '/products.json',
        //     method: 'POST',

        //     success: function() {
        //         console.log(1);
        //     },
        //     params: {"id": 1, "name": "Notebook Lenovo", "description": "Ноутбук ThinkPad T460 14''FHD", "price": 100, "number": 2}
        // })
        store.sync();
        store.commitChanges();
        store.load(function() {
            store.each(function(record){
                console.log(record.data);
            });
        })
    },

    closeCard: function() {
        this.fireViewEvent('closeCard');
    }
})