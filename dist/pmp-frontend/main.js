(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/issues/issues.component.ts");
/* harmony import */ var _sprints_sprints_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprints/sprints.component */ "./src/app/sprints/sprints.component.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/chats/chats.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/guard/auth.guard */ "./src/app/guard/auth.guard.ts");










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'issues', component: _issues_issues_component__WEBPACK_IMPORTED_MODULE_4__["IssuesComponent"], canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'sprints', component: _sprints_sprints_component__WEBPACK_IMPORTED_MODULE_5__["SprintsComponent"], canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'messages', component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_6__["ChatsComponent"], canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"] },
    // otherwise redirect to login
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<!-- <section>\n  <router-outlet></router-outlet>\n</section> -->\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>            \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pmp-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/issues/issues.component.ts");
/* harmony import */ var _sprints_sprints_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sprints/sprints.component */ "./src/app/sprints/sprints.component.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/chats/chats.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"],
                _sprints_sprints_component__WEBPACK_IMPORTED_MODULE_10__["SprintsComponent"],
                _chats_chats_component__WEBPACK_IMPORTED_MODULE_11__["ChatsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
            ],
            providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-4 mx-auto\">\n      <span class=\"anchor\" id=\"formLogin\"></span>\n      <!-- form card login -->\n      <div class=\"card rounded-0\">\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Login</h3>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\" class=\"btn btn-success float-right\">Login</button>\n                <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            </div>\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n          </form>\n        </div>\n        <!--/card-block-->\n      </div>\n      <!-- /form card login -->\n\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AuthComponent = /** @class */ (function () {
    function AuthComponent(formBuilder, route, router, _auth, _router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this._auth.isAuthenticated) {
            //this.router.navigate(['/issues']);
            console.log('already loogedIn');
        }
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/issues';
    };
    Object.defineProperty(AuthComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this._auth.loginUser(this.f.username.value, this.f.password.value).subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/chats/chats.component.html":
/*!********************************************!*\
  !*** ./src/app/chats/chats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chats works!\n</p>\n"

/***/ }),

/***/ "./src/app/chats/chats.component.scss":
/*!********************************************!*\
  !*** ./src/app/chats/chats.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NoYXRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chats/chats.component.ts":
/*!******************************************!*\
  !*** ./src/app/chats/chats.component.ts ***!
  \******************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatsComponent = /** @class */ (function () {
    function ChatsComponent() {
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    ChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./chats.component.html */ "./src/app/chats/chats.component.html"),
            styles: [__webpack_require__(/*! ./chats.component.scss */ "./src/app/chats/chats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatsComponent);
    return ChatsComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._auth.isAuthenticated) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(AuthService) {
        this.AuthService = AuthService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        /* console.log("user is authenticated ? " + this.AuthService.isAuthenticated)
        console.log("current user ")
        console.log(this.AuthService.currentUserValue)
        console .log(this.AuthService.getUserToken)*/
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/issues/issues.component.html":
/*!**********************************************!*\
  !*** ./src/app/issues/issues.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row vdivide\" style=\"margin-top:5px\">\n  <div class=\"col-sm-2\">\n    <div>\n      <h6>Input queue</h6>\n      <hr width=\"100%\" style=\"margin:0;\">\n    </div>\n  </div>\n  <div class=\"col-sm-2\" >\n      <h6>Requirements Gathering</h6>\n      <hr width=\"100%\" style=\"margin:0;\">\n  </div>\n  <div class=\"col-sm-2\" >\n      <div >\n          <h6> Work In Progress</h6>\n          <hr width=\"100%\" style=\"margin:0;\">\n      </div>\n   </div>\n  <div class=\"col-sm-2\" >\n      <div >\n          <h6> Quality Assurance</h6>\n          <hr width=\"100%\" style=\"margin:0;\">\n      </div>\n  </div>\n  <div class=\"col-sm-2\" >\n      <div >\n          <h6> User Acceptance</h6>\n          <hr width=\"100%\" style=\"margin:0;\">\n      </div>\n  </div>\n  <div class=\"col-sm-2\" >\n      <div>\n          <h6>Done</h6>\n          <hr width=\"100%\" style=\"margin:0;\">\n      </div>\n  </div>\n</div>\n\n<br/>\n<div class=\"row vdivide\" >\n    <div class=\"col-sm-2\" >\n        <div class=\"example-container\">\n            <!-- <h6>List</h6> -->\n            <cdk-drop\n            #inputqueueList\n            [data]=\"inputqueue\"\n            [connectedTo]=\"[requirementsgatheringList, workinprogressList, qualityassuranceList, useracceptanceList, doneList]\"\n            (dropped)=\"drop($event)\"\n            class=\"example-list\" id=\"inputqueue\">\n                <div class=\"card\" *ngFor=\"let item of inputqueue\" id=\"{{item.id}}\" cdkDrag>\n                        <div class=\"card-header\" style=\"height:40px; font-size: 12px; font-weight: bold;\">\n                                <table style=\"width:100%\">\n                                    <tr>\n                                        <td >Project-name</td>\n                                        <td align=\"right\"><i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>\n                                    </tr>\n                                </table>\n                            </div>\n    \n                            <div class=\"card-body\">\n                                <a href=\"#\" >\n                                <h6 class=\"card-title\" style=\"font-size: 12px; font-weight: bold;\">{{item.title}}</h6>\n                                </a>\n                                <i class=\"fa fa-user fa-xs\" aria-hidden=\"true\">\n                                    user\n                                </i> <i class=\"fa fa-caret-down fa-xs\" aria-hidden=\"true\"></i>\n                                \n                            </div>\n                </div>\n            </cdk-drop>\n        </div>\n    </div>\n\n    <div class=\"col-sm-2\" >\n        <div class=\"example-container\">\n            <!-- <h6>List</h6> -->\n            <cdk-drop\n                #requirementsgatheringList\n                [data]=\"requirementsgathering\"\n                [connectedTo]=\"[inputqueueList, workinprogressList, qualityassuranceList, useracceptanceList, doneList]\"\n                (dropped)=\"drop($event)\"\n                class=\"example-list\" id=\"requirementsgathering\">\n                <div class=\"card\" *ngFor=\"let item of requirementsgathering\" id=\"{{item.id}}\" cdkDrag>\n                        <div class=\"card-header\" style=\"height:40px; font-size: 12px; font-weight: bold;\">\n                                <table style=\"width:100%\">\n                                    <tr>\n                                        <td >Project-name</td>\n                                        <td align=\"right\"><i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>\n                                    </tr>\n                                </table>\n                            </div>\n    \n                            <div class=\"card-body\" style=\"margin:0px\">\n                                <a href=\"#\" >\n                                <h6 class=\"card-title\" style=\"font-size: 12px; font-weight: bold; margin-top: 0px;\">{{item.title}}</h6>\n                                </a>\n                                <i class=\"fa fa-user fa-xs\" aria-hidden=\"true\">user</i> <i class=\"fa fa-caret-down fa-xs\" aria-hidden=\"true\"></i>\n                            </div>\n                </div>\n            </cdk-drop>\n        </div>\n    </div>\n    <div class=\"col-sm-2\" >\n        <div class=\"example-container\">\n            <cdk-drop\n            #workinprogressList\n            [data]=\"workinprogress\"\n            [connectedTo]=\"[inputqueueList, requirementsgatheringList, qualityassuranceList, useracceptanceList, doneList]\"\n            (dropped)=\"drop($event)\"\n            class=\"example-list\" id=\"workinprogress\">\n                <div class=\"card\" *ngFor=\"let item of workinprogress\" id=\"{{item.id}}\" cdkDrag>\n                        <div class=\"card-header bg-secondary\" style=\"height:40px; font-size: 12px; font-weight: bold;\">\n                            <table style=\"width:100%\">\n                                <tr>\n                                    <td >Project-name</td>\n                                    <td align=\"right\"><i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></td>\n                                    <td align=\"right\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></td>\n                                    <td align=\"right\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>\n                                </tr>\n                            </table>\n                        </div>\n\n                        <div class=\"card-body\" style=\"margin:0px\">\n                            <a href=\"#\" >\n                            <h6 class=\"card-title\" style=\"font-size: 12px; font-weight: bold; margin-top: 0px;\">{{item.title}}</h6>\n                            </a>\n                            <i class=\"fa fa-user fa-xs\" aria-hidden=\"true\">user</i> <i class=\"fa fa-caret-down fa-xs\" aria-hidden=\"true\"></i>\n                        </div>\n                </div>\n            </cdk-drop>\n        </div>\n\n    </div>\n    <div class=\"col-sm-2\" >\n        <div class=\"example-container\">\n            <cdk-drop\n            #qualityassuranceList\n            [data]=\"qualityassurance\"\n            [connectedTo]=\"[inputqueueList, requirementsgatheringList, workinprogressList, useracceptanceList, doneList]\"\n            (dropped)=\"drop($event)\"\n            class=\"example-list\" id=\"qualityassurance\">\n                <div class=\"card\" *ngFor=\"let item of qualityassurance\" id=\"{{item.id}}\" cdkDrag>\n                        <div class=\"card-header bg-info\" style=\"height:40px; font-size: 12px; font-weight: bold;\">\n                                <table style=\"width:100%\">\n                                    <tr>\n                                        <td >Project-name</td>\n                                        <td align=\"right\"><i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>\n                                    </tr>\n                                </table>\n                            </div>\n    \n                            <div class=\"card-body\">\n                                <a href=\"#\" >\n                                <h6 class=\"card-title\" style=\"font-size: 12px; font-weight: bold;\">{{item.title}}</h6>\n                                </a>\n                                <i class=\"fa fa-user fa-xs\" aria-hidden=\"true\">user</i> <i class=\"fa fa-caret-down fa-xs\" aria-hidden=\"true\"></i>\n                                \n                            </div>\n                </div>\n            </cdk-drop>\n        </div>\n    </div>\n    <div class=\"col-sm-2\" >\n        <div class=\"example-container\">\n            <cdk-drop\n            #useracceptanceList\n            [data]=\"useracceptance\"\n            [connectedTo]=\"[inputqueueList, requirementsgatheringList, workinprogressList, qualityassuranceList, doneList]\"\n            (dropped)=\"drop($event)\"\n            class=\"example-list\" id=\"useracceptance\">\n                <div class=\"card\" *ngFor=\"let item of useracceptance\" id=\"{{item.id}}\" cdkDrag>\n                        <div class=\"card-header bg-info\" style=\"height:40px; font-size: 12px; font-weight: bold;\">\n                                <table style=\"width:100%\">\n                                    <tr>\n                                        <td >Project-name</td>\n                                        <td align=\"right\"><i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></td>\n                                        <td align=\"right\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>\n                                    </tr>\n                                </table>\n                            </div>\n    \n                            <div class=\"card-body\">\n                                <a href=\"#\" >\n                                <h6 class=\"card-title\" style=\"font-size: 12px; font-weight: bold;\">{{item.title}}</h6>\n                                </a>\n                                <i class=\"fa fa-user fa-xs\" aria-hidden=\"true\">user</i> <i class=\"fa fa-caret-down fa-xs\" aria-hidden=\"true\"></i>\n                                \n                            </div>\n                </div>\n            </cdk-drop>\n        </div>\n    </div>\n\n    <div class=\"col-sm-2\" >\n        <div class=\"example-container\">\n            <cdk-drop\n            #doneList\n            [data]=\"done\"\n            [connectedTo]=\"[inputqueueList, requirementsgatheringList, workinprogressList, qualityassuranceList, useracceptanceList]\"\n            (dropped)=\"drop($event)\"\n            class=\"example-list\" id=\"done\">\n                <div class=\"card\" *ngFor=\"let item of done\" id=\"{{item.id}}\" cdkDrag style=\"padding: 0px ; max-height: 100px; border-left: solid 0.4em; border-left-color: green;\">\n                        <div class=\"card-body\">\n                            <a href=\"#\" >\n                            <h6 class=\"card-title\" style=\"font-size: 12px; font-weight: bold;\">{{item.title}}</h6>\n                            </a>                            \n                        </div>\n                </div>\n            </cdk-drop>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/issues/issues.component.scss":
/*!**********************************************!*\
  !*** ./src/app/issues/issues.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row.vdivide [class*='col-']:not(:last-child):after {\n  background: #e0e0e0;\n  width: 1px;\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  /* min-height: 70px; */ }\n\n.example-container {\n  /*  width: 400px; */\n  width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzL0M6XFxVc2Vyc1xccHJpdGlcXERvY3VtZW50c1xcR2l0SHViXFxDUzY3My1UZWFtMi1jeXJpbF9icmFuY2hcXHBtcC1mcm9udGVuZC9zcmNcXGFwcFxcaXNzdWVzXFxpc3N1ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQUs7RUFDTCxTQUFTO0VBQ1QsUUFBUTtFQUNSLHNCQUFBLEVBQXVCOztBQUd6QjtFQUNDLG1CQUFBO0VBQ0MsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFIQUU4QyxFQUFBOztBQUdoRDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNELEVBQUE7O0FBR3hEO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9pc3N1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BpbXBvcnQgJy4vZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuXG4ucm93LnZkaXZpZGUgW2NsYXNzKj0nY29sLSddOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgd2lkdGg6IDFweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICAvKiBtaW4taGVpZ2h0OiA3MHB4OyAqL1xuICB9XG5cbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgIC8qICB3aWR0aDogNDAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIFxuICAuZXhhbXBsZS1saXN0IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/issues/issues.component.ts":
/*!********************************************!*\
  !*** ./src/app/issues/issues.component.ts ***!
  \********************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");



var IssuesComponent = /** @class */ (function () {
    function IssuesComponent() {
        this.inputqueue = [
            { id: 1, title: 'Get to work', dateAdded: new Date().toString() },
            { id: 2, title: 'Pick up groceries', dateAdded: new Date().toString() },
            { id: 3, title: 'Go home', dateAdded: new Date().toString() },
            { id: 4, title: 'Fall asleep', dateAdded: new Date().toString() }
        ];
        this.requirementsgathering = [
            { id: 7, title: 'Take a shower', dateAdded: new Date().toString() },
            { id: 8, title: 'Check e-mail', dateAdded: new Date().toString() },
            { id: 9, title: 'Walk dog', dateAdded: new Date().toString() }
        ];
        this.workinprogress = [];
        this.qualityassurance = [];
        this.useracceptance = [];
        this.done = [
            { id: 5, title: 'Get up', dateAdded: new Date().toString() },
            { id: 6, title: 'Brush teeth', dateAdded: new Date().toString() }
        ];
    }
    IssuesComponent.prototype.ngOnInit = function () {
    };
    IssuesComponent.prototype.addItem = function (list, todo) {
        if (list === 'inputqueue') {
            this.inputqueue.push({ id: 21, title: todo, dateAdded: new Date().toString() });
        }
        else {
            this.workinprogress.push({ id: 22, title: todo, dateAdded: new Date().toString() });
        }
    };
    IssuesComponent.prototype.drop = function (event) {
        // first check if it was moved within the same list or moved to a different list
        if (event.previousContainer === event.container) {
            // change the items index if it was moved within the same list
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            // remove item from the previous list and add it to the new array
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.item.element.nativeElement.id);
            console.log(event.container.element.nativeElement.id);
        }
    };
    IssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issues',
            template: __webpack_require__(/*! ./issues.component.html */ "./src/app/issues/issues.component.html"),
            styles: [__webpack_require__(/*! ./issues.component.scss */ "./src/app/issues/issues.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" *ngIf=\"_authService.isAuthenticated\">\n  <a class=\"navbar-brand\" href=\"#\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/issues\" routerLinkActive=\"active\">Issues</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sprints\" routerLinkActive=\"inactive\">Sprints</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"inactive\">Admin</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n        <a class=\"nav-link\" routerLink=\"/messages\" routerLinkActive=\"inactive\">Messages</a>\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!_authService.isAuthenticated\" routerLinkActive=\"inactive\">Login</a>\n        <a class=\"nav-link\" style=\"cursor:pointer\" *ngIf=\"_authService.isAuthenticated\" (click)=\"_authService.logoutUser()\">Logout</a> \n    </ul>\n  </div>\n</nav>    \n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* header {\n    background: #7700FF;\n\n    .logo {\n        font-weight: bold;\n    }\n\n    nav {\n        justify-self: right;\n    \n        ul {\n            list-style-type: none;\n            margin: 0; padding: 0;\n\n            li {\n                float: left;\n\n                a {\n                    padding: 1.5em;\n                    text-transform: uppercase;\n                    font-size: .8em;\n\n                    &:hover {\n                        background: #8E2BFF;\n                    }\n                }\n            }\n        }\n    }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xccHJpdGlcXERvY3VtZW50c1xcR2l0SHViXFxDUzY3My1UZWFtMi1jeXJpbF9icmFuY2hcXHBtcC1mcm9udGVuZC9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dDNkJHIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzc3MDBGRjtcblxuICAgIC5sb2dvIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICBcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4RTJCRkY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59ICovIiwiLyogaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzcwMEZGO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuICAgIFxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhFMkJGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(_authService) {
        this._authService = _authService;
        this.appTitle = 'P.M.> Platform';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this.currentUser = 'currentUser';
    }
    AuthService.prototype.getSomeThing = function () {
        return console.log('we send you something from the auth service');
    };
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return JSON.parse(localStorage.getItem(this.currentUser));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.currentUser);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "getUserToken", {
        get: function () {
            if (this.isAuthenticated) {
                var token = this.currentUserValue['token'];
                return token;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.loginUser = function (username, password) {
        var data = {
            username: username,
            password: password
        };
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/login', data, headers);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('currentUser');
        this._router.navigate(['/login']);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers_1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'x-access-token': this.getUserToken })
        };
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/user/', headers_1)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };
        var data = {
            username: username,
            password: password
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/login', data, headers).subscribe(function (res) {
            console.log(res);
            localStorage.setItem(_this.currentUser, JSON.stringify(res));
        }, function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/sprints/sprints.component.html":
/*!************************************************!*\
  !*** ./src/app/sprints/sprints.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sprints works!\n</p>\n"

/***/ }),

/***/ "./src/app/sprints/sprints.component.scss":
/*!************************************************!*\
  !*** ./src/app/sprints/sprints.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwcmludHMvc3ByaW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sprints/sprints.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sprints/sprints.component.ts ***!
  \**********************************************/
/*! exports provided: SprintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintsComponent", function() { return SprintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SprintsComponent = /** @class */ (function () {
    function SprintsComponent() {
    }
    SprintsComponent.prototype.ngOnInit = function () {
    };
    SprintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sprints',
            template: __webpack_require__(/*! ./sprints.component.html */ "./src/app/sprints/sprints.component.html"),
            styles: [__webpack_require__(/*! ./sprints.component.scss */ "./src/app/sprints/sprints.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SprintsComponent);
    return SprintsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:5005/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\priti\Documents\GitHub\CS673-Team2-cyril_branch\pmp-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map