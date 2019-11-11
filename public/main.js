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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'weather-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_main_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/search/search.component */ "./src/app/components/main/search/search.component.ts");
/* harmony import */ var _components_main_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/current-weather/current-weather.component */ "./src/app/components/main/current-weather/current-weather.component.ts");
/* harmony import */ var _components_main_days_weather_days_weather_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/days-weather/days-weather.component */ "./src/app/components/main/days-weather/days-weather.component.ts");
/* harmony import */ var _components_main_locations_locations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/locations/locations.component */ "./src/app/components/main/locations/locations.component.ts");
/* harmony import */ var _components_main_search_result_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/search/result/result.component */ "./src/app/components/main/search/result/result.component.ts");
/* harmony import */ var _pipes_utctime_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/utctime.pipe */ "./src/app/pipes/utctime.pipe.ts");
/* harmony import */ var _pipes_location_name_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/location-name.pipe */ "./src/app/pipes/location-name.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _components_main_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _components_main_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_6__["CurrentWeatherComponent"],
                _components_main_days_weather_days_weather_component__WEBPACK_IMPORTED_MODULE_7__["DaysWeatherComponent"],
                _components_main_locations_locations_component__WEBPACK_IMPORTED_MODULE_8__["LocationsComponent"],
                _components_main_search_result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"],
                _pipes_utctime_pipe__WEBPACK_IMPORTED_MODULE_10__["UTCtimePipe"],
                _pipes_location_name_pipe__WEBPACK_IMPORTED_MODULE_11__["LocationNamePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/current-weather/current-weather.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/current-weather/current-weather.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"current-weather-box\">\n  <div class=\"title-box\">\n    <div class=\"location-name\">{{location.name}}</div>\n    <img (click)=\"weatherSelected()\" *ngIf=\"currentWeather\" [src]=\"starIcon\" class=\"star\">\n  </div>\n  <img *ngIf=\"!currentWeather\" [src]=\"loaderIcon\" class=\"loader\">\n  <div *ngIf=\"currentWeather\" class=\"weather-box\">\n    <div class=\"content-box\">\n      <div class=\"celsius\">{{ currentWeather.temp_c }}°</div>\n      <div class=\"feelslike\">Feels like: {{ currentWeather.feelslike_c }}°</div>\n      <div class=\"description\">{{ currentWeather.wx_desc }}</div>\n    </div>\n    <img [src]=\"weatherIcon\" class=\"icon\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/main/current-weather/current-weather.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/current-weather/current-weather.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-weather-box {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  position: relative;\n  padding: 20px; }\n  .current-weather-box .title-box {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  .current-weather-box .title-box .location-name {\n      font-size: 25px;\n      font-weight: bold;\n      letter-spacing: 1px;\n      -webkit-box-flex: 1;\n              flex-grow: 1;\n      border-bottom: 1px solid gray;\n      margin-right: 40px;\n      padding: 5px; }\n  .current-weather-box .title-box .star {\n      height: 30px; }\n  .current-weather-box .weather-box {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    width: 100%; }\n  .current-weather-box .weather-box .icon {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n  .current-weather-box .weather-box .content-box {\n      margin: 25px; }\n  .current-weather-box .weather-box .content-box .celsius {\n        font-size: 100px;\n        font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2N1cnJlbnQtd2VhdGhlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFx3ZWF0aGVyLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcY3VycmVudC13ZWF0aGVyXFxjdXJyZW50LXdlYXRoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixjQUFhLEVBcURoQjtFQTFERDtJQWNRLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUE4QjtZQUE5QiwrQkFBOEIsRUFlakM7RUE5Qkw7TUFrQlksZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLG9CQUFZO2NBQVosYUFBWTtNQUNaLDhCQUE2QjtNQUM3QixtQkFBa0I7TUFDbEIsYUFBWSxFQUNmO0VBekJUO01BNEJZLGFBQVksRUFDZjtFQTdCVDtJQWlDUSxxQkFBYTtJQUFiLGNBQWE7SUFDYiw4QkFBNkI7SUFDN0IsWUFBVyxFQXNCZDtFQXpETDtNQXNDWSxvQkFBWTtjQUFaLGFBQVksRUFDZjtFQXZDVDtNQTBDWSxhQUFZLEVBY2Y7RUF4RFQ7UUE2Q2dCLGlCQUFnQjtRQUNoQixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50LXdlYXRoZXItYm94IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLmxvYWRlciB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC50aXRsZS1ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAubG9jYXRpb24tbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53ZWF0aGVyLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudC1ib3gge1xyXG4gICAgICAgICAgICBtYXJnaW46IDI1cHg7XHJcblxyXG4gICAgICAgICAgICAuY2Vsc2l1cyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mZWVsc2xpa2Uge1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/main/current-weather/current-weather.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/current-weather/current-weather.component.ts ***!
  \******************************************************************************/
/*! exports provided: CurrentWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWeatherComponent", function() { return CurrentWeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/locations.service */ "./src/app/services/locations.service.ts");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentWeatherComponent = /** @class */ (function () {
    function CurrentWeatherComponent(weatherService, locationsService, imageService) {
        this.weatherService = weatherService;
        this.locationsService = locationsService;
        this.imageService = imageService;
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["LOADER"];
        this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["STAR"];
        this.weatherIcon = '';
    }
    CurrentWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setStarIcon();
        this.weatherService.getCurrentWeather(this.location.position).subscribe(function (response) {
            _this.currentWeather = response;
            _this.weatherIcon = Object(src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["getIcon"])(response.wx_icon);
        });
    };
    CurrentWeatherComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.setStarIcon();
        this.weatherService.getCurrentWeather(this.location.position).subscribe(function (response) {
            _this.currentWeather = response;
            _this.weatherIcon = Object(src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["getPng"])(response.wx_icon);
        });
    };
    CurrentWeatherComponent.prototype.setStarIcon = function () {
        if (this.locationsService.checkIfInList(this.location.position)) {
            this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["YELLOW_STAR"];
        }
        else {
            this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["STAR"];
        }
    };
    CurrentWeatherComponent.prototype.weatherSelected = function () {
        this.locationsService.weatherSelected(this.location);
        if (this.starIcon == src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["STAR"]) {
            this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["YELLOW_STAR"];
        }
        else {
            this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["STAR"];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CurrentWeatherComponent.prototype, "location", void 0);
    CurrentWeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-weather',
            template: __webpack_require__(/*! ./current-weather.component.html */ "./src/app/components/main/current-weather/current-weather.component.html"),
            styles: [__webpack_require__(/*! ./current-weather.component.scss */ "./src/app/components/main/current-weather/current-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"], src_app_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]])
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
}());



/***/ }),

/***/ "./src/app/components/main/days-weather/days-weather.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/days-weather/days-weather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forecast-weather-box\">\n    <img *ngIf=\"!forecastWeather\" [src]=\"loaderIcon\" class=\"loader\">\n    <div class=\"list-box\">\n      <div *ngFor=\"let day of forecastWeather\" class=\"day\">\n        <div class=\"date\">{{ day.date }}</div>\n        <img [src]=\"getIcon(day.Timeframes[3].wx_icon)\" class=\"icon\">\n        <div class=\"temprature\">{{ day.temp_min_c }}° - {{ day.temp_max_c }}°</div>\n        <div class=\"times-table\">\n          <div *ngFor=\"let timeframe of day.Timeframes\" class=\"time-box\">\n            <div class=\"time\">{{ timeframe.time | uTCtime }}</div>\n            <div class=\"desc\">{{ timeframe.wx_desc }}</div>\n            <img [src]=\"getIcon(timeframe.wx_icon)\" class=\"icon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/main/days-weather/days-weather.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/days-weather/days-weather.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forecast-weather-box {\n  padding: 10px; }\n  .forecast-weather-box .list-box {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  .forecast-weather-box .list-box .day {\n      text-align: center;\n      padding: 5px;\n      margin: 4px;\n      width: 25%;\n      background-color: rgba(71, 68, 68, 0.726);\n      letter-spacing: 1.2px;\n      font-weight: bold; }\n  .forecast-weather-box .list-box .day .times-table {\n        padding: 2px;\n        font-size: 10px;\n        font-weight: normal; }\n  .forecast-weather-box .list-box .day .times-table .time-box {\n          display: -webkit-box;\n          display: flex;\n          padding: 5px;\n          height: 50px;\n          -webkit-box-align: center;\n                  align-items: center;\n          overflow: hidden; }\n  .forecast-weather-box .list-box .day .times-table .time-box:not(:last-child) {\n            border-bottom: 1px solid rgba(255, 255, 255, 0.582); }\n  .forecast-weather-box .list-box .day .times-table .time-box > * {\n            margin: 2px; }\n  .forecast-weather-box .list-box .day .times-table .time-box .icon {\n            height: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2RheXMtd2VhdGhlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFx3ZWF0aGVyLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcZGF5cy13ZWF0aGVyXFxkYXlzLXdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9kYXlzLXdlYXRoZXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3Blclxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYSxFQThEaEI7RUEvREQ7SUFJUSxxQkFBYTtJQUFiLGNBQWE7SUFDYiwwQkFBbUI7WUFBbkIsb0JBQW1CLEVBeUR0QjtFQTlETDtNQVFZLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osWUFBVztNQUNYLFdBQVU7TUFDViwwQ0Nib0M7TURjcEMsc0JBQXFCO01BQ3JCLGtCQUFpQixFQStDcEI7RUE3RFQ7UUE2QmdCLGFBQVk7UUFDWixnQkFBZTtRQUNmLG9CQUFtQixFQTZCdEI7RUE1RGI7VUFrQ29CLHFCQUFhO1VBQWIsY0FBYTtVQUNiLGFBQVk7VUFDWixhQUFZO1VBQ1osMEJBQW1CO2tCQUFuQixvQkFBbUI7VUFDbkIsaUJBQWdCLEVBcUJuQjtFQTNEakI7WUF5Q3dCLG9EQUFtRCxFQUN0RDtFQTFDckI7WUE2Q3dCLFlBQVcsRUFDZDtFQTlDckI7WUF5RHdCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9kYXlzLXdlYXRoZXIvZGF5cy13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9oZWxwZXJzL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5mb3JlY2FzdC13ZWF0aGVyLWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIC5saXN0LWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuZGF5IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViLXNlY3Rpb24tYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGVtcHJhdHVyZSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGltZXMtdGFibGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGltZS1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTgyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYgPiAqIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGltZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2Mge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRzZWN0aW9uLWJhY2tncm91bmQ6IHJnYmEoNDMsIDM4LCAzOCwgMC42MjMpO1xyXG4kc3ViLXNlY3Rpb24tYmFja2dyb3VuZDogcmdiYSg3MSwgNjgsIDY4LCAwLjcyNik7XHJcblxyXG4kaW5wdXQtYmFja2dyb3VuZDogd2hpdGU7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/main/days-weather/days-weather.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/main/days-weather/days-weather.component.ts ***!
  \************************************************************************/
/*! exports provided: DaysWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysWeatherComponent", function() { return DaysWeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaysWeatherComponent = /** @class */ (function () {
    function DaysWeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["LOADER"];
        this.getIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["getIcon"];
    }
    DaysWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherService.getForecastWeather(this.location.position).subscribe(function (response) {
            _this.forecastWeather = response.Days.slice(0, 4);
        });
    };
    DaysWeatherComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.weatherService.getForecastWeather(this.location.position).subscribe(function (response) {
            _this.forecastWeather = response.Days.slice(0, 4);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DaysWeatherComponent.prototype, "location", void 0);
    DaysWeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-days-weather',
            template: __webpack_require__(/*! ./days-weather.component.html */ "./src/app/components/main/days-weather/days-weather.component.html"),
            styles: [__webpack_require__(/*! ./days-weather.component.scss */ "./src/app/components/main/days-weather/days-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], DaysWeatherComponent);
    return DaysWeatherComponent;
}());



/***/ }),

/***/ "./src/app/components/main/locations/locations.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/main/locations/locations.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-box\">\n  <div class=\"locations-box\">\n    <img *ngIf=\"!allLocations\" [src]=\"loaderIcon\" class=\"loader\">\n    <div \n      (click)=\"locationSelected(location)\" \n      *ngFor=\"let location of allLocations\" \n      class=\"location\" \n      [innerHtml]=\"location.name | locationName\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/locations/locations.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/main/locations/locations.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 170px; }\n\n.locations-box {\n  background-color: rgba(43, 38, 38, 0.623);\n  height: 150px;\n  display: -webkit-box;\n  display: flex;\n  width: 97%; }\n\n.locations-box .location {\n    margin: 10px;\n    background-color: rgba(71, 68, 68, 0.726);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    width: 130px;\n    height: 130px;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2xvY2F0aW9ucy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFx3ZWF0aGVyLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcbG9jYXRpb25zXFxsb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9sb2NhdGlvbnMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3Blclxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSwwQ0NWd0M7RURZeEMsY0FBYTtFQUNiLHFCQUFhO0VBQWIsY0FBYTtFQUNiLFdBQVUsRUFnQmI7O0FBckJEO0lBWVEsYUFBWTtJQUNaLDBDQ3JCd0M7SURzQnhDLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixjQUFhO0lBQ2IseUJBQXVCO1lBQXZCLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9sb2NhdGlvbnMvbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9oZWxwZXJzL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5mbGV4LWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxufVxyXG5cclxuLmxvY2F0aW9ucy1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tYmFja2dyb3VuZDtcclxuICAgIC8vIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTclO1xyXG5cclxuICAgIC5sb2FkZXIge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViLXNlY3Rpb24tYmFja2dyb3VuZDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59IiwiJHNlY3Rpb24tYmFja2dyb3VuZDogcmdiYSg0MywgMzgsIDM4LCAwLjYyMyk7XHJcbiRzdWItc2VjdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKDcxLCA2OCwgNjgsIDAuNzI2KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/components/main/locations/locations.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/main/locations/locations.component.ts ***!
  \******************************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/locations.service */ "./src/app/services/locations.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(locationsService, localStorageService, weatherService) {
        this.locationsService = locationsService;
        this.localStorageService = localStorageService;
        this.weatherService = weatherService;
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["LOADER"];
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.allLocations = this.locationsService.getAllLocations();
        this.allLocations = this.localStorageService.getFromLocalStorage(this.localStorageService.keys.LOCATIONS);
        this.locationsService.allLocations = this.allLocations;
        this.locationsService.updateList.subscribe(function () {
            _this.allLocations = _this.locationsService.getAllLocations();
        });
    };
    LocationsComponent.prototype.locationSelected = function (location) {
        this.weatherService.locationSelected.next(location);
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/components/main/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/components/main/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>\n\n<div class=\"loader-box\">\n  <img *ngIf=\"!location\" [src]=\"loaderIcon\" class=\"loader\">\n</div>\n\n<section *ngIf=\"location\">\n  <app-days-weather [location]=\"location\" class=\"sub-section\"></app-days-weather>\n  <app-current-weather [location]=\"location\" class=\"sub-section\"></app-current-weather>\n</section>\n\n<app-locations></app-locations>\n\n"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  display: -webkit-box;\n  display: flex; }\n  section .sub-section {\n    background-color: rgba(43, 38, 38, 0.623);\n    margin: 20px;\n    width: 50%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n  .loader-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .loader-box .loader {\n    height: 280px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXHdlYXRoZXItYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3Blclxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQWE7RUFBYixjQUFhLEVBUWhCO0VBVEQ7SUFJUSwwQ0NOb0M7SURPcEMsYUFBWTtJQUNaLFdBQVU7SUFDViw0QkFBbUI7SUFBbkIseUJBQW1CO0lBQW5CLG9CQUFtQixFQUN0QjtFQUdMO0VBQ0kscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QixFQUsxQjtFQVBEO0lBS1EsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9oZWxwZXJzL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuc3ViLXNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWJhY2tncm91bmQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvYWRlci1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5sb2FkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbn0iLCIkc2VjdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKDQzLCAzOCwgMzgsIDAuNjIzKTtcclxuJHN1Yi1zZWN0aW9uLWJhY2tncm91bmQ6IHJnYmEoNzEsIDY4LCA2OCwgMC43MjYpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQ6IHdoaXRlO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_app_services_geography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geography.service */ "./src/app/services/geography.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(weatherService, geoService) {
        this.weatherService = weatherService;
        this.geoService = geoService;
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["LOADER"];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.findMe();
        this.weatherService.locationSelected.subscribe(function (location) {
            _this.location = location;
        });
    };
    MainComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = __assign({}, _this.location, { position: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    } });
                _this.geoService.getPlaceName(_this.location.position).subscribe(function (response) {
                    _this.location = __assign({}, _this.location, { name: response.results[0].formatted });
                });
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], src_app_services_geography_service__WEBPACK_IMPORTED_MODULE_2__["GeographyService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/main/search/result/result.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/main/search/result/result.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"result-box\">\n  <div class=\"result-content\">\n    {{ details.name }}\n  </div>\n  <img [src]=\"chevronIcon\" class=\"chevron\">\n</div>"

/***/ }),

/***/ "./src/app/components/main/search/result/result.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/main/search/result/result.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-box {\n  padding: 5px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.63);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n  .result-box .result-content {\n    color: black; }\n  .result-box .chevron {\n    display: none;\n    height: 18px; }\n  .result-box:hover {\n    background-color: rgba(128, 128, 128, 0.63); }\n  .result-box:hover .chevron {\n      display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlYXJjaC9yZXN1bHQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3Blclxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXHNlYXJjaFxccmVzdWx0XFxyZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osbURBQWtEO0VBQ2xELHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUE4QjtVQUE5QiwrQkFBOEIsRUFrQmpDO0VBdEJEO0lBT1EsYUFBWSxFQUNmO0VBUkw7SUFXUSxjQUFhO0lBQ2IsYUFBWSxFQUNmO0VBYkw7SUFnQlEsNENBQTJDLEVBSzlDO0VBckJMO01BbUJZLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWFyY2gvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQtYm94IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjMpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAucmVzdWx0LWNvbnRlbnQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuY2hldnJvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYzKTtcclxuXHJcbiAgICAgICAgLmNoZXZyb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/main/search/result/result.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main/search/result/result.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this.chevronIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_1__["RIGHT_CHEVRON"];
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultComponent.prototype, "details", void 0);
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/components/main/search/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/components/main/search/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/main/search/search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/main/search/search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.results-open]=\"searchResults\" class=\"box\">\n  <div class=\"input-box\">\n    <div class=\"search-box\">\n      <input (keypress)=\"searchLocation($event)\" #inputSearch type=\"text\" class=\"search\">\n      <img (click)=\"searchLocation()\" [src]=\"inputIcon\" class=\"icon\">\n    </div>\n    <div class=\"results-box\">\n      <app-result (click)=\"resultSelected(result)\" *ngFor=\"let result of searchResults\" [details]=\"result\"></app-result>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/main/search/search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/main/search/search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 55px; }\n  .box .input-box {\n    width: 90%; }\n  .box .search-box {\n    display: -webkit-box;\n    display: flex;\n    height: 35px;\n    border-radius: 99px; }\n  .box .search-box .search {\n      -webkit-box-flex: 1;\n              flex-grow: 1;\n      border: none;\n      border-top-left-radius: 18px;\n      border-bottom-left-radius: 18px;\n      padding: 15px;\n      height: 100%;\n      color: black; }\n  .box .search-box .icon {\n      background-color: white;\n      height: 100%;\n      padding: 5px;\n      border-top-right-radius: 18px;\n      border-bottom-right-radius: 18px; }\n  .box .results-box {\n    display: none;\n    background-color: white;\n    position: absolute;\n    width: 100%;\n    border-bottom-right-radius: 18px;\n    border-bottom-left-radius: 18px;\n    padding: 10px;\n    z-index: 999; }\n  .box.results-open .search-box .search {\n  border-bottom-left-radius: 0px; }\n  .box.results-open .search-box .icon {\n  border-bottom-right-radius: 0px; }\n  .box.results-open .results-box {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlYXJjaC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFx3ZWF0aGVyLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWFyY2gvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3Blclxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQWtCO0VBQ2xCLHFCQUFhO0VBQWIsY0FBYTtFQUNiLHlCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixhQUFZLEVBd0NmO0VBN0NEO0lBUVEsV0FBVSxFQUNiO0VBVEw7SUFZUSxxQkFBYTtJQUFiLGNBQWE7SUFDYixhQUFZO0lBQ1osb0JBQW1CLEVBbUJ0QjtFQWpDTDtNQWlCWSxvQkFBWTtjQUFaLGFBQVk7TUFDWixhQUFZO01BQ1osNkJBQTRCO01BQzVCLGdDQUErQjtNQUMvQixjQUFhO01BQ2IsYUFBWTtNQUNaLGFBQVksRUFDZjtFQXhCVDtNQTJCWSx3QkMxQlk7TUQyQlosYUFBWTtNQUNaLGFBQVk7TUFDWiw4QkFBNkI7TUFDN0IsaUNBQWdDLEVBQ25DO0VBaENUO0lBb0NRLGNBQWE7SUFDYix3QkNwQ2dCO0lEcUNoQixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGlDQUFnQztJQUNoQyxnQ0FBK0I7SUFDL0IsY0FBYTtJQUNiLGFBQVksRUFDZjtFQUdMO0VBS1ksK0JBQThCLEVBQ2pDO0VBTlQ7RUFTWSxnQ0FBK0IsRUFDbEM7RUFWVDtFQWNRLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvaGVscGVycy9zdHlsZS12YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gICAgLmlucHV0LWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuXHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHRzLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMThweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgIH1cclxufVxyXG5cclxuLmJveC5yZXN1bHRzLW9wZW4ge1xyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJveCB7XHJcblxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHRzLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIkc2VjdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKDQzLCAzOCwgMzgsIDAuNjIzKTtcclxuJHN1Yi1zZWN0aW9uLWJhY2tncm91bmQ6IHJnYmEoNzEsIDY4LCA2OCwgMC43MjYpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQ6IHdoaXRlO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/main/search/search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/main/search/search.component.ts ***!
  \************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_app_services_geography_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/geography.service */ "./src/app/services/geography.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(weatherService, geoService) {
        this.weatherService = weatherService;
        this.geoService = geoService;
        this.inputIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_1__["TARGET"];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.searchLocation = function (input) {
        var _this = this;
        if ((input && input.code == 'Enter') || (!input)) {
            this.inputIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_1__["LOADER"];
            this.geoService.searchPlace(this.inputSearch.nativeElement.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.results; })).subscribe(function (response) {
                _this.searchResults = response.map(function (result) {
                    return {
                        name: result.formatted,
                        position: {
                            lat: result.geometry.lat,
                            lng: result.geometry.lng
                        }
                    };
                });
                _this.inputIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_1__["TARGET"];
            });
        }
    };
    SearchComponent.prototype.resultSelected = function (result) {
        this.weatherService.locationSelected.next(result);
        this.searchResults = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputSearch'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "inputSearch", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/main/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/main/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"], src_app_services_geography_service__WEBPACK_IMPORTED_MODULE_3__["GeographyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pipes/location-name.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/location-name.pipe.ts ***!
  \*********************************************/
/*! exports provided: LocationNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationNamePipe", function() { return LocationNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationNamePipe = /** @class */ (function () {
    function LocationNamePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    LocationNamePipe.prototype.transform = function (value, args) {
        var words = value.split(',');
        var name = '';
        for (var i = 0; i < words.length; i++) {
            if (i == 0) {
                name = name + "<div style=\"font-weight: bold; font-size: 30px;\">" + words[i] + "</div>";
            }
            else {
                name = name + "<div>" + words[i] + "</div>";
            }
        }
        name = "<div class=\"name-box\">" + name + "</div>";
        return this._sanitizer.bypassSecurityTrustHtml(name);
    };
    LocationNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'locationName'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], LocationNamePipe);
    return LocationNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/utctime.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/utctime.pipe.ts ***!
  \***************************************/
/*! exports provided: UTCtimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTCtimePipe", function() { return UTCtimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UTCtimePipe = /** @class */ (function () {
    function UTCtimePipe() {
    }
    UTCtimePipe.prototype.transform = function (value, args) {
        switch (value) {
            case 0: return '00:00';
            case 300: return '03:00';
            case 600: return '06:00';
            case 900: return '09:00';
            case 1200: return '12:00';
            case 1500: return '15:00';
            case 1800: return '18:00';
            case 2100: return '21:00';
            default: return '00:00';
        }
    };
    UTCtimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uTCtime'
        })
    ], UTCtimePipe);
    return UTCtimePipe;
}());



/***/ }),

/***/ "./src/app/services/geography.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/geography.service.ts ***!
  \***********************************************/
/*! exports provided: GeographyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeographyService", function() { return GeographyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeographyService = /** @class */ (function () {
    function GeographyService(http) {
        this.http = http;
        this.API_KEY = '8087364e4c2b4cfd990e74f4726a28e7';
        this.URL = 'https://api.opencagedata.com/geocode/v1/json';
    }
    GeographyService.prototype.searchPlace = function (search) {
        return this.http.get(this.URL + "?q=" + search + "&key=" + this.API_KEY);
    };
    GeographyService.prototype.getPlaceName = function (position) {
        return this.http.get(this.URL + "?q=" + position.lat + "+" + position.lng + "&key=" + this.API_KEY);
    };
    GeographyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeographyService);
    return GeographyService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.getImage = function (locationName) {
        return this.http.get("https://api.teleport.org/api/urban_areas/slug:" + locationName + "/images/");
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.keys = {
            LOCATIONS: 'locations'
        };
    }
    LocalStorageService.prototype.saveToLocalStorage = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getFromLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/locations.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/locations.service.ts ***!
  \***********************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsService = /** @class */ (function () {
    function LocationsService(localStorageService) {
        this.localStorageService = localStorageService;
        this.allLocations = [];
        this.updateList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LocationsService.prototype.getAllLocations = function () {
        return this.allLocations.slice();
    };
    LocationsService.prototype.weatherSelected = function (location) {
        if (!this.checkIfInList(location.position)) {
            this.addLocation(location);
        }
        else {
            this.removeLocation(location);
        }
    };
    LocationsService.prototype.addLocation = function (location) {
        this.allLocations.push(location);
        this.localStorageService.saveToLocalStorage(this.localStorageService.keys.LOCATIONS, this.allLocations);
        this.updateList.next();
    };
    LocationsService.prototype.removeLocation = function (locationToRemove) {
        // let indexToRemove = this.allLocations.findIndex((location => locationToRemove === location));
        this.allLocations = this.allLocations.filter(function (location) { return locationToRemove !== location; });
        this.localStorageService.saveToLocalStorage(this.localStorageService.keys.LOCATIONS, this.allLocations);
        this.updateList.next();
    };
    LocationsService.prototype.checkIfInList = function (position) {
        var result = this.allLocations.find(function (location) { return location.position === position; });
        if (result) {
            return true;
        }
        else
            return false;
    };
    LocationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], LocationsService);
    return LocationsService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.APP_KEY = 'ddfb6e18b770b286e59ddd9bb73b5b45';
        this.APP_ID = 'ec0c996f';
        this.URL = ' https://api.weatherunlocked.com';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.locationSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    WeatherService.prototype.getCurrentWeather = function (position) {
        return this.http.get(this.URL + "/api/current/" + position.lat + "," + position.lng + "?app_id=" + this.APP_ID + "&app_key=" + this.APP_KEY);
    };
    WeatherService.prototype.getForecastWeather = function (position) {
        return this.http.get(this.URL + "/api/forecast/" + position.lat + "," + position.lng + "?app_id=" + this.APP_ID + "&app_key=" + this.APP_KEY);
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/assets/variables.ts":
/*!*********************************!*\
  !*** ./src/assets/variables.ts ***!
  \*********************************/
/*! exports provided: LOADER, STAR, YELLOW_STAR, TARGET, RIGHT_CHEVRON, getIcon, getPng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADER", function() { return LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAR", function() { return STAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YELLOW_STAR", function() { return YELLOW_STAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGET", function() { return TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_CHEVRON", function() { return RIGHT_CHEVRON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPng", function() { return getPng; });
var LOADER = 'assets/loader.svg';
var STAR = 'assets/star.svg';
var YELLOW_STAR = 'assets/yellow-star.svg';
var TARGET = 'assets/target.svg';
var RIGHT_CHEVRON = 'assets/right-chevron.svg';
var getIcon = function (name) {
    return "assets/weather-icons/" + name;
};
var getPng = function (name) {
    var png = name.slice(0, name.length - 4);
    return "assets/weather-icons/" + png + ".png";
};


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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Full Stack Developer\weather-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map