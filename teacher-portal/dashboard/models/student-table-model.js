define(
    function() {
        "use strict";
    
        var StudentTableModel = Backbone.Model.extend({
            "initialize": function() {
                Backbone.Model.prototype.set.apply(this, arguments);
            },
    
            "defaults": {
                "locData": {
                    "studentTableText": {
                        "header" : {
                            "id": "ID",
                            "name": "Name",
                            "age": "Age",
                            "school": "School",
                            "class": "Class",
                            "division": "Division",
                            "status": "Status",
                            "actions": "Actions"
                        },
                        "statusEnum": {
                            "1": "Active",
                            "0": "InActive"
                        }
                    }
                },
                "studentData" :[
                    {
                        "id": "1",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "0"
                    },
                    {
                        "id": "2",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "1"
                    },
                    {
                        "id": "3",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "0"
                    },
                    {
                        "id": "4",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "0"
                    },
                    {
                        "id": "5",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "1"
                    },
                    {
                        "id": "6",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "1"
                    },
                    {
                        "id": "7",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "1"
                    },
                    {
                        "id": "8",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "1"
                    },
                    {
                        "id": "9",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "1"
                    },
                    {
                        "id": "10",
                        "name": "Student Name",
                        "age": "10",
                        "school": "LEAD School Karmala",
                        "class": "3",
                        "division": "A",
                        "status": "0"
                    }
                ]
            }
        });
        return StudentTableModel;
    });