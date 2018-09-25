define(
    ["teacher-portal/templates/student-add-edit"],
    function(studentAddEditTpl) {
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
                var studentAddEditTpl = Handlebars.templates['student-add-edit'],
                    isEditMode = this.model.get("isEditMode"),
                    templateOptions = {};

                if (isEditMode) {
                    templateOptions.headerText = "Edit Student";
                } else {
                    templateOptions.headerText = "Add Student";
                }
                this.$el.append(studentAddEditTpl(templateOptions));
                this.$(".datepicker").datepicker();
            },

            "destroy": function() {
                this.unbind();
                this.model.destroy();
                this.$el.off().empty();
            }
        });
        return StudentAddEditView;
    }
);