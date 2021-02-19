Ext.define('Products.store.Productlist', {
    extend: 'Ext.data.Store',

    requires: [
        'Products.model.ProductsModel'
    ],

    model: 'Products.model.ProductsModel',

    alias: 'store.productlist',

    proxy: {
        type: 'ajax',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        url: 'products.json'
    },
    autoLoad: true,

    listeners : {
        load: function(store, operation, successful, opts) {
            store.add({"id": 4, "name": "name", "description": "description", "price": 11, "number": 11});
            let record = store.findRecord('id', 1);
            record.set('name', 'newName');
            store.sync();
            // store.save();
        }
    }
});
