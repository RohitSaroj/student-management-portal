(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dashboard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"account-header text-center common-header-footer-margin\">"
    + container.escapeExpression(((helper = (helper = helpers.loginAccountHeaderText || (depth0 != null ? depth0.loginAccountHeaderText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"loginAccountHeaderText","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"account-header text-center common-header-footer-margin\">"
    + container.escapeExpression(((helper = (helper = helpers.newAccountHeaderText || (depth0 != null ? depth0.newAccountHeaderText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"newAccountHeaderText","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"forgot-or-claim-account text-center common-header-footer-margin\">"
    + container.escapeExpression(((helper = (helper = helpers.forgotOrClaimAccountText || (depth0 != null ? depth0.forgotOrClaimAccountText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"forgotOrClaimAccountText","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"dashboard-main-holder vertical-horizontal-center\">\r\n    <div class=\"envelope-holder\">\r\n        <img src=\"assets/images/envelope.jpg\" />\r\n    </div>\r\n    <div class=\"account-board\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLoginPage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <div class=\"account-form\">\r\n            <div class=\"userid-details form-group\">\r\n                <label for=\"userid\" class=\"userid-label\">"
    + alias4(((helper = (helper = helpers.userIDLabel || (depth0 != null ? depth0.userIDLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userIDLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n                <input type=\"text\" class=\"userid-field form-control\" id=\"userid\" />\r\n            </div>\r\n            <div class=\"password-details form-group\">\r\n                <label for=\"userPassword\" class=\"password-label\">"
    + alias4(((helper = (helper = helpers.passwordLabel || (depth0 != null ? depth0.passwordLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passwordLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n                <input type=\"text\" class=\"password-field form-control\" id=\"userPassword\"/>\r\n            </div>\r\n            <div class=\"submit-button-container text-center\">\r\n                <input type=\"button\" class=\"btn\" value="
    + alias4(((helper = (helper = helpers.submitButtonText || (depth0 != null ? depth0.submitButtonText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"submitButtonText","hash":{},"data":data}) : helper)))
    + " />\r\n            </div>\r\n        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLoginPage : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});
})();