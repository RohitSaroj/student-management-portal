(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['student-add-edit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"add-edit-student-container\">\r\n    <div class=\"header pb-2 mt-4 mb-2 border-bottom\"><h4>"
    + container.escapeExpression(((helper = (helper = helpers.headerText || (depth0 != null ? depth0.headerText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headerText","hash":{},"data":data}) : helper)))
    + "</h4></div>\r\n    <div class=\"body\">\r\n        <div class=\"name-container form-group row\">\r\n            <label for=\"name\" class=\"col-sm-4\">Name</label>\r\n            <input type=\"text\" class=\"form-control col-sm-6\" />\r\n        </div>\r\n        <div class=\"dob-container form-group row\">\r\n            <label for=\"dob\" class=\"col-sm-4\">Date of Birth</label>\r\n            <input type=\"text\" class=\"datepicker form-control col-sm-6\" ></input>\r\n        </div>\r\n        <div class=\"school-container form-group row\">\r\n            <label for=\"school\" class=\"col-sm-4\">School</label>\r\n            <select type=\"text\" class=\"school form-control col-sm-6\" ></select>\r\n        </div>\r\n        <div class=\"class-container form-group row\">\r\n            <label for=\"class\" class=\"col-sm-4\">Class</label>\r\n            <select type=\"text\" class=\"class form-control col-sm-6\" /></select>\r\n        </div>\r\n        <div class=\"dob-container form-group row\">\r\n            <label for=\"division\" class=\"col-sm-4\">Division</label>\r\n            <select type=\"text\" class=\"division form-control col-sm-6\" /></select>\r\n        </div>\r\n        <div class=\"dob-container form-group row\">\r\n            <label for=\"status\" class=\"col-sm-4\">Status</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"radio\" id=\"statusActive\" class=\"status form-control\" name=\"active-status\"/>\r\n                <label for=\"statusActive\">Active</label>\r\n                <input type=\"radio\" id=\"statusInActive\" class=\"status form-control\" name=\"active-status\"/>\r\n                <label for=\"statusInActive\">InActive</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <button class=\"save-btn btn btn-block\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();