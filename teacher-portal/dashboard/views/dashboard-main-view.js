define(
    ["teacher-portal/templates/dashboard",
     "teacher-portal/dashboard/models/student-table-model",
     "teacher-portal/dashboard/views/student-table-view"],
    function(dashboardTpl, DashboardTableModel, DashboardTableView) {
        "use strict";
    
        var DashboardView = Backbone.View.extend({
            
            "initialize": function() {
                this.locData = this.model.get("locData");
            },

            "events": function() {
                return {
                    "click .students-control-container .list-group-item": "actionItemClick"
                }
            },

            "render": function() {
                var dashboardTpl = Handlebars.templates['dashboard'];

                this.$el.append(dashboardTpl());
                this.renderStudentTableView();
                this.updateActiveListHighlight(DashboardView.ACTIONS.VIEW_STUDENTS);
            },

            "renderStudentTableView": function() {
                var dashboardTableModel = new DashboardTableModel();
                if (this.dashboardTableView) {
                    this.dashboardTableView.destroy();
                    this.dashboardTableView = null;
                }
                this.dashboardTableView = new DashboardTableView({
                    "el": ".students-view-container",
                    "model": dashboardTableModel
                });
                this.dashboardTableView.render();
            },

            "actionItemClick": function(event) {
                var $target = $(event.target);
                if ($target.hasClass("view-students")) {
                    this.renderStudentTableView();
                    this.updateActiveListHighlight(DashboardView.ACTIONS.VIEW_STUDENTS);
                } else {
                    this.updateActiveListHighlight(DashboardView.ACTIONS.ADD_STUDENT);
                }
            },

            "updateActiveListHighlight": function(actionId) {
                this.$(".list-group-item-action").removeClass("active");
                if (actionId === DashboardView.ACTIONS.VIEW_STUDENTS) {
                    this.$(".list-group-item-action.view-students").addClass("active");
                } else if (actionId === DashboardView.ACTIONS.ADD_STUDENT) {
                    this.$(".list-group-item-action.add-student").addClass("active");
                }
            }
        }, {
            "ACTIONS": {
                "VIEW_STUDENTS": 1,
                "ADD_STUDENT": 2
            }
        });
        return DashboardView;
    }
);