"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', loadChildren: './users/users.module#UsersModule' }
];
core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(appRoutes)],
    exports: [router_1.RouterModule]
});
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
