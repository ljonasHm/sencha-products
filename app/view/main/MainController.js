/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Products.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Products.view.list.List'
    ],

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    exitLogin: function () {
        this.fireViewEvent('exit');
    },

    addTab: function () {

        const tabpanel = this.lookupReference('tabpanel');

        const tab = tabpanel.add({
            title: 'Товары',
            xtype: 'mainlist',
            listeners: {
                scope: this,
                nameCellClick: 'openCard'
            }
        });
        tabpanel.setActiveTab(tab);
        // const newTab = Ext.create(Ext.Component, {
        //     title: 'Товары',
        //     items: [
        //         Ext.create('Products.view.main.List')
        //     ]
        // })
        // console.log(newTab);
        // const tabpanel = this.lookupReference('tabpanel');
        // console.log(tabpanel.first());
        // tabpanel.add(newTab);
    },

    applyFilter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            const form = this.lookupReference('formFilter');
            const id = form.getValues().id;
            const description = form.getValues().description;
            if (form.up().down('grid').getStore().getFilters().items.length > 0) {
                form.up().down('grid').getStore().removeFilter(form.up().down('grid').getStore().getFilters().items[0]._id);
            }
            form.up().down('grid').getStore().addFilter([
                function(item) {
                    if (!id && !description) {
                        return true;
                    } else if (!id) {
                        return item.data.description.indexOf(description) != -1;
                    } else if (!description) {
                        return item.data.id == id;
                    } else {
                        return item.data.id == id && item.data.description.indexOf(description) != -1;
                    }
                }
            ]);
        }
    },

    onCellClick: function(elem, td, cellIndex, record, tr, rowIndex) {
        if(cellIndex == 1) {
            this.fireViewEvent('nameCellClick', record.data)
        }
    },

    openCard: function(field, cardData) {
        this.fireViewEvent('openCard', cardData);
    }

    // onCellClick: function(elem, td, cellIndex, record, tr, rowIndex) {
    //     if(cellIndex == 1) {
    //         const card = Ext.create('Ext.form.Panel', {

    //             region: 'center',

    //             items: [
    //                 {
    //                     xtype: 'textfield',
    //                     name: 'name',
    //                     label: 'Name'
    //                 },
    //                 {
    //                     xtype: 'textfield',
    //                     name: 'email',
    //                     label: 'Email'
    //                 },
    //                 {
    //                     xtype: 'textfield',
    //                     name: 'password',
    //                     label: 'Password'
    //                 }
    //             ],
                    
    //             renderTo: Ext.getBody()
    //         });
    //     }
    // }
});
