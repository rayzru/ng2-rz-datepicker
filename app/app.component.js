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
var datepicker_1 = require('./datepicker/datepicker');
var AppComponent = (function () {
    function AppComponent() {
        this.selDate = 'MM/DD/YYYY';
        this.minDate = '01/01/2016';
        this.maxDate = '12/31/2017';
        this.disableDays = [0, 6]; //For Sunday and Saturday
        this.toContainPrevMonth = false;
        this.toContainNextMonth = false;
        this.value = '';
    }
    AppComponent.prototype.setInputDate = function (event) {
        this.value = event.target.value;
    };
    AppComponent.prototype.setDate = function (date) {
        this.selDate = date;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [datepicker_1.DatePickerComponent],
            precompile: [datepicker_1.DatePickerComponent],
            template: "\n    \t<h3>Angular 2 DatePicker</h3>\n    \t<date-picker \n            [value]=\"value\"\n            [minDate]=\"minDate\" \n            [maxDate]=\"maxDate\"\n            [disableDays]=\"disableDays\"\n            [toContainPrevMonth]=\"toContainPrevMonth\"\n            [toContainNextMonth]=\"toContainNextMonth\"\n            (selectedDate)='setDate($event)'></date-picker>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map