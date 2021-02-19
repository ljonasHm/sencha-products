Ext.define('Products.view.login.Login', {
    extend: 'Ext.window.Window',

    requires: [
        'Products.view.login.LoginController',
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],

    viewModel: 'login',
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
            bind: '{username}',
            fieldLabel: 'Логин',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
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