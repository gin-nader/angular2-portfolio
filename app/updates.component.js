System.register(['angular2/core', './updates.service'], function(exports_1, context_1) {
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
    var core_1, updates_service_1;
    var UpdatesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (updates_service_1_1) {
                updates_service_1 = updates_service_1_1;
            }],
        execute: function() {
            UpdatesComponent = (function () {
                function UpdatesComponent(updatesService) {
                    this.title = "Status Updates";
                    this.updates = updatesService.getUpdates();
                }
                UpdatesComponent = __decorate([
                    core_1.Component({
                        selector: 'updates',
                        template: " <div class=\"row wrapper homepage_content\" id=\"status_updates\">\n      <h2 class=\"title\">{{ title }}</h2>\n      <hr />\n      <div class=\"update container\" *ngFor=\"#update of updates\">\n        <h5>{{ update.text }}</h5>\n        <p class=\"date\">{{ update.date | date}}</p>\n      </div>\n    </div>",
                        providers: [updates_service_1.UpdatesService]
                    }), 
                    __metadata('design:paramtypes', [updates_service_1.UpdatesService])
                ], UpdatesComponent);
                return UpdatesComponent;
            }());
            exports_1("UpdatesComponent", UpdatesComponent);
        }
    }
});
//# sourceMappingURL=updates.component.js.map