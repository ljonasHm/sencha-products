Ext.define('Products.view.login.LoginController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    loginText: "Авторизация...",

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },

    onLoginClick: function() {
        this.doLogin();
    },

    doLogin: function() {
        var form = this.lookupReference('form');

        if (form.isValid()) {
            if(form.getValues().username == 'admin' && form.getValues().password == 'admin') {
                this.fireViewEvent('login');
            } else {
                this.warningMessage = Ext.create(Ext.form.field.Display, {
                    value: 'Неверный логин/пароль',
                    style: 'color:red'
                })
                form.add(this.warningMessage);
            }
        }
    }
})