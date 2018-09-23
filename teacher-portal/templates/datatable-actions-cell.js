(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['datatable-actions-cell'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"actions-cell\" data-studentid="
    + container.escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"studentId","hash":{},"data":data}) : helper)))
    + ">\r\n    <a class=\"action action-edit\" href=\"#edit\">Edit</a>\r\n    <a class=\"action action-delete\" href=\"#delete\">Delete</a>\r\n</span>";
},"useData":true});
})();