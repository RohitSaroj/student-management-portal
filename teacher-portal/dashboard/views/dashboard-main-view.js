define(
    ["teacher-portal/templates/dashboard",
     "teacher-portal/dashboard/models/student-table-model",
     "teacher-portal/dashboard/views/student-table-view",
     "teacher-portal/dashboard/models/student-add-edit-model",
     "teacher-portal/dashboard/views/student-add-edit-view"],
    function(dashboardTpl, StudentTableModel, StudentTableView, StudentAddEditModel, StudentAddEditView) {
        "use strict";
    
        var DashboardView = Backbone.View.extend({
            
            "initialize": function() {
                this.locData = this.model.get("locData");
                Handlebars.registerHelper('times', function(n, block) {
                    var elem='';
                    for(var i = 0; i < n; ++i) {
                        elem += '<div class="list-group-item"> </div>';
                    }
                    return elem;
                });
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
                var studentTableModel = new StudentTableModel();
                if (this.studentTableView) {
                    this.studentTableView.destroy();
                    this.studentTableView = null;
                }
                this.studentTableView = new StudentTableView({
                    "el": ".students-view-container",
                    "model": studentTableModel
                });
                this.studentTableView.render();
            },

            "renderAddStudentView": function() {
                var modelOptions = {
                        "isEditMode": false
                    },
                    studentAddEditModel = new StudentAddEditModel(modelOptions);
                if (this.studentAddEditView) {
                    this.studentAddEditView.destroy();
                    this.studentAddEditView = null;
                }
                this.studentAddEditView = new StudentAddEditView({
                    "el": ".students-view-container",
                    "model": studentAddEditModel
                });
                this.studentAddEditView.render();
            },

            "actionItemClick": function(event) {
                var $target = $(event.target);
                if ($target.hasClass("view-students")) {
                    if (this.studentAddEditView) {
                        this.studentAddEditView.destroy();
                    }
                    this.renderStudentTableView();
                    this.updateActiveListHighlight(DashboardView.ACTIONS.VIEW_STUDENTS);
                } else if ($target.hasClass("add-student")) {
                    if (this.studentTableView) {
                        this.studentTableView.destroy();
                    }
                    this.renderAddStudentView();
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