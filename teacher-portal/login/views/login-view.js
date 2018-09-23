define(
    ["teacher-portal/templates/login"],
    function(loginTpl) {
        "use strict";
    
        var LoginView = Backbone.View.extend({
            
            "initialize": function() {

            },

            "render": function() {
                var loginTpl = Handlebars.templates['login'],
                    templateData = this.model.get("locData");
                templateData.isLoginPage = true;
                this.$el.append(loginTpl(templateData));
            }
        });
        return LoginView;
    });