Ext.define('Products.view.card.Card', {

    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],
    controller: 'card',

    bodyPadding: 20,
    title: 'Товар',
    closable: false,
    buttons: [
        {
            text: 'Сохранить',
            listeners: {
                click: 'saveCardChanges'
            }
        },
        {
            text: 'Отмена',
            listeners: {
                click: 'closeCard'
            }
        }
    ]
})