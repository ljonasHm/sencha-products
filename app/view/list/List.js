/**
 * This view is an example list of people.
 */
Ext.define('Products.view.list.List', {
    extend: 'Ext.Container',
    controller: 'main',
    xtype: 'mainlist',
    padding: 10,
    
    items: [
        {
            xtype: 'form',
            reference: 'formFilter',
            items: [
                {
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: 'id',
                    allowBlank: false,
                    enableKeyEvents: true,
                    listeners: {
                        specialKey: 'applyFilter'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Описание',
                    allowBlank: false,
                    enableKeyEvents: true,
                    listeners: {
                        specialKey: 'applyFilter'
                    }
                }
            ]
        },
        {
            extend: 'Ext.grid.Panel',
            xtype: 'grid',
            title: 'Товары',


            store: {
                type: 'productlist'
            },

            columns: [
                { text: 'id',  dataIndex: 'id' },
                {
                    text: 'Имя',
                    dataIndex: 'name',
                    flex: 1
                },
                { text: 'Описание', dataIndex: 'description', flex: 1},
                { text: 'Цена', dataIndex: 'price'},
                {
                    text: 'Кол-во',
                    dataIndex: 'number',
                    renderer: function(value, meta) {
                        if (value == 0) {
                            meta.style = "background-color: red;"
                        }
                        return value;
                    }
                }
            ],

            listeners: {
                'cellClick': 'onCellClick'
            }

            // listeners: {
            //     select: 'onItemSelected'
            // }
        }
        
    ]
});
