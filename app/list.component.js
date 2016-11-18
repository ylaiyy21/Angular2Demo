"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ListComponent = (function () {
    function ListComponent() {
        this.heros = Heros;
    }
    ListComponent = __decorate([
        core_1.Component({
            selector: 'login-list',
            template: "\n    \t\t<ul *ngFor=\"let hero of heros\">\n    \t\t\t<li>{{hero.code}}</li>\n    \t\t</ul>\n    \t\t",
            styles: ["\n   \t\t.input_center{\n   \t\t\talign:center;\n   \t\t\tbackground-color: #CFD8DC !important;\n   \t\t}\n   \t\t.btn{\n   \t\t\twidth:100px;\n   \t\t\theight:20px;\n   \t\t\tbackground-color:red;\n   \t\t}\n   \t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map