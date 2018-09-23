define(
    ["teacher-portal/login/models/login-model",
    "teacher-portal/login/views/login-view"],
function(LoginModel, LoginView) {
    "use strict";

    var mainLoginModel = new LoginModel({}),
        mainLoginView = new LoginView({
            "model": mainLoginModel,
            "el": ".app-holder"
        });

    mainLoginView.render();
});