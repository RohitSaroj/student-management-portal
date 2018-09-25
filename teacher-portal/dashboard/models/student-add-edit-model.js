define(
    function() {
        "use strict";
    
        var StudentAddEditModel = Backbone.Model.extend({
            "initialize": function(options) {
                if (options.isEditMode) {
                    this.set("isEditMode", true);
                } else {
                    this.set("isEditMode", false);
                }
                Backbone.Model.prototype.set.apply(this, arguments);
            },
    
            "defaults": {
                "locData": {
                    
                }
            }
        });
        return StudentAddEditModel;
    });