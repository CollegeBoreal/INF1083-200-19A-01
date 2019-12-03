(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2],{

/***/ "./app/search/search-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search.component.ts");



var routes = [
    { path: "default", component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Search\"></Label>\n</ActionBar>\n\n<GridLayout class=\"page__content\">\n    <Label class=\"page__content-icon fas\" text=\"&#xf002;\"></Label>\n    <Label class=\"page__content-placeholder\" text=\"<!-- Search page content goes here -->\"></Label>\n</GridLayout>\n"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        // Use the constructor to inject services.
    }
    SearchComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __webpack_require__("./app/search/search.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/search/search.component.ts");




var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]
            ],
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRWxCO0FBRXJELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRTtDQUNsRCxDQUFDO0FBTUY7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQUovQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkaEMscU9BQXFPLHNJOzs7Ozs7OztBQ0FyTztBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQU1sRDtJQUNJO1FBQ0ksMENBQTBDO0lBQzlDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksOERBQThEO0lBQ2xFLENBQUM7SUFQUSxlQUFlO1FBSjNCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixtRUFBc0M7U0FDekMsQ0FBQzs7T0FDVyxlQUFlLENBUTNCO0lBQUQsc0JBQUM7Q0FBQTtBQVIyQjs7Ozs7Ozs7O0FDTjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVUO0FBQ1Q7QUFjckQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFaeEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLDBFQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDVixpRUFBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiZGVmYXVsdFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiU2VhcmNoXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFzXFxcIiB0ZXh0PVxcXCImI3hmMDAyO1xcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LXBsYWNlaG9sZGVyXFxcIiB0ZXh0PVxcXCI8IS0tIFNlYXJjaCBwYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zZWFyY2gtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2VhcmNoUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlYXJjaENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9