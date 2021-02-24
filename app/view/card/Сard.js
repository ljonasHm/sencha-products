Ext.define('Products.view.card.Card', {

    extend: 'Ext.window.Window',
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