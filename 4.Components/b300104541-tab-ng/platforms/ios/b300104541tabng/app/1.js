(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/browse/browse-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRoutingModule", function() { return BrowseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse.component.ts");



var routes = [
    { path: "default", component: _browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"] }
];
var BrowseRoutingModule = /** @class */ (function () {
    function BrowseRoutingModule() {
    }
    BrowseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], BrowseRoutingModule);
    return BrowseRoutingModule;
}());



/***/ }),

/***/ "./app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Browse\"></Label>\n</ActionBar>\n\n<GridLayout>\n    <WebView heig\n</GridLayout>\n"

/***/ }),

/***/ "./app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Browse",
            template: __webpack_require__("./app/browse/browse.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./app/browse/browse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseModule", function() { return BrowseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse-routing.module.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/browse/browse.component.ts");




var BrowseModule = /** @class */ (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrowseRoutingModule"]
            ],
            declarations: [
                _browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], BrowseModule);
    return BrowseModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRWxCO0FBRXJELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRTtDQUNsRCxDQUFDO0FBTUY7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQUovQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkaEMscUw7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFNbEQ7SUFDSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLDhEQUE4RDtJQUNsRSxDQUFDO0lBUFEsZUFBZTtRQUozQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsbUVBQXNDO1NBQ3pDLENBQUM7O09BQ1csZUFBZSxDQVEzQjtJQUFELHNCQUFDO0NBQUE7QUFSMkI7Ozs7Ozs7OztBQ041QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFVDtBQUNUO0FBY3JEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBWnhCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QiwwRUFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaUVBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIkJyb3dzZVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gICAgPFdlYlZpZXcgaGVpZ1xcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYnJvd3NlLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBCcm93c2VDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9