define(
function() {
    "use strict";

    var DashboardModel = Backbone.Model.extend({
        "initialize": function() {
            Backbone.Model.prototype.set.apply(this, arguments);
        },

        "defaults": {
            "locData": {
                "loginAccountHeaderText": "Login to your account",
                "newAccountHeaderText": "Create a new Account",
                "userIDLabel": "Email ID / Phone Number",
                "passwordLabel": "Password",
                "submitButtonText": "Submit",
                "forgotOrClaimAccountText": "Forgot Password/Claim your Account"
            }
        }
    });
    return DashboardModel;
});