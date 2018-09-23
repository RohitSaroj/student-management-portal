define(
    function() {
        "use strict";
    
        var DashboardModel = Backbone.Model.extend({
            "initialize": function() {
                Backbone.Model.prototype.set.apply(this, arguments);
            },
    
            "defaults": {
                "locData": {
                    
                }
            }
        });
        return DashboardModel;
    });