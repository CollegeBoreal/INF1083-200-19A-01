(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/search/search-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
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

module.exports = "<ActionBar>\n    <Label text=\"Search\"></Label>\n</ActionBar>\n\n<StackLayout class=\"form\" >\n\n    <TextField class=\"input\" hint=\"Capital\" [(ngModel)]=\"name\"></TextField>\n\n    <Button text=\"Search\" class=\"btn btn-primary\" (tap)=\"searchCapital()\"></Button>\n\n    <ListView [items]=\"countries\">\n        <ng-template let-item=\"item\">\n            <StackLayout>\n                <Label [text]=\"item.name\"></Label>\n                <Label [text]=\"item.capital\"></Label>\n            </StackLayout>\n        </ng-template>\n    </ListView>\n\n</StackLayout>\n"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/apicall.service.ts");


var SearchComponent = /** @class */ (function () {
    function SearchComponent(apiService) {
        this.apiService = apiService;
        // Use the constructor to inject services.
    }
    SearchComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    SearchComponent.prototype.searchCapital = function () {
        var _this = this;
        this.apiService
            .searchCountryByName(this.name)
            .subscribe(function (data) {
            console.log(data);
            _this.countries = data;
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _app_shared_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApicallService"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __webpack_require__("./app/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_app_shared_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApicallService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/search/search.component.ts");





var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"]
            ],
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./app/shared/apicall.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");




var ApicallService = /** @class */ (function () {
    function ApicallService(httpClient) {
        this.httpClient = httpClient;
    }
    ApicallService.prototype.searchCountryByName = function (name) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('X-RapidAPI-Key', '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965');
        return this.httpClient.get("https://restcountries-v1.p.rapidapi.com/capital/" + name, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Capital not found!');
        }));
    };
    ApicallService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApicallService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApicallService);
    return ApicallService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvYXBpY2FsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNsQjtBQUVyRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlFQUFlLEVBQUU7Q0FDbEQsQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDYmhDLHdsQjs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVZO0FBTTlEO0lBS0kseUJBQW9CLFVBQTBCO1FBQTFCLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBQzFDLDBDQUEwQztJQUM5QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLDhEQUE4RDtJQUNsRSxDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFVBQVU7YUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxVQUFDLElBQW9CO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkFmK0IsMEVBQWM7O0lBTHJDLGVBQWU7UUFKM0IsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLG1FQUFzQztTQUN6QyxDQUFDO3lDQU1rQywwRUFBYztPQUxyQyxlQUFlLENBcUIzQjtJQUFELHNCQUFDO0NBQUE7QUFyQjJCOzs7Ozs7Ozs7QUNSNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFDRjtBQUVQO0FBQ1Q7QUFlckQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFieEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLGtGQUF1QjtnQkFDdkIsMEVBQW1CO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGlFQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBO0FBQUo7Ozs7Ozs7OztBQ3BCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ2tCO0FBQ2Q7QUFDSDtBQU01QztJQUVJLHdCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUU5Qyw0Q0FBbUIsR0FBbkIsVUFBb0IsSUFBWTtRQUM1QixJQUFJLE9BQU8sR0FBZ0IsSUFBSSxnRUFBVyxFQUFFLENBQUM7UUFDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQ3BCLGdCQUFnQixFQUNoQixvREFBb0QsQ0FDdkQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ3RCLGtEQUFrRCxHQUFHLElBQUksRUFDekQsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQ3JCLENBQUMsSUFBSSxDQUNGLDBEQUFHLENBQUMsVUFBQyxJQUFlO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxFQUFFLGlFQUFVLENBQUUsZUFBSztZQUNqQixPQUFPLHVEQUFVLENBQUUsb0JBQW9CLENBQUUsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FDTDtJQUNMLENBQUM7O2dCQW5CK0IsK0RBQVU7O0lBRmpDLGNBQWM7UUFIMUIsZ0VBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBR2tDLCtEQUFVO09BRmpDLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQTtBQXRCMEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlNlYXJjaFxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiID5cXG5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkNhcGl0YWxcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTZWFyY2hcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJzZWFyY2hDYXBpdGFsKClcXFwiPjwvQnV0dG9uPlxcblxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiY291bnRyaWVzXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0uY2FwaXRhbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvY291bnRyeVwiO1xuaW1wb3J0IHsgQXBpY2FsbFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL2FwaWNhbGwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTZWFyY2hcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY291bnRyaWVzOiBBcnJheTxDb3VudHJ5PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpY2FsbFNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cbiAgICB9XG5cbiAgICBzZWFyY2hDYXBpdGFsKCkge1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2VcbiAgICAgICAgICAgIC5zZWFyY2hDb3VudHJ5QnlOYW1lKHRoaXMubmFtZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IEFycmF5PENvdW50cnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgU2VhcmNoUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlYXJjaENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q291bnRyeX0gZnJvbSBcIn4vYXBwL3NoYXJlZC9jb3VudHJ5XCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpY2FsbFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7fVxuXG4gICAgc2VhcmNoQ291bnRyeUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvdW50cnlbXT57XG4gICAgICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZChcbiAgICAgICAgICAgICdYLVJhcGlkQVBJLUtleScsXG4gICAgICAgICAgICAnMTEwODU1NGNjMW1zaGYxMWMxN2M0ZmVhMmIzZHAxNzkwNTRqc24yNDQ2ZmI3YTg5NjUnXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KFxuICAgICAgICAgICAgYGh0dHBzOi8vcmVzdGNvdW50cmllcy12MS5wLnJhcGlkYXBpLmNvbS9jYXBpdGFsL2AgKyBuYW1lLFxuICAgICAgICAgICAge2hlYWRlcnM6IGhlYWRlcnN9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcCgoZGF0YTogQ291bnRyeVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KSwgY2F0Y2hFcnJvciggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCAnQ2FwaXRhbCBub3QgZm91bmQhJyApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=