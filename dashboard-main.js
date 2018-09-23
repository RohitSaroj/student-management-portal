define(
    ["teacher-portal/dashboard/models/dashboard-main-model",
    "teacher-portal/dashboard/views/dashboard-main-view"],
function(DashboardModel, DashboardView) {
    "use strict";

    var mainDashboardModel = new DashboardModel({}),
        mainDashboardView = new DashboardView({
            "model": mainDashboardModel,
            "el": ".dashboard-holder"
        });

        mainDashboardView.render();
});