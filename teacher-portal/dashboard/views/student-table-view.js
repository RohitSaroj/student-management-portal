define(
    ["teacher-portal/dashboard/models/student-add-edit-model",
     "teacher-portal/dashboard/views/student-add-edit-view",
     "teacher-portal/templates/student-datatable",
     "teacher-portal/templates/datatable-actions-cell",
     "teacher-portal/templates/student-search-panel"],
    function(StudentAddEditModel, StudentAddEditView, studentDatatableTpl, actionsCellTpl, studentSearchPanel) {
        "use strict";
    
        var StudentTableView = Backbone.View.extend({
            
            "initialize": function() {
                this.locData = this.model.get("locData");
            },

            "events": function() {
                return {
                    "click .action-edit": "renderEditPage"
                }
            },

            "render": function() {
                var studentDatatableTpl = Handlebars.templates['student-datatable'];

                this.$el.append(studentDatatableTpl());
                this.renderSearchPanel();
                this.renderStudentDataTable();
            },

            "renderStudentDataTable": function() {
                var studentData = this.model.get("studentData"),
                    studentTableText = this.locData.studentTableText,
                    actionsCellTpl = Handlebars.templates['datatable-actions-cell'],
                    customColumnRenderRule, dataTableConfig;

                customColumnRenderRule = [
                    {
                        // The `data` parameter refers to the data for the cell (defined by the
                        // `data` option, which defaults to the column being worked with, in
                        // this case `data: 6`.
                        "render": function ( data, type, row ) {
                            return studentTableText.statusEnum[data];
                        },
                        "targets": 6 
                    },
                    {
                        "render": function ( data, type, row, meta ) {
                            return actionsCellTpl({
                                "studentId": data.id
                            });
                        },
                        "targets": 7
                    },
                    { "visible": true,  "targets": [6,7] }//referring columns
                ];

                dataTableConfig = {
                    "data": studentData,
                    "columns": [
                        { data: 'id' , title: studentTableText.header.id},
                        { data: 'name' , title: studentTableText.header.name},
                        { data: 'age' , title: studentTableText.header.age},
                        { data: 'school' , title: studentTableText.header.school},
                        { data: 'class' , title: studentTableText.header.class},
                        { data: 'division' , title: studentTableText.header.division},
                        { data: 'status' , title: studentTableText.header.status},
                        { data: null , title: studentTableText.header.actions},
                    ],
                    "searching": false,
                    "lengthChange": false,
                    "pageLength": 8,
                    "info": false,
                    "dom": 'tp',
                    "columnDefs": customColumnRenderRule,
                    "responsive": true
                }
                    
                this.$('#dashboardTable').DataTable(dataTableConfig);
            },

            "renderSearchPanel": function() {
                var studentSearchPanel = Handlebars.templates['student-search-panel'];
                this.$(".student-search-panel").append(studentSearchPanel());
            },

            "renderEditPage": function(event) {
                this.destroy();
                var modelOptions = {
                    "isEditMode": true
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

            "destroy": function() {
                this.unbind();
                this.model.destroy();
                this.$el.off().empty();
            }
        });
        return StudentTableView;
    });