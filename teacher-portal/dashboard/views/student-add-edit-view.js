define(
    ["teacher-portal/templates/dashboard"],
    function(dashboardTpl) {
        "use strict";
    
        var StudentAddEditView = Backbone.View.extend({
            
            "initialize": function() {
                this.locData = this.model.get("locData");
            },

            "events": function() {
                return {
                    //"click .students-control-container .list-group-item": "actionItemClick"
                }
            },

            "render": function() {
                var dashboardTpl = Handlebars.templates['dashboard'];

                this.$el.append(dashboardTpl());
                this.renderStudentTableView();
                this.updateActiveListHighlight(DashboardView.ACTIONS.VIEW_STUDENTS);
            }
        });
        return StudentAddEditView;
    }
);