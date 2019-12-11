(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/item-detail/item-detail.component.ts");




var routes = [
    { path: "default", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "item/:id", component: _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Home\"></Label>\n</ActionBar>\n\n<GridLayout class=\"page page-content\">\n    <ListView [items]=\"items\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <Label [nsRouterLink]=\"['../item', item.id]\" [text]=\"item.name\" class=\"list-group-item\"></Label>\n        </ng-template>\n    </ListView>\n</GridLayout>\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/data.service.ts");


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_itemService) {
        this._itemService = _itemService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this._itemService.getItems();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/home/item-detail/item-detail.component.ts");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./app/home/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <NavigationButton (tap)=\"onBackTap()\" android.systemIcon=\"ic_menu_back\"></NavigationButton>\n    <Label [text]=\"item.name\"></Label>\n</ActionBar>\n\n<GridLayout>\n    <Label class=\"m-10 h3\" verticalAlignment=\"top\" [text]=\"item.description\"></Label>\n    <Image [src]=\"item.avatar\" verticalAlignment=\"center\"></Image>\n</GridLayout>\n"

/***/ }),

/***/ "./app/home/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/data.service.ts");




var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(_data, _route, _routerExtensions) {
        this._data = _data;
        this._route = _route;
        this._routerExtensions = _routerExtensions;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
    };
    ItemDetailComponent.prototype.onBackTap = function () {
        this._routerExtensions.back();
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ItemDetail",
            template: __webpack_require__("./app/home/item-detail/item-detail.component.html")
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var DataService = /** @class */ (function () {
    function DataService() {
        this.items = new Array({
            id: 1,
            name: "FIFA20",
            description: "Jeux de Foot",
            avatar: "https://media.playstation.com/is/image/SCEA/fifa-20-standard-edition-01-ps4-us-05sep19?$native_nt$"
        }, {
            id: 2,
            name: "Naruto",
            description: "Jeux d'Aventure",
            avatar: "http://image.jeuxvideo.com/medias/142892/1428916387-80-jaquette-avant.jpg"
        }, {
            id: 3,
            name: "UFC 19",
            description: "Jeux de Combat",
            avatar: "https://media.gamestop.com/i/gamestop/10156108/EA-Sports-UFC-3?$pdp$"
        }, {
            id: 4,
            name: "God of War",
            description: "Jeux D'Aventure",
            avatar: "https://media.gamestop.com/i/gamestop/10131619/God-of-War"
        }, {
            id: 5,
            name: "Call of Duty Modern War",
            description: "Jeux d Action",
            avatar: "https://cdn.cdkeys.com/500x706/media/catalog/product/c/o/cod-modern-warfare-xp-boost-dlc-ps4.jpg"
        }, {
            id: 6,
            name: "Need For Speed",
            description: "Description for Item 6",
            avatar: "https://media.gamestop.com/i/gamestop/10121882/Need-for-Speed?$pdp$"
        });
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    DataService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFDeUI7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0ZBQW1CLEVBQUU7Q0FDdkQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5Qix5Yjs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRWM7QUFNaEU7SUFHSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBSSxD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Z0I7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxNQUFNLEVBQUUscUVBQXFFO1NBQ2hGLENBRUosQ0FBQztJQVNOLENBQUM7SUFQRyw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWhEUSxXQUFXO1FBSHZCLGdFQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csV0FBVyxDQWlEdkI7SUFBRCxrQkFBQztDQUFBO0FBakR1QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJkZWZhdWx0XCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIj5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcIml0ZW1zXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBbbnNSb3V0ZXJMaW5rXT1cXFwiWycuLi9pdGVtJywgaXRlbS5pZF1cXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtIH0gZnJvbSBcIi4uL3NoYXJlZC9kYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEFycmF5PElEYXRhSXRlbT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5faXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uICh0YXApPVxcXCJvbkJhY2tUYXAoKVxcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0PlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTAgaDNcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgPEltYWdlIFtzcmNdPVxcXCJpdGVtLmF2YXRhclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9JbWFnZT5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIElEYXRhSXRlbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkl0ZW1EZXRhaWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtOiBJRGF0YUl0ZW07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZGF0YTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2RhdGEuZ2V0SXRlbShpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBhdmF0YXI6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIkZJRkEyMFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSmV1eCBkZSBGb290XCIsXG4gICAgICAgICAgICBhdmF0YXI6IFwiaHR0cHM6Ly9tZWRpYS5wbGF5c3RhdGlvbi5jb20vaXMvaW1hZ2UvU0NFQS9maWZhLTIwLXN0YW5kYXJkLWVkaXRpb24tMDEtcHM0LXVzLTA1c2VwMTk/JG5hdGl2ZV9udCRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIG5hbWU6IFwiTmFydXRvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJKZXV4IGQnQXZlbnR1cmVcIixcbiAgICAgICAgICAgIGF2YXRhcjogXCJodHRwOi8vaW1hZ2UuamV1eHZpZGVvLmNvbS9tZWRpYXMvMTQyODkyLzE0Mjg5MTYzODctODAtamFxdWV0dGUtYXZhbnQuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiBcIlVGQyAxOVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSmV1eCBkZSBDb21iYXRcIixcbiAgICAgICAgICAgIGF2YXRhcjogXCJodHRwczovL21lZGlhLmdhbWVzdG9wLmNvbS9pL2dhbWVzdG9wLzEwMTU2MTA4L0VBLVNwb3J0cy1VRkMtMz8kcGRwJFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgbmFtZTogXCJHb2Qgb2YgV2FyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJKZXV4IEQnQXZlbnR1cmVcIixcbiAgICAgICAgICAgIGF2YXRhcjogXCJodHRwczovL21lZGlhLmdhbWVzdG9wLmNvbS9pL2dhbWVzdG9wLzEwMTMxNjE5L0dvZC1vZi1XYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIG5hbWU6IFwiQ2FsbCBvZiBEdXR5IE1vZGVybiBXYXJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkpldXggZCBBY3Rpb25cIixcbiAgICAgICAgICAgIGF2YXRhcjogXCJodHRwczovL2Nkbi5jZGtleXMuY29tLzUwMHg3MDYvbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2Mvby9jb2QtbW9kZXJuLXdhcmZhcmUteHAtYm9vc3QtZGxjLXBzNC5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIG5hbWU6IFwiTmVlZCBGb3IgU3BlZWRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDZcIixcbiAgICAgICAgICAgIGF2YXRhcjogXCJodHRwczovL21lZGlhLmdhbWVzdG9wLmNvbS9pL2dhbWVzdG9wLzEwMTIxODgyL05lZWQtZm9yLVNwZWVkPyRwZHAkXCJcbiAgICAgICAgfVxuXG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJRGF0YUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9