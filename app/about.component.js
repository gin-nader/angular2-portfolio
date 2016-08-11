System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                    this.title = "About Me";
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        template: " <div class=\"row wrapper homepage_content\" id=\"about_me\">\n      <h2 class=\"title\">{{ title }}</h2>\n      <hr />\n      <img src=\"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1610916_10204045619250333_3491505790847177659_n.jpg?oh=d4df5d606c518566bdf49bf99b065eee&oe=582440BA\" alt=\"Picture of me.\" height=\"200\" width=\"200\" />\n      <p>I am a graduate student. I will attend Marist Graduate school at the end of August. I will be working towards my M.S. degree in software development. I recently graduated from Suny Poly with a B.S. degree in network and computer security. I graduated\n      with a 3.94, the highest GPA of my graduating peers with the same major, summa cum laude.\n    </p>\n      <p>\n      I plan on working hard to attain my master's degree. I want to learn as much as I can, and make myself a well rounded individual when it comes to the field of computer science. I know a lot about networking, and computer security. I am also CCENT certified.\n      Now I plan to learn a lot about software development. I hope to be as varied as possible so that I can overcome any obstacle that comes my way.\n    </p>\n      <p>\n      You can view my LinkedIn profile, as well as my Github profile, by using the links in the bottom right corner of my website. You may see what I am currently up to, as well as my previous projects by using the links above. Feel free to contact me with\n      any questions or information you may have. Thank you for stopping by.\n    </p>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map