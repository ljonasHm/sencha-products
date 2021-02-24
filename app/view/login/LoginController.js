Ext.define('Products.view.login.LoginController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

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
            if(form.getValues().username == 'admin' && form.getValues().password == 'padmin') {
                this.fireViewEvent('login');
            } else if (!this.warningMessage){
                this.warningMessage = Ext.create(Ext.form.field.Display, {
                    value: 'Неверный логин/пароль'
                })
                form.add(this.warningMessage);
            }
        }
    }
})