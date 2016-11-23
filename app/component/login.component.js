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
var user_1 = require('../pojo/user');
var LoginComponent = (function () {
    function LoginComponent() {
        this.user = user_1.User;
    }
    LoginComponent.prototype.onLogin = function (user) {
        console.log(user_1.User);
        console.log('登录成功', user.code, user.pass);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'main-list',
            template: "\n    \t\t<h1 >\u767B\u5F55</h1>\n    \t\t<div class=\"input_center\">\n    \t\t\t<span>\u8D26\u53F7</span>\n    \t\t\t<input [(ngModel)]=\"user.id\">\n    \t\t</div>\n    \t\t<div class=\"input_center\">  \n    \t\t\t<span>\u5BC6\u7801</span>\n    \t\t\t<input type=\"password\" [(ngModel)]=\"user.pass\">\n    \t\t</div>\n    \t\t<button class=\"btn\" (click)=\"onLogin(user)\">\u6DFB\u52A0</button>\n    \t\t<login-list></login-list>\n        \n    \t\t",
            styles: ["\n   \t\t.input_center{\n   \t\t\talign:center;\n   \t\t\tbackground-color: #CFD8DC !important;\n   \t\t}\n   \t\t.btn{\n   \t\t\twidth:100px;\n   \t\t\theight:20px;\n   \t\t\tbackground-color:red;\n   \t\t}\n   \t"]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map