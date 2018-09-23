define(
    ["teacher-portal/templates/student-datatable",
     "teacher-portal/templates/datatable-actions-cell"],
    function(studentDatatableTpl, actionsCellTpl) {
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
                    "responsive": true,
                    "responsive": {
                        breakpoints : [
                            { name: 'desktop', width: Infinity },
                            { name: 'tablet',  width: 1024 },
                            { name: 'fablet',  width: 768 },
                            { name: 'phone',   width: 480 }
                        ]
                    }
                }
                    
                this.$('#dashboardTable').DataTable(dataTableConfig);
            },

            "renderEditPage": function(event) {
                
            },

            "destroy": function() {
                this.unbind();
                this.model.destroy();
                this.$el.off().empty();
            }
        });
        return StudentTableView;
    });