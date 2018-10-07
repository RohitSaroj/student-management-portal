(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dashboard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dashboard\">\r\n    <div class=\"dashboard-head\">\r\n        <div class=\"lead-logo-container text-center container d-inline-block\">LEAD Logo</div>\r\n        <div class=\"profile-info-container d-inline-block\">\r\n            <span class=\"notification fas fa-bell\"></span>\r\n            <div class=\"profile-name-info d-inline-block\"><span class=\"fas fa-user\"></span> Person Name</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"dashboard-body\">\r\n        <div class=\"students-control-container d-inline-block\">\r\n            <div class=\"list-group\">\r\n                <div class=\"list-group-item\">Students</div>\r\n                <div class=\"list-group-item list-group-item-action view-students\">- View Students</div>\r\n                <div class=\"list-group-item list-group-item-action add-student\">- Add Student</div>\r\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),50,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"students-view-container d-inline-block mt-3 ml-3\">\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();