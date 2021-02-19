Ext.define('Products.model.ProductsModel', {
    extend: 'Ext.data.Model',
    alias: 'model.products',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'price',
            type: 'float'
        },
        {
            name: 'number',
            type: 'int'
        }
    ]
})