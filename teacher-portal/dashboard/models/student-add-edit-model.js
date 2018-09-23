define(
    function() {
        "use strict";
    
        var StudentAddEditModel = Backbone.Model.extend({
            "initialize": function() {
                Backbone.Model.prototype.set.apply(this, arguments);
            },
    
            "defaults": {
                "locData": {
                    
                }
            }
        });
        return StudentAddEditModel;
    });