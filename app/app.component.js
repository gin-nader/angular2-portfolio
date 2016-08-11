System.register(['angular2/core', './updates.component', './about.component', './projects.component', './contact.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, updates_component_1, about_component_1, projects_component_1, contact_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (updates_component_1_1) {
                updates_component_1 = updates_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<body>\n    <div class=\"navbar navbar-inverse navbar-fixed-top sticky container-fluid\n    clearfix\" id=\"main_navigation\" role=\"navigation\">\n      <a class=\"name\" href=\"#\">Tom Ginader</a>\n      <ul class=\"row nav nav-pills\" id=\"nav_bar\">\n        <li>\n          <a class=\"nav_link\" href=\"#about_me\">About Me</a>\n        </li>\n        <li>\n          <a class=\"nav_link\" href=\"#status_updates\">Status Updates</a>\n        </li>\n        <li>\n          <a class=\"nav_link\" href=\"#my_projects\">My Projects</a>\n        </li>\n        <li>\n          <a class=\"nav_link\" href=\"#contact_me\">Contact Me</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"row homepage_content\" id=\"banner\">\n      <img class=\"img-responsive\" src=\"https://thejesterscorner.files.wordpress.com/2013/02/juri.jpeg\" alt=\"Banner\" />\n    </div>\n    <about></about>\n    <updates></updates>\n    <projects></projects>\n    <contact></contact>\n    <footer class=\"row container-fluid\" id=\"main_footer\">\n      <p class=\"copyright\">\u00A92016 Tom Ginader</p>\n      <nav>\n        <a href=\"http://github.com/nadirjin\" target=\"_blank\">\n          <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n        </a>\n        <a href=\"https://www.linkedin.com/in/tginader\" target=\"_blank\">\n          <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\n        </a>\n      </nav>\n    </footer>\n  </body>",
                        directives: [updates_component_1.UpdatesComponent, about_component_1.AboutComponent, projects_component_1.ProjectComponent, contact_component_1.ContactComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map