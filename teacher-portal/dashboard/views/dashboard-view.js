define(
    ["teacher-portal/templates/dashboard.handlebars"],
    function(dashboardTpl) {
        "use strict";
    
        var DashboardView = Backbone.View.extend({
            
            "initialize": function() {

            },

            "render": function() {
                var dashboardTpl = Handlebars.templates['dashboard'],
                    templateData = this.model.get("locData");
                templateData.isLoginPage = true;
                this.$el.append(dashboardTpl(templateData));
            }
        });
        return DashboardView;
    });