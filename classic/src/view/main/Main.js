/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Products.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    controller: 'main',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            items: [
                {
                    xtype: 'button',
                    text: 'Товары',
                    listeners: {
                        click: 'addTab'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Выход',
                    listeners: {
                        click: 'exitLogin'
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            reference: 'tabpanel',
            region: 'north'
        }
    ]
})
