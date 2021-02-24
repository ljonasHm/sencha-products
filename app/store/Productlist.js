Ext.define('Products.store.Productlist', {
    extend: 'Ext.data.Store',

    model: 'Products.model.ProductsModel',

    alias: 'store.productlist',

    proxy: {
        type: 'ajax',
        url: 'products.json'
    },
    autoLoad: true,

    listeners : {
        removeRecord: function(data) {
            let record = this.findRecord('id', +data.id);
            this.remove(record);
            record.data.price = data.price;
            record.data.number = data.number;
            this.add(record);
            this.sort('id', 'ASC');
        }
    }
});
