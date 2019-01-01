webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <app-navbar></app-navbar>  -->\r\n<div style=\"background-image:url('../assets/img/darkback.png'); min-height:1200px; min-width:900px; padding-bottom:100px; background-repeat:no-repeat; background-size:cover;\">\r\n    <div class=\"container\" style = \"background-color:white; border-radius: 10px; border: solid black 2px; padding-bottom:50px;\">\r\n         <app-navbar></app-navbar> \r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_movie_add_movie_component__ = __webpack_require__("./src/app/components/add-movie/add-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_movie_edit_movie_component__ = __webpack_require__("./src/app/components/edit-movie/edit-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_component__ = __webpack_require__("./src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_modals_modals_component__ = __webpack_require__("./src/app/components/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_filter_pipe__ = __webpack_require__("./node_modules/ngx-filter-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_pagination__ = __webpack_require__("./node_modules/ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_slider_slider_component__ = __webpack_require__("./src/app/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_all_movies_all_movies_component__ = __webpack_require__("./src/app/components/all-movies/all-movies.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'add-movie', component: __WEBPACK_IMPORTED_MODULE_13__components_add_movie_add_movie_component__["a" /* AddMovieComponent */] },
    { path: 'edit-movie/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_edit_movie_edit_movie_component__["a" /* EditMovieComponent */] },
    { path: 'all-movies', component: __WEBPACK_IMPORTED_MODULE_23__components_all_movies_all_movies_component__["a" /* AllMoviesComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_component__["a" /* MovieComponent */] },
    { path: 'slider', component: __WEBPACK_IMPORTED_MODULE_21__components_slider_slider_component__["a" /* SliderComponent */] }
];
var SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboardControl: true
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_add_movie_add_movie_component__["a" /* AddMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_edit_movie_edit_movie_component__["a" /* EditMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_modals_modals_component__["a" /* AddMovieModalContent */],
            __WEBPACK_IMPORTED_MODULE_16__components_modals_modals_component__["b" /* EditMovieModalContent */],
            __WEBPACK_IMPORTED_MODULE_16__components_modals_modals_component__["c" /* ModalsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_23__components_all_movies_all_movies_component__["a" /* AllMoviesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_19_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_filter_pipe__["FilterPipeModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22_ngx_flash_messages__["a" /* FlashMessagesModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_swiper_wrapper__["SwiperModule"].forRoot(SWIPER_CONFIG),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_16__components_modals_modals_component__["a" /* AddMovieModalContent */], __WEBPACK_IMPORTED_MODULE_16__components_modals_modals_component__["b" /* EditMovieModalContent */], __WEBPACK_IMPORTED_MODULE_21__components_slider_slider_component__["a" /* SliderComponent */], __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_component__["a" /* MovieComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_20__services_getall_service__["a" /* GetallService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/app.module.js.map

/***/ }),

/***/ "./src/app/components/add-movie/add-movie.component.css":
/***/ (function(module, exports) {

module.exports = ".left {\r\n    width: 20%;\r\n    float: left;\r\n    text-align: left;\r\n    margin: 0px 0px 5px 10px;\r\n}\r\n.right {\r\n    width: 75%;\r\n    margin-left: 10px;\r\n    float:left;\r\n    margin: 0px 0px 5px 10px;\r\n}\r\n.btn{\r\n    float:right;\r\n    margin-left: 5px;\r\n    margin-top: 10px;\r\n}\r\n.upldbtn{\r\n    float:right;\r\n    margin-top: 5px;\r\n}\r\n.modal {\r\n overflow-y: auto;\r\n}\r\n.modal-open {\r\n overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/add-movie/add-movie.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <div class=\"card\">\r\n  <div class=\"card-header\" id=\"addMovieHead\">\r\n    Add New Movie\r\n  </div>\r\n  <div class=\"card-block\" id=\"modBod\">\r\n    <ngx-flash-messages id=\"addMovieFlash\"></ngx-flash-messages>\r\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n         <div class=\"form-group\">\r\n          <label class=\"left\" for=\"title\">Title: </label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.title\"\r\n          name=\"title\"\r\n          #movieTitle=\"ngModel\">\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"writer\">Writer</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.writer\"\r\n          name=\"writer\"\r\n          #movieWriter=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"director\">Director</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.director\"\r\n          name=\"director\"\r\n          #movieDirector=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"starring\">Starring</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.starring\"\r\n          name=\"starring\"\r\n          #movieStarring=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"genre\">Genre</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.genre\"\r\n          name=\"genre\"\r\n          #movieGenre=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"country\">Country</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.country\"\r\n          name=\"country\"\r\n          #movieCountry=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"year\">Year</label>\r\n          <input type=\"number\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.year\"\r\n          name=\"year\"\r\n          #movieYear=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"language\">Language</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.language\"\r\n          name=\"language\"\r\n          #movieLanguage=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"runtime\">Runtime</label>\r\n          <input type=\"number\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.runtime\"\r\n          name=\"runtime\"\r\n          #movieRuntime=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"Certificate\">Certificate</label>\r\n          <input type=\"number\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.certificate\"\r\n          name=\"certificate\"\r\n          #movieCertificate=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"synopsis\">Synopsis</label>\r\n          <textarea\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.synopsis\"\r\n          name=\"synopsis\"\r\n          #movieSynopsis=\"ngModel\"\r\n          ></textarea>\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"poster\">Poster</label>\r\n          <input type=\"text\"\r\n          id=\"posterField\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.poster\"\r\n          name=\"poster\"\r\n          #moviePoster=\"ngModel\"\r\n          >\r\n          <input type=\"file\" \r\n          class=\"form-control right\"\r\n          id=\"imgUpload\"\r\n          name=\"imgUpload\"\r\n          ng2FileSelect [uploader]=\"uploader\"\r\n          (change)=\"onChange($event)\" />\r\n          <button  type=\"button\" class=\"upldbtn btn btn-success form-control left\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n          Upload\r\n          </button>\r\n        </div>\r\n        <div class=\"progress form-group right\" style=\"width:100%;\">\r\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\">Progress {{uploader.progress}}%</div>\r\n          </div>\r\n        <br>\r\n      <div class =\"button group\" style=\"width:100%;\">\r\n        <button type=\"button\" id=\"closeButton\" class=\"btn btn-danger\" (click)=\"onClose()\">Close</button>\r\n        <input id=\"submitButton\" type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/components/add-movie/add-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = 'http://localhost:3000/';
var AddMovieComponent = (function () {
    function AddMovieComponent(getallService, router, route, activeModal, flashMessagesService) {
        this.getallService = getallService;
        this.router = router;
        this.route = route;
        this.activeModal = activeModal;
        this.flashMessagesService = flashMessagesService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.movie = {
            _id: '',
            title: '',
            writer: '',
            director: '',
            starring: '',
            genre: '',
            country: '',
            year: 0,
            language: '',
            runtime: 0,
            certificate: 0,
            synopsis: '',
            poster: '',
        };
    }
    AddMovieComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    AddMovieComponent.prototype.onChange = function (event) {
        var files = event.srcElement.value;
        var name = files.replace(/^.*\\/, "");
        this.movie.poster = name;
        event = null;
    };
    AddMovieComponent.prototype.ngOnDestroy = function () {
    };
    AddMovieComponent.prototype.onSuccess = function (data) {
        this.flashMessagesService.show('Movie Successfully Added!', {
            classes: ['alert', 'alert-success'],
            timeout: 3000,
        });
        this.activeModal.close();
    };
    AddMovieComponent.prototype.onError = function (data) {
        if (data.status == 400) {
            this.flashMessagesService.show('All fields are required!', {
                classes: ['alert', 'alert-danger'],
                timeout: 3000,
            });
        }
    };
    AddMovieComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value;
        this.getallService.addMovie(value).subscribe(function (successData) { return _this.onSuccess(successData); }, function (errData) { return _this.onError(errData); });
    };
    AddMovieComponent.prototype.onClose = function () {
        this.activeModal.close();
    };
    return AddMovieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddMovieComponent.prototype, "anyDataForm", void 0);
AddMovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-movie',
        template: __webpack_require__("./src/app/components/add-movie/add-movie.component.html"),
        styles: [__webpack_require__("./src/app/components/add-movie/add-movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getall_service__["a" /* GetallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_getall_service__["a" /* GetallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _e || Object])
], AddMovieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/add-movie.component.js.map

/***/ }),

/***/ "./src/app/components/all-movies/all-movies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/all-movies/all-movies.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<div class=\"row\"> \r\n  <div class=\"col-md-6\">\r\n    <ngx-flash-messages id=\"tableFlash\"></ngx-flash-messages>\r\n    <h2 id=\"allMoviesHead\"><i class=\"fa fa-users\"></i>All Movies</h2>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <input id=\"tableTitleSearch\" style=\"float:right; border-width:1px; border-style:solid; padding:1px 1px 1px 1px;\" type=\"text\" [(ngModel)]=\"movieFilter.title\" placeholder=\"Search by title\">\r\n  </div>\r\n</div>\r\n<table *ngIf=\"movies?.length > 0;\" class=\"table table-striped\"> \r\n  <thead class=\"thead-inverse\">\r\n    <tr>\r\n      <th>Poster</th>\r\n      <th>Title</th>\r\n      <th>Writer</th>\r\n      <th>Director</th>\r\n      <th>Starring</th>\r\n      <th>Genre</th>\r\n      <th>Year</th>\r\n      <th>Plot</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let movie of movies | filterBy: movieFilter | paginate: { itemsPerPage: 4, currentPage: page }\">\r\n      <td ><img id=\"posterField\" class=\"thumbnail\" src=\"http://localhost:3000/uploads/{{movie.poster}}\" height=\"50%\"></td> \r\n      <td id=\"tableTitleField\">{{movie.title}}</td>\r\n      <td>{{movie.writer}}</td>\r\n      <td>{{movie.director}}</td>\r\n      <td>{{movie.starring}}</td>\r\n      <td>{{movie.genre}}</td>\r\n      <td>{{movie.year}}</td>\r\n      <td>{{movie.synopsis}}</td>\r\n      <td><a [routerLink]=\"['/movie/'+movie._id]\" href=\"\" class=\"btn btn-outline-info btn-sm btn-block\">Details</a><br>\r\n      <button type= \"button\" class=\"btn btn-outline-primary btn-sm btn-block\" (click)= \"openEdit(movie)\">Edit</button><br>\r\n      <button type= \"button\" class=\"btn btn-outline-danger btn-sm btn-block\" (click)= \"onDeleteClick(movie)\">Delete</button></td>  \r\n    </tr>\r\n  </tbody>\r\n  </table>\r\n  <div>\r\n    <ngb-pagination\r\n     [collectionSize]=\"collectSize\"\r\n     [(page)]=\"page\" \r\n     [boundaryLinks]=true\r\n     aria-label=\"Default pagination\" \r\n     (pageChange)=\"page = $event\"></ngb-pagination>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/all-movies/all-movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_movie_edit_movie_component__ = __webpack_require__("./src/app/components/edit-movie/edit-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AllMoviesComponent = (function () {
    function AllMoviesComponent(getallService, router, config, modalService, activatedRoute, flashMessagesService) {
        var _this = this;
        this.getallService = getallService;
        this.router = router;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.flashMessagesService = flashMessagesService;
        this.movieFilter = { title: '' };
        this.page = 1;
        this.getallService.getMovies().subscribe(function (movies) {
            _this.movies = movies;
            _this.collectSize = movies.length();
        });
        config.pageSize = 4;
    }
    AllMoviesComponent.prototype.openEdit = function (movie) {
        console.log(movie);
        this.movie = movie;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__edit_movie_edit_movie_component__["a" /* EditMovieComponent */]);
        modalRef.componentInstance.movie = this.movie;
    };
    AllMoviesComponent.prototype.onDeleteClick = function (movie) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            this.getallService.deleteMovie(movie._id).subscribe(function (success) {
                var index = _this.movies.indexOf(movie, 0);
                if (index > -1) {
                    _this.movies.splice(index, 1);
                    _this.getallService.getMovies().subscribe(function (movies) {
                        _this.movies = movies;
                        _this.collectSize = movies.length;
                    });
                    _this.flashMessagesService.show('Movie Successfully Deleted!', {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000,
                    });
                }
            });
        }
    };
    return AllMoviesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AllMoviesComponent.prototype, "collectSize", void 0);
AllMoviesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-movies',
        template: __webpack_require__("./src/app/components/all-movies/all-movies.component.html"),
        styles: [__webpack_require__("./src/app/components/all-movies/all-movies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_getall_service__["a" /* GetallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_getall_service__["a" /* GetallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _f || Object])
], AllMoviesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/all-movies.component.js.map

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\na {\r\n -webkit-transition: .25s all;\r\n transition: .25s all;\r\n}\r\n.card {\r\n /* overflow: hidden; */\r\n -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n         box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n -webkit-transition: .25s box-shadow;\r\n transition: .25s box-shadow;\r\n padding-left:5px;\r\n background-color: #333;\r\n}\r\n.card:focus, .card:hover {\r\n -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n         box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.card-inverse .card-img-overlay {\r\n background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0,0,0,0)), \r\n                color-stop(77%, rgba(0,0,0,1)), color-stop(99%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,10,1)));\r\n /* background-color: rgba(51, 51, 51, 0.85); */\r\n border-color: rgba(51, 51, 51, 0.85);\r\n}\r\n/* equal card height */\r\n.row-equal > div[class*='col-'] {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n.row-equal .card {\r\n   width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n    <div class=\"form-group col-md-3\" (change)=\"onChange($event)\">\r\n            <label class=\"col-xs-3 control-label\" style=\"float:left;\"><h5>Choose by Genre:</h5> </label>\r\n            <div class=\"col-xs-5 selectContainer\">\r\n                <select class=\"form-control\"  name=\"genre\">\r\n                    <option value=\"All\">All</option>\r\n                    <option value=\"Crime\">Crime</option>\r\n                    <option value=\"Drama\">Drama</option>\r\n                    <option value=\"Action\">Action</option>\r\n                    <option value=\"Comedy\">Comedy</option>\r\n                    <option value=\"Romance\">Romance</option>\r\n                    <option value=\"Animation\">Animation</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    <app-slider [movies]= \"moviesByGenre\"></app-slider>\r\n<br>\r\n<br>\r\n <div class=\"form-group col-md-3\" (change)=\"onChangeCert($event)\">\r\n            <label class=\"col-xs-3 control-label\" style=\"float:left;\"><h5>Choose by Certificate:</h5> </label>\r\n            <div class=\"col-xs-5 selectContainer\" >\r\n                <select class=\"form-control\"  name=\"certificate\">\r\n                    <option value=\"All\">All</option>\r\n                    <option value=\"PG\">PG</option>\r\n                    <option value=\"12\">12</option>\r\n                    <option value=\"15\">15</option>\r\n                    <option value=\"18\">18</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n <app-slider [movies]= \"moviesByCertificate\"></app-slider> "

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(getallService) {
        this.getallService = getallService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onChange = function (event) {
        var _this = this;
        var selectedGenre = event.srcElement.value;
        if (selectedGenre == 'All') {
            this.moviesByGenre = [];
            this.getallService.getMovies().subscribe(function (moviesByGenre) {
                _this.moviesByGenre = moviesByGenre;
            });
        }
        else {
            this.moviesByGenre = [];
            console.log(selectedGenre);
            this.getallService.getMovieByGenre(selectedGenre).subscribe(function (moviesByGenre) {
                _this.moviesByGenre = moviesByGenre;
            });
        }
    };
    DashboardComponent.prototype.onChangeCert = function (event) {
        var _this = this;
        var selectedCertificate = event.srcElement.value;
        if (selectedCertificate == 'All') {
            this.moviesByCertificate = [];
            this.getallService.getMovies().subscribe(function (moviesByGenre) {
                _this.moviesByGenre = moviesByGenre;
            });
        }
        else {
            this.moviesByCertificate = [];
            if (selectedCertificate === 'PG') {
                this.cert = 5;
            }
            if (selectedCertificate === '12') {
                this.cert = 12;
            }
            if (selectedCertificate === '15') {
                this.cert = 15;
            }
            if (selectedCertificate === '18') {
                this.cert = 18;
            }
            this.getallService.getMovieByCertificate(this.cert).subscribe(function (moviesByCertificate) {
                _this.moviesByCertificate = moviesByCertificate;
            });
        }
    };
    return DashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DashboardComponent.prototype, "moviesByGenre", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DashboardComponent.prototype, "moviesByCertificate", void 0);
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getall_service__["a" /* GetallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_getall_service__["a" /* GetallService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "./src/app/components/edit-movie/edit-movie.component.css":
/***/ (function(module, exports) {

module.exports = ".left {\r\n    width: 20%;\r\n    float: left;\r\n    text-align: left;\r\n    margin: 0px 0px 5px 10px;\r\n}\r\n.right {\r\n    width: 75%;\r\n    margin-left: 10px;\r\n    float:left;\r\n    margin: 0px 0px 5px 10px;\r\n}\r\n.btn{\r\n    float:right;\r\n    margin-left: 5px;\r\n    margin-top: 10px;\r\n}\r\n.upldbtn{\r\n    float:right;\r\n    margin-top: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/edit-movie/edit-movie.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Edit Movie\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n      <div class=\"form-group\">\r\n          <label for=\"Id\" class=\"left\">ID: </label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie._id\"\r\n          name=\"id\"\r\n          #movieId=\"ngModel\"\r\n          disabled=\"true\">\r\n      </div>\r\n         <div class=\"form-group\">\r\n          <label for=\"title\" class=\"left\" >Title: </label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.title\"\r\n          name=\"title\"\r\n          #movieTitle=\"ngModel\">\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"writer\" class=\"left\">Writer</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.writer\"\r\n          name=\"writer\"\r\n          #movieWriter=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"director\" class=\"left\">Director</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.director\"\r\n          name=\"director\"\r\n          #movieDirector=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"starring\" class=\"left\">Starring</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.starring\"\r\n          name=\"starring\"\r\n          #movieStarring=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"genre\" class=\"left\">Genre</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.genre\"\r\n          name=\"genre\"\r\n          #movieGenre=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"country\" class=\"left\">Country</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.country\"\r\n          name=\"country\"\r\n          #movieCountry=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"year\" class=\"left\">Year</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.year\"\r\n          name=\"year\"\r\n          #movieYear=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"language\" class=\"left\">Language</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.language\"\r\n          name=\"language\"\r\n          #movieLanguage=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"runtime\" class=\"left\">Runtime</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.runtime\"\r\n          name=\"runtime\"\r\n          #movieRuntime=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Certificate\" class=\"left\">Certificate</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.certificate\" \r\n          name=\"certificate\"\r\n          #movieCertificate=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"synopsis\" class=\"left\">Synopsis</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.synopsis\"\r\n          name=\"synopsis\"\r\n          #movieSynopsis=\"ngModel\"\r\n          >\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"left\" for=\"poster\">Poster</label>\r\n          <input type=\"text\"\r\n          class=\"form-control right\"\r\n          [(ngModel)]=\"movie.poster\"\r\n          name=\"poster\"\r\n          #moviePoster=\"ngModel\"\r\n          >\r\n          <input type=\"file\"\r\n          id=\"imgUpload\" \r\n          class=\"form-control right\"\r\n          name=\"imgUpload\"\r\n          ng2FileSelect [uploader]=\"uploader\"\r\n          (change)=\"onChange($event)\" />\r\n          <button  type=\"button\" class=\"upldbtn btn btn-success form-control left\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n          Upload\r\n          </button>\r\n        </div>\r\n      <div class=\"progress form-group right\" style=\"width:100%;\">\r\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\">Progress {{uploader.progress}}%</div>\r\n          </div>\r\n       <br>\r\n      <div class =\"button group\" style=\"width:100%;\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClose()\">Close</button>\r\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/components/edit-movie/edit-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = 'http://localhost:3000/';
var EditMovieComponent = (function () {
    function EditMovieComponent(getallService, router, route, activeModal, flashMessagesService) {
        this.getallService = getallService;
        this.router = router;
        this.route = route;
        this.activeModal = activeModal;
        this.flashMessagesService = flashMessagesService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.movie = {
            title: '',
            writer: '',
            director: '',
            starring: '',
            genre: '',
            country: '',
            year: 0,
            language: '',
            runtime: 0,
            certificate: 0,
            synopsis: '',
            poster: ''
        };
    }
    EditMovieComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    EditMovieComponent.prototype.onChange = function (event) {
        var files = event.srcElement.value;
        var name = files.replace(/^.*\\/, "");
        this.movie.poster = name;
        event = null;
    };
    EditMovieComponent.prototype.ngAfterViewInit = function () {
        //this.id =this.input.model;
    };
    EditMovieComponent.prototype.onSubmit = function (_a) {
        var value = _a.value;
        value = this.movie;
        console.log(this.movie);
        console.log(this.movie._id);
        this.getallService.updateMovie(this.movie._id, value);
        this.activeModal.close();
        this.flashMessagesService.show('Movie Successfully Edited', {
            classes: ['alert', 'alert-success'],
            timeout: 3000,
        });
    };
    EditMovieComponent.prototype.onClose = function () {
        this.activeModal.close();
    };
    return EditMovieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('movieId'),
    __metadata("design:type", Object)
], EditMovieComponent.prototype, "input", void 0);
EditMovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-movie',
        template: __webpack_require__("./src/app/components/edit-movie/edit-movie.component.html"),
        styles: [__webpack_require__("./src/app/components/edit-movie/edit-movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getall_service__["a" /* GetallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_getall_service__["a" /* GetallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _e || Object])
], EditMovieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/edit-movie.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".card-block {\r\n    padding: .0; \r\n}\r\n \r\np {\r\n    margin-top: 1rem;\r\n    margin-right: 1rem;\r\n    margin-bottom: 1rem;\r\n    margin-left: 1rem;\r\n}\r\n \r\n.container{\r\n    /* color:white; */\r\n    padding-left:100px;\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0,0,0,0)), \r\n                color-stop(77%, rgba(0,0,0,1)), color-stop(99%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,10,1)));\r\n}\r\n \r\n.card-black{\r\n    background-color: #292B2C;\r\n}\r\n \r\n.modal {\r\n overflow-y: auto;\r\n}\r\n \r\n.modal-open {\r\n overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotro text-center\">\r\n    <br>\r\n  <ngx-flash-messages id=\"homeFlash\"></ngx-flash-messages>\r\n  <h1><i class=\"fa fa-film\" aria-hidden=\"true\"></i> PictureHouse</h1>\r\n  <p class=\"lead\">Welcome to PictureHouse, the home of movies</p>\r\n  <!-- <div>\r\n    <a [routerLink]=\"['/all-movies']\" class=\"btn btn-lg btn-primary\">All Movies</a>\r\n    <a [routerLink]=\"['/dashboard']\" class=\"btn btn-lg btn-success\">Dashboard</a>\r\n  </div>\r\n</div> -->\r\n\r\n<hr>\r\n  <div class=\"mainContainer\" style=\"width:100%; float:center;\">\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div class=\"carousel-item active\">\r\n          <img class=\"d-block img-fluid\" src=\"../../assets/img/wir.png\" alt=\"First slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img class=\"d-block img-fluid\" src=\"../../assets/img/anc.png\" alt=\"Second slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img class=\"d-block img-fluid\" src=\"../../assets/img/rb.png\" alt=\"Third slide\">\r\n        </div>\r\n        <!-- <div class=\"carousel-item\">\r\n          <img class=\"d-block img-fluid\" src=\"https://help.disney.com/resource/1487229073000/dig_insideout/large/large_GX_banner-insideout.jpg\" alt=\"Third slide\">\r\n        </div> -->\r\n        \r\n      </div>\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n    </div>\r\n  </div>  \r\n  <br> <br> \r\n  \r\n  \r\n\r\n    <div class=\"card-deck\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3 class=\"card-header card-black card-inverse\" style=\"color:white;\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i><b> Browse movies by certificate or by genre</b></h3>\r\n          <p>Visit the browse page to find your favorite films grouped according to certificate or your favorite genre</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn-primary btn-block\" [routerLinkActive]=\"['active']\" href=\"#\" routerLink=\"/browse\">Browse the collection</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3 class=\"card-header card-black card-inverse\" style=\"color:white;\"><i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i><b> Add movies and update existing ones</b></h3>\r\n          <p>Saw a movie recently or one that you'd like to see in future? Just click on 'Add Movie' to add it to your collection.</p>\r\n          <p>You can also change any of the details of the movies in the collection just by viewing that movie's page and hitting\r\n            the edit button</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn-warning btn-block\" (click)=\"open()\">Add movies</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3 class=\"card-header card-black card-inverse\" style=\"color:white;\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i><b> Checkout the <br> full library</b></h3>\r\n          <p>If you'd like to be able to view, edit, search and delete movies from the collection, all movies are available in the\r\n            full library section.</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn-success btn-block\" [routerLinkActive]=\"['active']\" href=\"#\" routerLink=\"/all-movies\">View all movies </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br><br>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals_modals_component__ = __webpack_require__("./src/app/components/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.open = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__modals_modals_component__["a" /* AddMovieModalContent */]);
        modalRef.componentInstance.anyDataForm = this.anyData;
        console.log('in navbar component');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/home.component.js.map

/***/ }),

/***/ "./src/app/components/modals/modals.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\r\n  .modal-xl {\r\n    width: 200%;\r\n   max-width:1200px;\r\n   \r\n  }\r\n\r\n  .modal-content {\r\n    width: 200%;\r\n   max-width:1200px;\r\n   position:absolute;\r\n   left:-50%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modals works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMovieModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditMovieModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddMovieModalContent = (function () {
    function AddMovieModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return AddMovieModalContent;
}());
AddMovieModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-movie-modal-content',
        template: " <app-add-movie></app-add-movie> "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], AddMovieModalContent);

var EditMovieModalContent = (function () {
    function EditMovieModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return EditMovieModalContent;
}());
EditMovieModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-movie-modal-content',
        template: " <app-edit-movie></app-edit-movie> "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object])
], EditMovieModalContent);

var ModalsComponent = (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.ngOnInit = function () {
        console.log('modal');
    };
    return ModalsComponent;
}());
ModalsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modals',
        template: __webpack_require__("./src/app/components/modals/modals.component.html"),
        styles: [__webpack_require__("./src/app/components/modals/modals.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object])
], ModalsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/modals.component.js.map

/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/***/ (function(module, exports) {

module.exports = ".left{\r\n    float:left;\r\n}\r\n\r\n.right{\r\n    float:right;\r\n    padding:10px;\r\n    text-align:left;\r\n}\r\n\r\n.outerbox{\r\n    width:1100px; \r\n    margin:auto; \r\n    margin-top:10px;\r\n    margin-bottom:10px;\r\n    padding-top:15px;\r\n    padding-bottom:15px;\r\n    overflow:hidden; \r\n    background-color:white;\r\n    border-radius:10px; \r\n    -webkit-box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.5); \r\n            box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.btn{\r\n    float:right;\r\n    margin-left:5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"movie\" class=\"container outerbox\">\r\n  <h3 class=\"page-header\" style=\"text-align:center;\">{{movie.title}} ({{movie.year}})</h3>\r\n  <ngx-flash-messages></ngx-flash-messages>\r\n  <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"http://localhost:3000/uploads/{{movie.poster}}\" style=\"width:90%; height:90%;\" class=\"thumbnail\" >\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <table class=\"table table-striped\">\r\n            <thead class=\"thead-inverse\"><tr><th><h5>{{movie.synopsis}}</h5></th></tr></thead>\r\n            <tr>Starring: {{movie.starring}}</tr>\r\n            <tr>Directed by By: {{movie.director}}</tr>\r\n            <tr>Written By: {{movie.writer}}</tr>\r\n            <tr>Released: {{movie.year}}</tr>\r\n            <tr>Genre: {{movie.genre}}</tr>\r\n            <tr>Certificate: {{movie.certificate}}</tr>\r\n            <tr>Country: {{movie.country}}</tr>\r\n            <tr>Language: {{movie.language}}</tr>\r\n            <tr>Runtime: {{movie.runtime}} minutes</tr>\r\n            </table>\r\n            <hr>\r\n            <button type= \"button\" class=\"btn btn-danger btn-lg\" (click)= \"onDeleteClick(movie._id)\">Delete</button>\r\n            <button type= \"button\" class=\"btn btn-success btn-lg\" (click)= \"openEdit()\">Edit</button>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<div *ngIf=\"movie\">\r\n  <h4>More Movies like {{movie.title}}</h4>\r\n</div>\r\n<div>\r\n    <app-slider [movies]= \"moviesByGenre\"></app-slider>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_movie_edit_movie_component__ = __webpack_require__("./src/app/components/edit-movie/edit-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_slider_component__ = __webpack_require__("./src/app/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Movie__ = __webpack_require__("./src/app/models/Movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Movie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__models_Movie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MovieComponent = (function () {
    function MovieComponent(getallService, router, modalService, activatedRoute, flashMessagesService) {
        var _this = this;
        this.getallService = getallService;
        this.router = router;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.flashMessagesService = flashMessagesService;
        this.show = true;
        activatedRoute.params.subscribe(function (movie) {
            _this.id = _this.activatedRoute.snapshot.params['id'];
            _this.getallService.getMovie(_this.id).subscribe(function (movie) {
                _this.movie = movie;
            });
        });
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params['id'];
        this.getallService.getMovie(this.id).subscribe(function (movie) {
            _this.movie = movie;
            _this.getallService.getMovieByGenre(_this.movie.genre).subscribe(function (moviesByGenre) {
                _this.moviesByGenre = moviesByGenre;
            });
        });
    };
    MovieComponent.prototype.ngAfterViewInit = function () {
    };
    MovieComponent.prototype.openEdit = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__edit_movie_edit_movie_component__["a" /* EditMovieComponent */]);
        modalRef.componentInstance.movie = this.movie;
    };
    MovieComponent.prototype.onDeleteClick = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            this.getallService.deleteMovie(this.id).subscribe(function (movie) {
                _this.movie = movie;
            });
            this.router.navigate(['/home']);
        }
    };
    return MovieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MovieComponent.prototype, "moviesByGenre", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__slider_slider_component__["a" /* SliderComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__models_Movie__["Movie"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__models_Movie__["Movie"]) === "function" && _a || Object)
], MovieComponent.prototype, "movie", void 0);
MovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-movie',
        template: __webpack_require__("./src/app/components/movie/movie.component.html"),
        styles: [__webpack_require__("./src/app/components/movie/movie.component.css")],
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_getall_service__["a" /* GetallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_getall_service__["a" /* GetallService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _f || Object])
], MovieComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/movie.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    position: relative;\r\n    /* display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column; */\r\n    margin-left:-100px;\r\n    margin-right:-100px;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\"> -->\r\n<nav class=\"navbar\">\r\n      <div class=\"container\">\r\n        <!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n          <a class=\"navbar-brand\" href=\"#\">Movie App</a>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\"> -->\r\n          <!-- <ul class=\"navbar-nav mr-auto navbar-left\">\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" routerLink=\"/\">Home</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" routerLink=\"/dashboard\">Dashboard</a></li>\r\n          </ul>\r\n          <ul class=\"navbar-nav ml-auto navbar-right\">\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" routerLink=\"/all-movies\">All Movies</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" role=\"button\" (click)=\"open()\">Add Movie</a></li>\r\n          </ul> -->\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" href=\"#\" routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" href=\"#\" routerLink=\"/browse\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Browse</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLinkActive]=\"['active']\" id=\"allMoviesLink\" href=\"#\" routerLink=\"/all-movies\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> All Movies</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\"  [routerLinkActive]=\"['active']\" id=\"addMoviesLink\" role=\"button\" (click)=\"open()\"><i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i> Add Movie</a>\r\n            </li>\r\n          </ul>\r\n        <!-- </div> -->\r\n      </div>\r\n    </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_modals_component__ = __webpack_require__("./src/app/components/modals/modals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(modalService) {
        this.modalService = modalService;
    }
    NavbarComponent.prototype.open = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modals_modals_component__["a" /* AddMovieModalContent */]);
        modalRef.componentInstance.anyDataForm = this.anyData;
        console.log('in navbar component');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/components/slider/slider.component.css":
/***/ (function(module, exports) {

module.exports = ".app-title {\r\n  font-size: 24px;\r\n}\r\n\r\n.box-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.box-container {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 1100px;\r\n  height: 355px;\r\n  max-width: 110%;\r\n  max-height: 90%;\r\n  padding: 2px;\r\n  margin-top:5px;\r\n  margin-left:4px;\r\n  margin-right: 4px;\r\n  border-radius: 4px;\r\n\r\n  color: #555;\r\n  -webkit-box-shadow:\r\n    0 6px 20px rgba(0, 0, 0, 0.18),\r\n    0 6px 6px rgba(0, 0, 0, 0.25);\r\n          box-shadow:\r\n    0 6px 20px rgba(0, 0, 0, 0.18),\r\n    0 6px 6px rgba(0, 0, 0, 0.25);\r\n  background-color: #eee;\r\n}\r\n\r\n.swiper-pagination{\r\n  margin-bottom:0;\r\n}\r\n\r\n.info-container {\r\n  padding: 12px 16px;\r\n\r\n  line-height: 24px;\r\n}\r\n\r\n.action-container {\r\n  padding: 16px;\r\n}\r\n\r\n.action-container,\r\n.content-container {\r\n  position: relative;\r\n\r\n  overflow: auto;\r\n  margin: 8px 16px;\r\n  border-radius: 4px;\r\n\r\n  background-color: #fff;\r\n}\r\n\r\n.action-button {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: calc(100% - 16px);\r\n  min-height: 35px;\r\n  padding: 4px 16px;\r\n  margin: 8px;\r\n  border-radius: 4px;\r\n  border: 1px solid #555;\r\n\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  line-height: 14px;\r\n  text-align: center;\r\n}\r\n\r\n.action-button:hover {\r\n  color: #fff;\r\n  background-color: #555;\r\n}\r\n\r\n.swiper-container {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.swiper-slide {\r\n  color: #aaa;\r\n  background-color: #eee;\r\n}\r\n\r\n.swiper-slide-active {\r\n  color: #fff;\r\n  background-color: #aaa;\r\n}\r\n\r\na {\r\n -webkit-transition: .25s all;\r\n transition: .25s all;\r\n}\r\n\r\n.card {\r\n /* overflow: hidden; */\r\n -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n         box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n -webkit-transition: .25s box-shadow;\r\n transition: .25s box-shadow;\r\n padding-left:1px;\r\n background-color: #333;\r\n}\r\n\r\n.card:focus, .card:hover {\r\n -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n         box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.card-inverse .card-img-overlay {\r\n background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0,0,0,0)), \r\n                color-stop(77%, rgba(0,0,0,1)), color-stop(99%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,10,1)));\r\n /* background-color: rgba(51, 51, 51, 0.85); */\r\n border-color: rgba(51, 51, 51, 0.85);\r\n}\r\n\r\n/* equal card height */\r\n\r\n.row-equal > div[class*='col-'] {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.row-equal .card {\r\n   width: 100%;\r\n}\r\n\r\n:host /deep/ .content-container[_ngcontent-c2] {\r\n    position: relative;\r\n    overflow: auto;\r\n    margin: 0px 0px 0px 0px;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"box-container\" fxLayout=\"column\" [ngStyle.lt-sm]=\"'min-height: 800px;'\">\r\n  <div class=\"horizontal-container\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"stretch\" fxFlex>\r\n    <div class=\"vertical-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"100%\">\r\n      <div class=\"content-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex>\r\n        <swiper *ngIf=\"type == 'component' && show\" overlay-controls [config]=\"config\" (indexChange)=\"onIndexChange($event)\" fxFlex>\r\n          <div *ngFor=\"let movie of movies\" class=\"swiper-slide\">\r\n            <div class=\"swiper-slide-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <div class=\"card card-inverse img-fluid\">\r\n                  <img class=\"card-img\" src=\"http://localhost:3000/uploads/{{movie.poster}}\" alt=\"Card image cap\">\r\n                  <div class=\"card-img-overlay\">\r\n                    <br><br><br><br><br><br><br><br>\r\n                    <h6 class=\"card-title\">{{movie.title}}</h6>\r\n                    <p class=\"card-text\">{{movie.genre}}<br>{{movie.year}}\r\n                    <a [routerLink]=\"['/movie/'+movie._id]\" type=\"\" href=\"\" class=\"btn btn-secondary btn-sm float-right\">Details</a></p>\r\n                  </div>\r\n              </div> \r\n            </div>\r\n          </div>\r\n        </swiper>\r\n   </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_getall_service__ = __webpack_require__("./src/app/services/getall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SliderComponent = (function () {
    function SliderComponent(getallService, router, route) {
        this.getallService = getallService;
        this.router = router;
        this.route = route;
        this.show = true;
        this.type = 'component';
        this.config = {
            scrollbar: null,
            direction: 'horizontal',
            slidesPerView: 5,
            observer: true,
            scrollbarHide: false,
            keyboardControl: true,
            mousewheelControl: true,
            scrollbarDraggable: true,
            scrollbarSnapOnRelease: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        };
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getallService.getMovies().subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    return SliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SliderComponent.prototype, "movies", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["SwiperComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["SwiperComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["SwiperComponent"]) === "function" && _a || Object)
], SliderComponent.prototype, "componentRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["SwiperDirective"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["SwiperDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["SwiperDirective"]) === "function" && _b || Object)
], SliderComponent.prototype, "directiveRef", void 0);
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__("./src/app/components/slider/slider.component.html"),
        styles: [__webpack_require__("./src/app/components/slider/slider.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_getall_service__["a" /* GetallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_getall_service__["a" /* GetallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], SliderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/slider.component.js.map

/***/ }),

/***/ "./src/app/models/Movie.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/Movie.js.map

/***/ }),

/***/ "./src/app/services/getall.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetallService = (function () {
    function GetallService(http) {
        this.http = http;
    }
    //all below commented code prior to deployment on 1/1/19. http://localhost:3000 was just removed from each request.
    GetallService.prototype.getMovies = function () {
        // return this.http.get('http://localhost:3000/movieApp/films').map( res => res.json());
        return this.http.get('movieApp/films').map(function (res) { return res.json(); });
    };
    GetallService.prototype.getMovie = function (id) {
        console.log('getMovie called');
        // return this.http.get('http://localhost:3000/movieApp/films/'+id).map( res => res.json());
        return this.http.get('movieApp/films/' + id).map(function (res) { return res.json(); });
    };
    GetallService.prototype.updateMovie = function (id, movie) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3000/movieApp/films/'+id, movie, { headers: headers }).map((res: Response) => res.json()).subscribe(movie => this.movie = movie);
        return this.http.put('movieApp/films/' + id, movie, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (movie) { return _this.movie = movie; });
    };
    GetallService.prototype.addMovie = function (movie) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/movieApp/films/', movie, { headers: headers }).map((res: Response) => res.json());
        return this.http.post('movieApp/films/', movie, { headers: headers }).map(function (res) { return res.json(); });
    };
    GetallService.prototype.deleteMovie = function (id) {
        // return this.http.delete('http://localhost:3000/movieApp/films/'+id).map( res => res.json());
        return this.http.delete('movieApp/films/' + id).map(function (res) { return res.json(); });
    };
    GetallService.prototype.getMovieByGenre = function (genre) {
        // return this.http.get('http://localhost:3000/movieApp/films/genre/'+genre).map( res => res.json());
        return this.http.get('movieApp/films/genre/' + genre).map(function (res) { return res.json(); });
    };
    GetallService.prototype.getMovieByCertificate = function (certificate) {
        // return this.http.get('http://localhost:3000/movieApp/films/certificate/'+certificate).map( res => res.json());
        return this.http.get('movieApp/films/certificate/' + certificate).map(function (res) { return res.json(); });
    };
    GetallService.prototype.getMovieByTitle = function (title) {
        // return this.http.get('http://localhost:3000/movieApp/films/title/'+title).map( res => res.json());
        return this.http.get('movieApp/films/title/' + title).map(function (res) { return res.json(); });
    };
    return GetallService;
}());
GetallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetallService);

var _a;
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/getall.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/filmapp/filmrepo/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map