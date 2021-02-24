Ext.define('Products.view.login.Login', {
    extend: 'Ext.window.Window',

    controller: 'login',
    bodyPadding: 10,
    title: 'Авторизация',
    closable: false,

    items: {
        xtype: 'form',
        reference: 'form',
        id: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },

    buttons: [{
        text: 'Войти',
        listeners: {
            click: 'onLoginClick'
        }
    }]
});