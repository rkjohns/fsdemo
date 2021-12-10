(self["webpackChunkangular_shoppe_demo"] = self["webpackChunkangular_shoppe_demo"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 99771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    { path: '', component: _components__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent },
    { path: 'cart', component: _components__WEBPACK_IMPORTED_MODULE_0__.CartComponent },
    { path: 'checkout', component: _components__WEBPACK_IMPORTED_MODULE_0__.CheckoutComponent },
    { path: 'products', component: _components__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent },
    { path: 'thankyou', component: _components__WEBPACK_IMPORTED_MODULE_0__.ThankYouComponent },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullstory/browser */ 3307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_cart_cart_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart/cart-button.component */ 1079);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 47143);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);










class AppComponent {
    constructor() {
        //const { orgId } = environment;
        this.title = 'Angular Shoppe';
        // load the FullStory recording snippet if an orgId is set
        // if (orgId) {
        //   FullStory.init({ orgId, debug: false });
        // }
        _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.init({ orgId: '173V6P',
            devMode: true });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 4, consts: [["mat-icon-button", "", "aria-label", "Navigation menu", 3, "matMenuTriggerFor"], ["routerLink", "/products", 1, "toolbar-title"], [1, "toolbar-spacer"], ["menu", "matMenu"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-cart-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx.title));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _components_cart_cart_button_component__WEBPACK_IMPORTED_MODULE_1__.CartButtonComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe], styles: [".toolbar-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n\n.toolbar-icon[_ngcontent-%COMP%] {\n  padding-right: 14px;\n}\n\n.toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50b29sYmFyLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xufVxuXG4udG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/analytics */ 71037);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 99771);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ 21866);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 47143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _services__WEBPACK_IMPORTED_MODULE_4__.CartService,
        _services__WEBPACK_IMPORTED_MODULE_4__.ProductService,
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__.ScreenTrackingService,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__.AngularFireAnalyticsModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuthModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.CartComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.CartButtonComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.CheckoutComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.ThankYouComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_fire__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__.AngularFireAnalyticsModule,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuthModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule] }); })();


/***/ }),

/***/ 1079:
/*!**********************************************************!*\
  !*** ./src/app/components/cart/cart-button.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartButtonComponent": function() { return /* binding */ CartButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 21866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);






class CartButtonComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cartService.getItems().subscribe(items => this.cartBadge = items.length);
    }
}
CartButtonComponent.ɵfac = function CartButtonComponent_Factory(t) { return new (t || CartButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartButtonComponent, selectors: [["app-cart-button"]], decls: 4, vars: 1, consts: [["routerLink", "/cart", "mat-flat-button", "", "color", "primary", "routerLink", "cart", "aria-label", "Shopping Cart", "matBadgePosition", "above after", "matBadgeColor", "accent", 3, "matBadge"], [1, "toolbar-icon"]], template: function CartButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Cart\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matBadge", ctx.cartBadge);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 40088:
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": function() { return /* binding */ CartComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);










function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Alas, there are no items in your cart.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Keep shoppe-ing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_div_5_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_div_5_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r17.title);
} }
function CartComponent_div_5_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 24);
} }
function CartComponent_div_5_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_div_5_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r18.price);
} }
function CartComponent_div_5_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r7.totalCost));
} }
function CartComponent_div_5_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_div_5_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.quantity);
} }
function CartComponent_div_5_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 24);
} }
function CartComponent_div_5_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 22);
} }
function CartComponent_div_5_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_5_td_20_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.removeItem(item_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "remove_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("matTooltip", "Remove ", item_r20.title, " from your cart");
} }
function CartComponent_div_5_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 24);
} }
function CartComponent_div_5_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 26);
} }
function CartComponent_div_5_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 27);
} }
function CartComponent_div_5_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 28);
} }
function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CartComponent_div_5_th_7_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CartComponent_div_5_td_8_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CartComponent_div_5_td_9_Template, 1, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CartComponent_div_5_th_11_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CartComponent_div_5_td_12_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CartComponent_div_5_td_13_Template, 4, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CartComponent_div_5_th_15_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartComponent_div_5_td_16_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CartComponent_div_5_td_17_Template, 1, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CartComponent_div_5_th_19_Template, 1, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CartComponent_div_5_td_20_Template, 4, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CartComponent_div_5_td_21_Template, 1, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CartComponent_div_5_tr_22_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CartComponent_div_5_tr_23_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CartComponent_div_5_tr_24_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Keep Shoppe-ing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Continue to Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.items$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", ctx_r1.displayedColumns);
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.displayedColumns = ['removeAction', 'name', 'quantity', 'cost'];
        this.totalCost = 0;
    }
    ngOnInit() {
        this.initDataSource();
        this.initCalculator();
    }
    /**
     * Initialize the MatTable's datasource.
     */
    initDataSource() {
        this.items$ = this.cartService.getItems();
    }
    /**
     * Based on items in the cart, calculate things (e.g. totals, quantities, etc).
     */
    initCalculator() {
        // add an observer to the cart's items and compute the total cost
        this.items$.subscribe(() => {
            this.totalCost = this.cartService.calculateTotalCost();
        });
    }
    /**
     * Removes an item from the cart entirely.
     * @param item the Product item to be removed
     */
    removeItem(item) {
        const { id } = item;
        this.cartService.removeItem(id);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 8, vars: 8, consts: [["fxFlex.lt-md", "5", "fxFlex.gt-sm", "20"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "shopping-cart"], ["class", "empty-cart", 4, "ngIf"], [4, "ngIf"], [1, "empty-cart"], ["mat-button", "", "color", "primary", "routerLink", "/products"], [1, "mat-elevation-z8"], ["fxLayout", "column"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "quantity"], ["matColumnDef", "removeAction"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["routerLink", "/products", "mat-stroked-button", "", "color", "primary", 1, "link-button"], ["routerLink", "/checkout", "mat-flat-button", "", "color", "primary", "aria-label", "Checkout", 1, "link-button"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "matTooltip", "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartComponent_div_5_Template, 30, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 0);
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.items$) || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.items$)) == null ? null : tmp_0_0.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, ctx.items$)) == null ? null : tmp_1_0.length) > 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatFooterCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatFooterRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: [".link-button[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  margin-top: 32px;\n  margin-left: 8px;\n}\n\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.shopping-cart[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.shopping-cart[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5lbXB0eS1jYXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hvcHBpbmctY2FydCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5zaG9wcGluZy1jYXJ0IHRhYmxle1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 58149:
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": function() { return /* binding */ CheckoutComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ 42139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var src_app_services_datalayer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/datalayer.service */ 11409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ 70346);

















function CheckoutComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", state_r3.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", state_r3.name, " ");
} }
function CheckoutComponent_mat_list_item_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matBadge", item_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.title);
} }
function CheckoutComponent_mat_list_item_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, item_r5.price), " ", item_r5.unit, "");
} }
class CheckoutComponent {
    constructor(cartService, datalayer, router) {
        this.cartService = cartService;
        this.datalayer = datalayer;
        this.router = router;
        this.shippableStates = src_app_models__WEBPACK_IMPORTED_MODULE_0__.states;
    }
    ngOnInit() {
        this.items$ = this.cartService.getItems();
    }
    /**
     * Get the cart's order total cost.
     */
    getCartTotal() {
        return this.cartService.calculateTotalCost();
    }
    /**
     * Process the order form and checkout.
     */
    checkout() {
        // do some processing ...
        this.items$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(items => this.datalayer.checkout(items));
        this.cartService.clear();
        this.router.navigate(['/thankyou']);
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_datalayer_service__WEBPACK_IMPORTED_MODULE_2__.DatalayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CheckoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 100, vars: 10, consts: [["fxFlex.gt-md", "10", "fxFlex.lt-md", "5"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxFlex", ""], ["fxLayout", "column", "fxFlex.gt-sm", "80"], [1, "mat-elevation-z8"], ["fxLayout.lt-md", "column"], ["appearance", "fill"], ["id", "firstname", "type", "text", "matInput", ""], ["id", "lastname", "type", "text", "matInput", ""], ["id", "email", "type", "email", "matInput", ""], ["fxLayout", "column"], ["id", "address", "type", "text", "matInput", "", 1, "fs-exclude"], ["id", "address2", "type", "text", "matInput", "", 1, "fs-exclude"], ["id", "city", "type", "text", "matInput", ""], ["id", "state"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "zipcode", "type", "number", "minlength", "5", "maxlength", "5", "matInput", ""], ["id", "cc-type"], ["value", "visa"], ["value", "mastercard"], ["value", "amex"], ["id", "cc-name", "matInput", ""], ["id", "cc-num", "type", "text", "matInput", "", 1, "fs-exclude"], ["id", "cc-expires", "matInput", "", 1, "fs-exclude"], ["id", "cc-code", "type", "text", "minlength", "3", "maxlength", "4", "matInput", "", 1, "fs-exclude"], ["fxLayout", "row", "fxLayoutAlign", "end start"], ["mat-flat-button", "", "color", "primary", "aria-label", "Checkout", 1, "checkout-button", 3, "click"], ["fxLayout", "column", "fxFlex.gt-sm", "30"], ["fxLayout", "row"], [4, "ngFor", "ngForOf"], [3, "value"], ["matBadgePosition", "above after", "matBadgeOverlap", "false", 3, "matBadge"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, CheckoutComponent_mat_option_41_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Visa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Mastercard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "American Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Name on Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Credit Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Expiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_78_listener() { return ctx.checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mat-card-content", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, CheckoutComponent_mat_list_item_86_Template, 3, 2, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, CheckoutComponent_mat_list_item_92_Template, 3, 4, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](93, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](98, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.shippableStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](87, 4, ctx.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](93, 6, ctx.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](98, 8, ctx.getCartTotal()));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadge], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe], styles: [".mat-card[_ngcontent-%COMP%] {\n  margin: 32px 12px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.checkout-button[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMzJweCAxMnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5jaGVja291dC1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 99771:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": function() { return /* reexport safe */ _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent; },
/* harmony export */   "CartButtonComponent": function() { return /* reexport safe */ _cart_cart_button_component__WEBPACK_IMPORTED_MODULE_1__.CartButtonComponent; },
/* harmony export */   "CheckoutComponent": function() { return /* reexport safe */ _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutComponent; },
/* harmony export */   "ProductsComponent": function() { return /* reexport safe */ _products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent; },
/* harmony export */   "ThankYouComponent": function() { return /* reexport safe */ _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_4__.ThankYouComponent; }
/* harmony export */ });
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/cart.component */ 40088);
/* harmony import */ var _cart_cart_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart-button.component */ 1079);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ 58149);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ 80697);
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thank-you/thank-you.component */ 8243);







/***/ }),

/***/ 47143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ 76797);
/* harmony import */ var _fullstory_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullstory/browser */ 3307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);







function LoginComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        auth.user.subscribe(user => {
            this.user = user;
            if (user) {
                const { uid, displayName, email } = user;
                _fullstory_browser__WEBPACK_IMPORTED_MODULE_1__.identify(uid, { displayName, email });
            }
        });
    }
    /**
     * Log in using Google OAuth.
     */
    login() {
        this.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider());
    }
    /**
     * Logout the user.
     */
    logout() {
        this.auth.signOut();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 2, consts: [["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_button_0_Template, 5, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_button_1_Template, 5, 0, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 80697:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": function() { return /* binding */ ProductsComponent; }
/* harmony export */ });
/* harmony import */ var _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullstory/browser */ 3307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);










function ProductsComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_mat_grid_tile_1_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const product_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.addToCart(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + product_r1.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", product_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.description);
} }
class ProductsComponent {
    constructor(cartService, mediaObserver, productService, snackbar) {
        this.cartService = cartService;
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.snackbar = snackbar;
        // TODO (van) a better approach is min/max width based on the product's image size
        this.columnBreakpoints = {
            'default': 3,
            'xs': 1,
            'sm': 2,
            'md': 3,
            'lg': 4,
            'xl': 5,
        };
        this.numColumns = this.columnBreakpoints['default'];
        this.products = [];
    }
    ngOnInit() {
        this.observeBreakpoints();
        this.buildProductList();
    }
    /**
     * Adds a product to the user's shopping cart.
     * A snackbar will appear showing the product's title that was added.
     * @param product the Product to be added
     */
    addToCart(product) {
        const { id } = product;
        this.cartService.addItem(id);
        if (product.id == 7) {
            this.snackbar.open(`WHY did you add ${product.title} to your cart!?`, '', { duration: 4000 });
            const startOfPlayback = _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.getCurrentSessionURL();
            const playbackAtThisMomentInTime = _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.getCurrentSessionURL(true);
            _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.event('Subscribed', {
                uid_str: '750948353',
                plan_name_str: 'Professional',
                plan_price_real: 299,
                plan_users_int: 10,
                days_in_trial_int: 42,
                feature_packs: ['MAPS', 'DEV', 'DATA'],
            });
            _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.log('Something worked!');
        }
        else {
            this.snackbar.open(`Added ${product.title} to your cart`, '', { duration: 2000 });
        }
    }
    /**
     * Observes for breakpoint changes and updates the number of columns.
     * See `columnBreakpoints` for breakpoint-to-columns mapping.
     */
    observeBreakpoints() {
        this.mediaObserver.media$.subscribe((change) => {
            const n = this.columnBreakpoints[change.mqAlias];
            this.numColumns = n > 0 ? n : this.columnBreakpoints['default'];
        });
    }
    /**
     * Builds a list of products from the catalog.
     */
    buildProductList() {
        this.productService.getProducts().subscribe(products => this.products = products);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 2, vars: 3, consts: [[1, "product-list", 3, "cols", "gutterSize"], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z8"], [1, "product-image"], [1, "product-header"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductsComponent_mat_grid_tile_1_Template, 18, 6, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", ctx.numColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("gutterSize", "1px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridTile, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".mat-card[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.product-header[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.product-list[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 300px;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: cover;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMsXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnByb2R1Y3QtaGVhZGVyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5wcm9kdWN0LWltYWdlIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59Il19 */"] });


/***/ }),

/***/ 8243:
/*!*************************************************************!*\
  !*** ./src/app/components/thank-you/thank-you.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": function() { return /* binding */ ThankYouComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);


class ThankYouComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(); };
ThankYouComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["app-thank-you"]], decls: 3, vars: 0, consts: [["fxLayout", "column", "fxLayoutAlign", "center center"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thank you for your order!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective], encapsulation: 2 });


/***/ }),

/***/ 42139:
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": function() { return /* reexport safe */ _state__WEBPACK_IMPORTED_MODULE_1__.states; }
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ 60028);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ 81709);




/***/ }),

/***/ 60028:
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 81709:
/*!*********************************!*\
  !*** ./src/app/models/state.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": function() { return /* binding */ states; }
/* harmony export */ });
const states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
];


/***/ }),

/***/ 90910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": function() { return /* binding */ CartService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datalayer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalayer.service */ 11409);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ 66082);




class CartService {
    constructor(datalayer, productService) {
        this.datalayer = datalayer;
        this.productService = productService;
        this.items = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    }
    /**
     * Adds an item to the shopping cart. If not already added, product details
     * will be obtained from the catalog. If the item already exists, the item's
     * quantity will be incremented by one.
     * @param productId the Product ID of the corresponding item
     */
    addItem(productId) {
        // check if the item is already in the cart
        const item = this.items.find(product => product.id === productId);
        if (item) {
            // update the item's quantity and notify observers
            const { quantity } = item;
            item.quantity += quantity;
            this.subject.next(this.items);
            // update the data layer
            this.datalayer.addToCart(item, this.items);
        }
        else {
            // get the product from the catalog and add as an initial item
            this.productService.getProduct(productId).subscribe(product => {
                const item = Object.assign(Object.assign({}, product), { quantity: 1 // initial quantity of 1
                 });
                // store the item and notify observers
                this.items.push(item);
                this.subject.next(this.items);
                // update the data layer
                this.datalayer.addToCart(item, this.items);
            });
        }
    }
    /**
     * Calculates the total cost of all items in the cart (price x quantity).
     */
    calculateTotalCost() {
        return this.items.reduce((acc, item) => acc += item.price * item.quantity, 0);
    }
    /**
     * Empties all items in the cart.
     */
    clear() {
        this.items = [];
        this.subject.next(this.items);
    }
    /**
     * Gets the items in the cart as an Observable.
     * A ReplaySubject is used to re-emit the cart's items to newly instantiated
     * components.
     */
    getItems() {
        return this.subject;
    }
    /**
     * Removes an item entirely from the cart.
     * @param productId the Product ID of the corresponding item
     */
    removeItem(productId) {
        // find the item
        const index = this.items.findIndex(product => product.id === productId);
        if (index >= 0) {
            const item = this.items[index];
            // remove the item and notify observers
            this.items.splice(index, 1);
            this.subject.next(this.items);
            // update the data layer
            this.datalayer.removeFromCart(item, this.items);
        }
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.DatalayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11409:
/*!***********************************************!*\
  !*** ./src/app/services/datalayer.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatalayerService": function() { return /* binding */ DatalayerService; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ 76797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/analytics */ 71037);



class DatalayerService {
    constructor(analytics) {
        this.analytics = analytics;
    }
    /**
     * Updates data layers with product information added to the cart.
     * @param product added
     * @param items in the cart after addition
     */
    addToCart(product, items) {
        // Google
        this.analytics.logEvent(firebase__WEBPACK_IMPORTED_MODULE_0__.default.analytics.EventName.ADD_TO_CART, product);
        // Tealium
        Object.assign((window.utag.data), this.tealiumCart(product, items, 'cart_add'));
        // CEDDL
        const digitalData = window['digitalData'];
        digitalData.cart.item = items.map(item => this.ceddlProductItem(item));
        digitalData.cart.price = this.ceddlTotalCartPrice(digitalData.cart.item);
    }
    /**
     * Updates data layers with product information removed from the cart.
     * @param product removed
     * @param items in the cart after removal
     */
    removeFromCart(product, items) {
        // Google
        this.analytics.logEvent(firebase__WEBPACK_IMPORTED_MODULE_0__.default.analytics.EventName.REMOVE_FROM_CART, product);
        // Tealium
        Object.assign((window.utag.data), this.tealiumCart(product, items, 'cart_remove'));
        // CEDDL
        const digitalData = window['digitalData'];
        digitalData.cart.item = items.map(item => this.ceddlProductItem(item));
        digitalData.cart.price = this.ceddlTotalCartPrice(digitalData.cart.item);
    }
    /**
     * Updates data layers with checkout information.
     * @param items used during checkout
     */
    checkout(items) {
        // Google
        this.analytics.logEvent(firebase__WEBPACK_IMPORTED_MODULE_0__.default.analytics.EventName.PURCHASE, { items });
        // Tealium
        Object.assign((window.utag.data), this.tealiumCheckout(items));
    }
    /**
     * Builds a Tealium cart object for the data layer.
     * @param product added or removed from the cart
     * @param items currently in the cart (after addition or removal)
     * @param tealiumEvent name from the retail definition (i.e. cart_add or cart_remove)
     */
    tealiumCart(product, items, tealiumEvent) {
        // NOTE toString() for numeric values is recommended in Tealium documentation
        return {
            cart_product_id: items.map((item) => item.id.toString()),
            cart_product_price: items.map((item) => item.price.toString()),
            cart_product_quantity: items.map((item) => item.quantity.toString()),
            product_id: [product.id],
            product_image_url: [product.image],
            product_name: [product.title],
            product_original_price: [product.price],
            product_price: [product.price],
            product_quantity: [product.quantity.toString()],
            tealium_event: tealiumEvent
        };
    }
    /**
     * Builds a Tealium checkout object for the data layer.
     * @param items currently in the cart
     */
    tealiumCheckout(items) {
        return {
            cart_total_items: items.length.toString(),
            cart_total_value: items.reduce((tax, item) => tax += (item.price * item.quantity) * 1.09, 0),
            order_currency_code: 'USD',
            order_discount_amount: '0.00',
            order_id: Date.now().toString(),
            order_payment_type: 'visa',
            order_promo_code: '',
            order_shipping_amount: `${items.length}.00`,
            order_shipping_type: 'UPS',
            order_subtotal: items.reduce((tax, item) => tax += item.price * item.quantity, 0),
            order_tax_amount: items.reduce((tax, item) => tax += (item.price * item.quantity) * 1.09, 0),
            order_total: items.reduce((tax, item) => tax += (item.price * item.quantity) * 1.09, 0),
            page_name: 'Order Confirmation - Thank You',
            page_type: 'order',
            product_id: items.map(item => item.id.toString()),
            product_image_url: items.map(item => item.image),
            product_name: items.map(item => item.title),
            product_original_price: items.map(item => item.price.toString()),
            product_price: items.map(item => item.price.toString()),
            product_quantity: items.map(item => item.quantity.toString()),
            tealium_event: 'purchase'
        };
    }
    /**
     * CEDDL Price converter.
     * @param item to convert
     */
    ceddlPrice(item) {
        return {
            basePrice: item.price,
            currency: 'USD',
            taxRate: 0.09,
            shipping: 1.00,
            shippingMethod: 'UPS-Ground',
            priceWithTax: item.price * 1.09,
            voucherCode: '',
            voucherDiscount: 0.00,
        };
    }
    /**
     * CEDDL ProductInfo converter.
     * @param product to convert
     */
    ceddlProductInfo(product) {
        return {
            productID: product.id.toString(),
            productName: product.title,
            description: product.description,
            productImage: product.image,
            productURL: location.host,
            productThumbnail: product.image,
            manufacturer: 'FruitShoppe',
            sku: product.id.toString(),
            color: 'N/A',
            size: 'N/A',
        };
    }
    /**
     * CEDDL ProductItem converter.
     * @param item to convert
     */
    ceddlProductItem(item) {
        return {
            productInfo: this.ceddlProductInfo(item),
            category: {
                primaryCategory: 'fruit',
            },
            quantity: item.quantity,
            price: this.ceddlPrice(item),
            linkedProduct: [],
            attributes: {},
        };
    }
    /**
     * CEDDL TotalCartPrice converter.
     * @param items to build TotalCartPrice
     */
    ceddlTotalCartPrice(items) {
        return {
            basePrice: items.reduce((price, item) => price += item.price.basePrice * item.quantity, 0),
            voucherCode: '',
            voucherDiscount: 0.00,
            currency: 'USD',
            taxRate: 0.09,
            shipping: items.reduce((price, item) => price += item.price.shipping, 0),
            shippingMethod: 'UPS-Ground',
            priceWithTax: items.reduce((price, item) => price += item.price.priceWithTax * item.quantity, 0),
            cartTotal: items.reduce((price, item) => price += (item.price.priceWithTax * item.quantity) + item.price.shipping, 0)
        };
    }
}
DatalayerService.ɵfac = function DatalayerService_Factory(t) { return new (t || DatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_2__.AngularFireAnalytics)); };
DatalayerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatalayerService, factory: DatalayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": function() { return /* reexport safe */ _cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService; },
/* harmony export */   "ProductService": function() { return /* reexport safe */ _product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService; }
/* harmony export */ });
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.service */ 90910);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ 66082);




/***/ }),

/***/ 66082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": function() { return /* binding */ ProductService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);







class ProductService {
    constructor(sanitizer, http, snackBar) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.snackBar = snackBar;
        this.imageUrl = 'https://fruitshoppe.firebaseapp.com/images'; // URL of product images folder
        // based on whether to use mocks or the API server, build the full API URL
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockApi ? `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.localApiRoot}/products.json` :
            `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.remoteApiRoot}/products`;
    }
    /**
     * Gets an observable that emits a product from the catalog.
     * @param id the identifier of the product
     */
    getProduct(id) {
        // if using the mock API, just get all products and find the one with the given id
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockApi) {
            return this.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(products => products.find(product => product.id === id)), // force the Products[] into a Product
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getProduct', null)));
        }
        else {
            const url = `${this.apiUrl}/${id}`;
            return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(product => this.setImageUrl(product)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getProduct', null)));
        }
    }
    /**
     * Gets an observable that emits a list of products from the catalog.
     * @param query An optional query string to search for products
     */
    getProducts(query) {
        // TODO (van) allow query parameter to filter mock products.json
        const url = query ? `${this.apiUrl}?q=${query}` : this.apiUrl;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(products => products.map(product => this.setImageUrl(product))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getProducts', [])));
    }
    /**
     * Provides a selector to allow handling of errors from service calls.
     * @param operation the operation display name that encountered an error
     * @param result the return value that should be passed to the next operator
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            const { message } = error;
            console.error(`${operation} failed: ${message}`);
            this.snackBar.open(`Failed to get product(s). ${message}`, 'OK');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
    /**
     * By default, products have the image filename in the `image` property.
     * This function returns a copy of a product with the `image` property set to
     * the full URL to the image. It also sanitizes the URL so that it is deemed
     * safe by Angular.
     * @param product
     */
    setImageUrl(product) {
        let { image } = product;
        image = `${this.imageUrl}/${image}`;
        // depending on the usage of the URL, sanitize
        this.sanitizer.bypassSecurityTrustStyle(image); // if image is used as a style backgroundImage
        return Object.assign(Object.assign({}, product), { image });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * Define configuration options used by the app:
 * production - whether or not this app is running in production
 * localApiRoot - mock files that contain data (i.e. emulate an API resource locally)
 * remoteApiRoot - the API base URL if hosting the backend demo (https://github.com/fullstorydev/api-shoppe-demo)
 * useMockApi - true to use localApi, false to use the remoteApi
 */
const environment = {
    production: false,
    localApiRoot: '/assets',
    remoteApiRoot: 'http://localhost:3000/api',
    useMockApi: true,
    orgId: '173V6P',
    firebase: {
    // optionally add your firebase config here
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map