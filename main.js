define(
    ["teacher-portal/dashboard/models/dashboard-model",
    "teacher-portal/dashboard/views/dashboard-view"],
function(DashboardModel, DashboardView) {
    "use strict";

    var mainDashboardModel = new DashboardModel({}),
        mainDashboardView = new DashboardView({
            "model": mainDashboardModel,
            "el": ".app-holder"
        });

    mainDashboardView.render();
});