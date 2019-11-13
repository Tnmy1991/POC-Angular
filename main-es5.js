(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">{{ title }}!</h1>\r\n    <hr class=\"my-4\">\r\n    <app-weather-widget></app-weather-widget>\r\n    <hr class=\"my-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Email Validator API</h5>\r\n        <p class=\"card-text text-justify\">Checks for fake DNS as well as uses regex functions to check the email for the right length and accepted characters. For example it will mark as valid an email like 'john@gmail.com' but it will recognize as a fake 'john@gmaill.com' (because of the not existing domain).</p>\r\n        <app-email-validator></app-email-validator>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Pin Codes - India API</h5>\r\n        <p class=\"card-text text-justify\">Find a list of post offices using either a postal code/pincode or search string in location name.</p>\r\n        <app-search-post-offices></app-search-post-offices>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Indian Railways API</h5>\r\n        <p class=\"card-text text-justify\">Get station codes and also get PNR status of indian railways using this easy API, this is developed for educational purposes only and we are not affiliated to indian railways in any form and this is not an official api also.</p>\r\n        <app-search-railways-stations></app-search-railways-stations>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Numbers API</h5>\r\n        <p class=\"card-text text-justify\">An API for interesting facts about numbers. Provides trivia, math, date, and year facts about numbers.</p>\r\n        <app-numbers-facts></app-numbers-facts>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">WikiSynonyms API</h5>\r\n        <p class=\"card-text text-justify\">This is a term synonym discovery service that exploits that structure of Wikipedia redirects to discover almost-equivalent terms. You can try terms like C++, or Hillary Clinton, or Mihapjungguk to see some of the results.</p>\r\n        <app-wiki-synonym></app-wiki-synonym>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">URL Shortener Service API</h5>\r\n        <p class=\"card-text text-justify\">TJust paste the link to cut it!</p>\r\n        <app-url-shortener></app-url-shortener>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/email-validator/email-validator.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/email-validator/email-validator.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <form (ngSubmit)=\"verifyEmail()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control\" [formControl]=\"emailValidator\" placeholder=\"Enter email\">\r\n        <div *ngIf=\"emailValidator.invalid && (emailValidator.dirty || emailValidator.touched)\" class=\"alert alert-danger\">\r\n          <small class=\"form-text text-muted\"><em>*</em> Enter a valid email address.</small>\r\n        </div>\r\n        <h2 *ngIf=\"showResult\">\r\n          {{ emailValidator.value }} \r\n          <span class=\"badge badge-success\" *ngIf=\"response.isValid\">Valid</span>\r\n          <span class=\"badge badge-error\" *ngIf=\"!response.isValid\">Invalid</span>\r\n        </h2>\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"emailValidator.invalid\" class=\"btn btn-primary\">Verify</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/numbers-facts/numbers-facts.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/numbers-facts/numbers-facts.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"btn-group margin-bottom\" role=\"group\" aria-label=\"Select Fact Modes\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setFactMode('date')\">Get Date Fact</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setFactMode('math')\">Get Math Fact</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getRandomFact()\">Get Random Fact</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setFactMode('trivia')\">Get Trivia Fact</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setFactMode('year')\">Get Year Fact</button>\n    </div>\n    <div class=\"card margin-bottom\" *ngIf=\"factMode != 'date' && factMode != ''\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">{{ formTitle }}</div>\n        <form class=\"form-inline\" (ngSubmit)=\"submitNumberField()\">\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" [formControl]=\"numberField\" placeholder=\"{{ placeholder }}\">\n          <div *ngIf=\"numberField.invalid && (numberField.dirty || numberField.touched)\" class=\"alert alert-danger\">\n            <small class=\"form-text text-muted\"><em>*</em> Enter a valid number.</small>\n          </div>\n          <button type=\"submit\" [disabled]=\"numberField.invalid\" class=\"btn btn-primary mb-2 mr-sm-2\">Search</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"card margin-bottom\" *ngIf=\"factMode == 'date'\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Get a fact about a day of year</div>\n        <form class=\"form-inline\" [formGroup]=\"dayMonthFields\" (ngSubmit)=\"submitDayMonthFields()\">\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" formControlName=\"month\" placeholder=\"Enter a month\">\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" formControlName=\"day\" placeholder=\"Enter a day\">\n          <button type=\"submit\" class=\"btn btn-primary mb-2 mr-sm-2\">Search</button>\n        </form>\n      </div>\n    </div>\n    <h3 *ngIf=\"showResult\">\n      <span class=\"badge badge-success\" *ngIf=\"response.number\">{{ response.number }}</span>\n      {{ response.text }} \n    </h3>\n  </div>\n</div>\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-post-offices/search-post-offices.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-post-offices/search-post-offices.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"btn-group margin-bottom\" role=\"group\" aria-label=\"Search Modes\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setSearchMode('pincode')\">Search by Pincode</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setSearchMode('address')\">Search by Address</button>\r\n    </div>\r\n    <div class=\"card margin-bottom\" *ngIf=\"searchMode == 'pincode'\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-title\">Search Post Officess by Pincode</div>\r\n        <form (ngSubmit)=\"searchUsingPincode()\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" [formControl]=\"pincodeField\" placeholder=\"Enter a pincode\">\r\n            <div *ngIf=\"pincodeField.invalid && (pincodeField.dirty || pincodeField.touched)\" class=\"alert alert-danger\">\r\n              <small class=\"form-text text-muted\"><em>*</em> Enter a valid pincode.</small>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" [disabled]=\"pincodeField.invalid\" class=\"btn btn-primary\">Search</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"card margin-bottom\" *ngIf=\"searchMode == 'address'\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-title\">Search Post Officess by Address</div>\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchUsingAddress()\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Enter an address\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <select class=\"custom-select mb-3\" formControlName=\"state_id\">\r\n              <option value=\"\">Select a State</option>\r\n              <option value=\"1\">Telangana</option>\r\n              <option value=\"2\">Andhra Pradesh</option>\r\n              <option value=\"3\">Pondicherry</option>\r\n              <option value=\"4\">Assam</option>\r\n              <option value=\"5\">Bihar</option>\r\n              <option value=\"6\">Chattisgarh</option>\r\n              <option value=\"7\">Delhi</option>\r\n              <option value=\"8\">Gujarat</option>\r\n              <option value=\"9\">Daman & Diu</option>\r\n              <option value=\"10\">Dadra & Nagar Haveli</option>\r\n              <option value=\"11\">Haryana</option>\r\n              <option value=\"12\">Himachal Pradesh</option>\r\n              <option value=\"13\">Jammu & Kashmir</option>\r\n              <option value=\"14\">Jharkhand</option>\r\n              <option value=\"15\">Karnataka</option>\r\n              <option value=\"16\">Kerala</option>\r\n              <option value=\"17\">Lakshadweep</option>\r\n              <option value=\"18\">Madhya Pradesh</option>\r\n              <option value=\"19\">Maharashtra</option>\r\n              <option value=\"20\">Goa</option>\r\n              <option value=\"21\">Manipur</option>\r\n              <option value=\"22\">Mizoram</option>\r\n              <option value=\"23\">Nagaland</option>\r\n              <option value=\"24\">Tripura</option>\r\n              <option value=\"25\">Arunachal Pradesh</option>\r\n              <option value=\"26\">Meghalaya</option>\r\n              <option value=\"27\">Odisha</option>\r\n              <option value=\"28\">Chandigarh</option>\r\n              <option value=\"29\">Punjab</option>\r\n              <option value=\"30\">Rajasthan</option>\r\n              <option value=\"31\">Tamil Nadu</option>\r\n              <option value=\"32\">Uttar Pradesh</option>\r\n              <option value=\"33\">Uttarakhand</option>\r\n              <option value=\"34\">West Bengal</option>\r\n              <option value=\"35\">Andaman & Nicobar Islands</option>\r\n              <option value=\"36\">Sikkim</option>\r\n            </select>\r\n          </div>\r\n          <button type=\"submit\" [disabled]=\"searchForm.invalid\" class=\"btn btn-primary\">Search</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"row result-container\" *ngIf=\"response\">\r\n      <div class=\"col-lg-6\" *ngFor=\"let result of response\">\r\n        <h6>{{ result.office }}</h6>\r\n        <p class=\"lead\"><em>Office Type:</em> <strong>{{ result.office_type }}</strong></p>\r\n        <p class=\"lead\"><em>Delivery:</em> <strong>{{ result.delivery }}</strong></p>\r\n        <p class=\"lead\"><em>Division:</em> <strong>{{ result.division }}</strong></p>\r\n        <p class=\"lead\"><em>Region:</em> <strong>{{ result.region }}</strong></p>\r\n        <p class=\"lead\"><em>Circle:</em> <strong>{{ result.circle }}</strong></p>\r\n        <p class=\"lead\"><em>Taluk:</em> <strong>{{ result.taluk }}</strong></p>\r\n        <p class=\"lead\"><em>District:</em> <strong>{{ result.district }}</strong></p>\r\n        <p class=\"lead\"><em>State ID:</em> <strong>{{ result.state_id }}</strong></p>\r\n        <p class=\"lead\"><em>Phone:</em> <strong>{{ result.phone }}</strong></p>\r\n        <p class=\"lead\"><em>Related Sub-office:</em> <strong>{{ result.related_suboffice }}</strong></p>\r\n        <p class=\"lead\"><em>Related Head-office:</em> <strong>{{ result.related_headoffice }}</strong></p>\r\n      </div>\r\n      <br>\r\n      <small class=\"form-text text-muted\">Total {{ response?.length }} record(s) found.</small>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-railways-stations/search-railways-stations.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-railways-stations/search-railways-stations.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"btn-group margin-bottom\" role=\"group\" aria-label=\"Search Modes\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setSearchMode('pnr')\">PNR Status Check</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setSearchMode('find')\">Find Stations</button>\n    </div>\n    <div class=\"card margin-bottom\" *ngIf=\"searchMode == 'pnr'\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">PNR Status Check</div>\n        <form (ngSubmit)=\"checkStatus()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"pnrStatusField\" placeholder=\"Enter a pincode\">\n            <div *ngIf=\"pnrStatusField.invalid && (pnrStatusField.dirty || pnrStatusField.touched)\" class=\"alert alert-danger\">\n              <small class=\"form-text text-muted\"><em>*</em> Enter an invalid PNR code.</small>\n            </div>\n            <ul class=\"list-group\" *ngIf=\"showResult\">\n              <li class=\"list-group-item list-group-item-secondary\"><strong>PNR <em>{{ response.pnr }}</em></strong></li>\n              <li class=\"list-group-item list-group-item-light\" *ngIf=\"response.journeyDetails\">\n                <ul class=\"list-group list-group-horizontal\">\n                  <li class=\"list-group-item\">\n                      <p class=\"text-justify\">Train Number: {{ response.journeyDetails.trainNumber }}</p>\n                      <p class=\"text-justify\">Train Name: {{ response.journeyDetails.trainName }}</p>\n                      <p class=\"text-justify\">From: {{ response.journeyDetails.from }}</p>\n                      <p class=\"text-justify\">To: {{ response.journeyDetails.to }}</p>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <p class=\"text-justify\">Boarding Date: {{ response.journeyDetails.boardingDate }}</p>\n                    <p class=\"text-justify\">Boarding Point: {{ response.journeyDetails.boardingPoint }}</p>\n                    <p class=\"text-justify\">Reserved Upto: {{ response.journeyDetails.reservedUpto }}</p>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <p class=\"text-justify\">Class: {{ response.journeyDetails.class }}</p>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"list-group-item list-group-item-light\" *ngIf=\"response.bookingStatus\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">Passenger No#</th>\n                      <th scope=\"col\">Booking Status</th>\n                      <th scope=\"col\">Current Status</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of response.bookingStatus\">\n                      <th scope=\"row\">{{ data.passengerNo }}</th>\n                      <td>{{ data.bookingStatus }}</td>\n                      <td>{{ data.currentStatus }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </li>\n              <li class=\"list-group-item list-group-item-dark\" *ngIf=\"response.lastUpdated\">{{ response.lastUpdated }}</li>\n              <li class=\"list-group-item list-group-item-info\" *ngIf=\"response.chartingStatus\">{{ response.chartingStatus }}</li>\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"response.error\">{{ response.error }}</li>\n            </ul>\n          </div>\n          <button type=\"submit\" [disabled]=\"pnrStatusField.invalid\" class=\"btn btn-primary\">Check Status</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"card margin-bottom\" *ngIf=\"searchMode == 'find'\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Find Stations</div>\n        <form (ngSubmit)=\"searchStations()\">\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" [formControl]=\"searchField\" placeholder=\"Enter location\">\n            <div *ngIf=\"searchField.invalid && (searchField.dirty || searchField.touched)\" class=\"alert alert-danger\">\n              <small class=\"form-text text-muted\"><em>*</em> Enter a valid address.</small>\n            </div>\n            <ul class=\"list-group\" *ngIf=\"showResult\">\n              <li class=\"list-group-item\" *ngFor=\"let item of response\">{{ item.stationName }} <span class=\"badge badge-secondary\">{{ item.stationCode }}</span></li>\n            </ul>\n          </div>\n          <button type=\"submit\" [disabled]=\"searchField.invalid\" class=\"btn btn-primary\">Verify</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/url-shortener/url-shortener.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/url-shortener/url-shortener.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"card-title\">Create new short URL from a long URL</div>\n    <form class=\"form-inline\" (ngSubmit)=\"submitUrl()\">\n      <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" [formControl]=\"urlField\" placeholder=\"Enter an url\">\n      <div *ngIf=\"urlField.invalid && (urlField.dirty || urlField.touched)\" class=\"alert alert-danger\">\n        <small class=\"form-text text-muted\"><em>*</em> Enter a search term.</small>\n      </div>\n      <button type=\"submit\" [disabled]=\"urlField.invalid\" class=\"btn btn-primary mb-2 mr-sm-2\">Search</button>\n    </form>\n    <h3 *ngIf=\"showResult && response\">\n      <ul class=\"list-group list-group-flush\" *ngIf=\"response\">\n        <li class=\"list-group-item\">\n          {{ response.result_url }}\n          <a href=\"{{ response.result_url }}\" target=\"_blank\" class=\"redirect-link\"></a>\n          <a href=\"javascript:void(0);\" (click)=\"copyMessage('This goes to Clipboard')\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to copy\" class=\"clipboard\"></a>\n        </li>\n      </ul>\n    </h3>\n  </div>\n</div>\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/weather-widget/weather-widget.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/weather-widget/weather-widget.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\r\n  <span class=\"city\">{{response.weather[0].main}} - {{response.name}}, {{response.sys.country}}</span>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 inline-col\">\r\n      <div class=\"weather-icon\">\r\n        <img src=\"{{icons_baseurl}}{{response.weather[0].icon}}{{icons_sufix}}\" alt=\"{{response.weather[0].description}}\">\r\n      </div>\r\n      <span class=\"temp\">{{ response.main.temp - 273.15 | number:'1.0-0' }}&#176;</span>\r\n    </div>\r\n    <div class=\"col-lg-9\" style=\"margin-top: 20px;\">\r\n      <ul class=\"list-group list-group-horizontal\">\r\n        <li class=\"list-group-item\" style=\"width: 15%;\">  \r\n          <div class=\"max-temp\">\r\n            <span class=\"unit\">{{ response.main.temp_max - 273.15 | number:'1.0-1' }}&#176;</span>\r\n          </div>\r\n          <div class=\"min-temp\">\r\n            <span class=\"unit\">{{ response.main.temp_min - 273.15 | number:'1.0-1' }}&#176;</span>\r\n          </div>\r\n        </li>\r\n        <li class=\"list-group-item\" style=\"width: 25%;\">\r\n          <div class=\"speed\">\r\n            <span class=\"unit\">{{ response.wind.speed }} mile/hr</span>\r\n          </div>\r\n          <div class=\"direction\">\r\n            <span class=\"unit\">{{ response.wind.deg }}&#176;</span>\r\n          </div>\r\n        </li>\r\n        <li class=\"list-group-item\" style=\"width: 25%;\">\r\n          <div class=\"sunrise\">\r\n            <span class=\"unit\">{{ response.sys.sunrise * 1000 | date: 'shortTime' }}</span>\r\n          </div>\r\n          <div class=\"sunset\">\r\n            <span class=\"unit\">{{ response.sys.sunset * 1000 | date: 'shortTime' }}</span>\r\n          </div>\r\n        </li>\r\n        <li class=\"list-group-item\" style=\"width: 20%;\">\r\n          <div class=\"humidity\">\r\n            <span class=\"unit\">{{ response.main.humidity }}%</span>\r\n          </div>\r\n          <div class=\"pressure\">\r\n            <span class=\"unit\">{{ response.main.pressure / 1000 | number:'1.0-3' }} bar</span>\r\n          </div>\r\n        </li>\r\n        <li class=\"list-group-item\" style=\"width: 15%;\">\r\n          <div class=\"clouds\">\r\n            <span class=\"unit\">{{ response.clouds.all }}%</span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <p class=\"form-text text-muted text-right font-italic\">Last updated at {{ response.dt * 1000 | date: 'longTime' }}</p>\r\n</div>\r\n<div class=\"row\" *ngIf=\"forecast\">\r\n  <div class=\"card custom-card\" *ngFor=\"let item of forecast\">\r\n    <h5 class=\"card-title\">{{item.weather[0].main}}</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{ item.dt * 1000 | date: 'MMM d' }}</h6>\r\n    <div class=\"weather-icon\">\r\n      <img src=\"{{icons_baseurl}}{{item.weather[0].icon}}{{icons_sufix}}\" alt=\"{{item.weather[0].description}}\">\r\n      <span class=\"temp\">{{ item.main.temp - 273.15 | number:'1.0-0' }}&#176;</span>\r\n    </div>\r\n    <div class=\"temparature-summary\">\r\n      <div class=\"max-temp\">\r\n        <span class=\"unit\">{{ item.main.temp_max - 273.15 | number:'1.0-1' }}&#176;</span>\r\n      </div>\r\n      <div class=\"min-temp\">\r\n        <span class=\"unit\">{{ item.main.temp_min - 273.15 | number:'1.0-1' }}&#176;</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/wiki-synonym/wiki-synonym.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/wiki-synonym/wiki-synonym.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"card-title\">Search for synonyms for a given term or phrase</div>\n    <form class=\"form-inline\" (ngSubmit)=\"submitTerm()\">\n      <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" [formControl]=\"termField\" placeholder=\"Enter search term\">\n      <div *ngIf=\"termField.invalid && (termField.dirty || termField.touched)\" class=\"alert alert-danger\">\n        <small class=\"form-text text-muted\"><em>*</em> Enter a search term.</small>\n      </div>\n      <button type=\"submit\" [disabled]=\"termField.invalid\" class=\"btn btn-primary mb-2 mr-sm-2\">Search</button>\n    </form>\n    <div *ngIf=\"showResult\">\n      <ul class=\"list-group list-group-flush\" *ngIf=\"response\">\n        <li class=\"list-group-item\" *ngIf=\"response.http == 300\">{{ response.message }}</li>\n        <li class=\"list-group-item\" *ngIf=\"response.http == 204\">Sorry, no content found!</li>\n        <ng-template ngFor let-term [ngForOf]=\"response.terms\">\n          <li class=\"list-group-item\" *ngIf=\"response.http == 300\"><strong>{{ term }}</strong></li>\n          <li class=\"list-group-item\" *ngIf=\"response.http == 200 && term.term != ''\"><strong>{{ term.term }}</strong></li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/words/words.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/words/words.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-title\">WordsAPI API</div>\r\n    <form (ngSubmit)=\"searchWordsAPI()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [formControl]=\"wordField\" placeholder=\"Type your word\">\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Related Words\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"wordField.invalid\" (click)=\"searchMode('typeOf')\">Is a Type Of</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"wordField.invalid\" (click)=\"searchMode('hasTypes')\">Has Types</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"wordField.invalid\" (click)=\"searchMode('partOf')\">Part Of</button>\r\n      </div>\r\n    </form>\r\n    <small class=\"form-text text-muted\"><em>*</em> Checks for fake DNS as well as uses regex functions to check the email for the right length and accepted characters.</small>\r\n  </div>\r\n</div>\r\n<div class=\"loader loader-default is-active\" *ngIf=\"showLoader\"></div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'Angular - API based POC Projects';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_email_validator_email_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/email-validator/email-validator.component */ "./src/app/components/email-validator/email-validator.component.ts");
/* harmony import */ var _components_words_words_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/words/words.component */ "./src/app/components/words/words.component.ts");
/* harmony import */ var _components_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/weather-widget/weather-widget.component */ "./src/app/components/weather-widget/weather-widget.component.ts");
/* harmony import */ var _components_search_post_offices_search_post_offices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search-post-offices/search-post-offices.component */ "./src/app/components/search-post-offices/search-post-offices.component.ts");
/* harmony import */ var _components_search_railways_stations_search_railways_stations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-railways-stations/search-railways-stations.component */ "./src/app/components/search-railways-stations/search-railways-stations.component.ts");
/* harmony import */ var _components_numbers_facts_numbers_facts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/numbers-facts/numbers-facts.component */ "./src/app/components/numbers-facts/numbers-facts.component.ts");
/* harmony import */ var _components_wiki_synonym_wiki_synonym_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/wiki-synonym/wiki-synonym.component */ "./src/app/components/wiki-synonym/wiki-synonym.component.ts");
/* harmony import */ var _components_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/url-shortener/url-shortener.component */ "./src/app/components/url-shortener/url-shortener.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_email_validator_email_validator_component__WEBPACK_IMPORTED_MODULE_6__["EmailValidatorComponent"],
                _components_words_words_component__WEBPACK_IMPORTED_MODULE_7__["WordsComponent"],
                _components_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_8__["WeatherWidgetComponent"],
                _components_search_post_offices_search_post_offices_component__WEBPACK_IMPORTED_MODULE_9__["SearchPostOfficesComponent"],
                _components_search_railways_stations_search_railways_stations_component__WEBPACK_IMPORTED_MODULE_10__["SearchRailwaysStationsComponent"],
                _components_numbers_facts_numbers_facts_component__WEBPACK_IMPORTED_MODULE_11__["NumbersFactsComponent"],
                _components_wiki_synonym_wiki_synonym_component__WEBPACK_IMPORTED_MODULE_12__["WikiSynonymComponent"],
                _components_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_13__["UrlShortenerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/email-validator/email-validator.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/email-validator/email-validator.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-success {border-color: #067519;}\r\n.panel-success>.panel-heading, .badge.badge-success {color: #fff;background-color: #067519;border-color: #067519;}\r\n.panel-error {border-color: #ef0606;}\r\n.panel-error>.panel-heading, .badge.badge-error {color: #fff; background-color: #ef0606;border-color: #ef0606;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC12YWxpZGF0b3IvZW1haWwtdmFsaWRhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLHFCQUFxQixDQUFDO0FBQ3RDLHFEQUFxRCxXQUFXLENBQUMseUJBQXlCLENBQUMscUJBQXFCLENBQUM7QUFDakgsY0FBYyxxQkFBcUIsQ0FBQztBQUNwQyxpREFBaUQsV0FBVyxFQUFFLHlCQUF5QixDQUFDLHFCQUFxQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC12YWxpZGF0b3IvZW1haWwtdmFsaWRhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtc3VjY2VzcyB7Ym9yZGVyLWNvbG9yOiAjMDY3NTE5O31cclxuLnBhbmVsLXN1Y2Nlc3M+LnBhbmVsLWhlYWRpbmcsIC5iYWRnZS5iYWRnZS1zdWNjZXNzIHtjb2xvcjogI2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3NTE5O2JvcmRlci1jb2xvcjogIzA2NzUxOTt9XHJcbi5wYW5lbC1lcnJvciB7Ym9yZGVyLWNvbG9yOiAjZWYwNjA2O31cclxuLnBhbmVsLWVycm9yPi5wYW5lbC1oZWFkaW5nLCAuYmFkZ2UuYmFkZ2UtZXJyb3Ige2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYwNjA2O2JvcmRlci1jb2xvcjogI2VmMDYwNjt9Il19 */"

/***/ }),

/***/ "./src/app/components/email-validator/email-validator.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/email-validator/email-validator.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmailValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidatorComponent", function() { return EmailValidatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_email_validation_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/email-validation-api.service */ "./src/app/services/email-validation-api.service.ts");




var EmailValidatorComponent = /** @class */ (function () {
    function EmailValidatorComponent(serviceProvider) {
        this.serviceProvider = serviceProvider;
        this.showResult = false;
        this.showLoader = false;
    }
    EmailValidatorComponent.prototype.ngOnInit = function () {
        this.emailValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.emailValidator, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]\+.[a-zA-Z]{2,4}$')
        ]);
    };
    EmailValidatorComponent.prototype.verifyEmail = function () {
        var _this = this;
        this.showLoader = true;
        this.serviceProvider.validateEmail(this.emailValidator.value).subscribe(function (res) {
            _this.response = res;
            _this.baseClass = res.isValid ? 'panel-success' : 'panel-error';
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    EmailValidatorComponent.prototype.checkAgain = function () {
        this.showResult = false;
    };
    EmailValidatorComponent.ctorParameters = function () { return [
        { type: _services_email_validation_api_service__WEBPACK_IMPORTED_MODULE_3__["EmailValidationApiService"] }
    ]; };
    EmailValidatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-validator',
            template: __webpack_require__(/*! raw-loader!./email-validator.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/email-validator/email-validator.component.html"),
            styles: [__webpack_require__(/*! ./email-validator.component.css */ "./src/app/components/email-validator/email-validator.component.css")]
        })
    ], EmailValidatorComponent);
    return EmailValidatorComponent;
}());



/***/ }),

/***/ "./src/app/components/numbers-facts/numbers-facts.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/numbers-facts/numbers-facts.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVtYmVycy1mYWN0cy9udW1iZXJzLWZhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/numbers-facts/numbers-facts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/numbers-facts/numbers-facts.component.ts ***!
  \*********************************************************************/
/*! exports provided: NumbersFactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersFactsComponent", function() { return NumbersFactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_numbers_facts_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/numbers-facts-api.service */ "./src/app/services/numbers-facts-api.service.ts");




var NumbersFactsComponent = /** @class */ (function () {
    function NumbersFactsComponent(provider) {
        this.provider = provider;
        this.showLoader = false;
        this.showResult = false;
        this.factMode = '';
    }
    NumbersFactsComponent.prototype.ngOnInit = function () {
        this.numberField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.numberField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')
        ]);
        this.dayMonthFields = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    NumbersFactsComponent.prototype.setFactMode = function (mode) {
        this.showResult = false;
        this.factMode = mode;
        switch (mode) {
            case 'math':
                this.formTitle = 'Get a mathematical property about a number';
                this.placeholder = 'Enter a number';
                break;
            case 'trivia':
                this.formTitle = 'Get a trivia fact about a number';
                this.placeholder = 'Enter a number';
                break;
            case 'year':
                this.formTitle = 'Get a fact about a year';
                this.placeholder = 'Enter a year';
                break;
        }
    };
    NumbersFactsComponent.prototype.getRandomFact = function () {
        this.getFacts('random/trivia');
    };
    NumbersFactsComponent.prototype.submitDayMonthFields = function () {
        this.getFacts(this.dayMonthFields.value.month + '/' + this.dayMonthFields.value.day + '/' + this.factMode);
    };
    NumbersFactsComponent.prototype.submitNumberField = function () {
        this.getFacts(this.numberField.value + '/' + this.factMode);
    };
    NumbersFactsComponent.prototype.getFacts = function (factQuery) {
        var _this = this;
        this.showLoader = true;
        this.provider.getNumbersFacts(factQuery).subscribe(function (res) {
            _this.response = res;
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    NumbersFactsComponent.ctorParameters = function () { return [
        { type: _services_numbers_facts_api_service__WEBPACK_IMPORTED_MODULE_3__["NumbersFactsApiService"] }
    ]; };
    NumbersFactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-numbers-facts',
            template: __webpack_require__(/*! raw-loader!./numbers-facts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/numbers-facts/numbers-facts.component.html"),
            styles: [__webpack_require__(/*! ./numbers-facts.component.css */ "./src/app/components/numbers-facts/numbers-facts.component.css")]
        })
    ], NumbersFactsComponent);
    return NumbersFactsComponent;
}());



/***/ }),

/***/ "./src/app/components/search-post-offices/search-post-offices.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/search-post-offices/search-post-offices.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-container { padding: 1em; }\r\n.result-container div.col-lg-6 { border: 1px solid rgba(0,0,0,.125); border-radius: .25rem;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcG9zdC1vZmZpY2VzL3NlYXJjaC1wb3N0LW9mZmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0IsWUFBWSxFQUFFO0FBQ2xDLGlDQUFpQyxrQ0FBa0MsRUFBRSxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXBvc3Qtb2ZmaWNlcy9zZWFyY2gtcG9zdC1vZmZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0LWNvbnRhaW5lciB7IHBhZGRpbmc6IDFlbTsgfVxyXG4ucmVzdWx0LWNvbnRhaW5lciBkaXYuY29sLWxnLTYgeyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpOyBib3JkZXItcmFkaXVzOiAuMjVyZW07fSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search-post-offices/search-post-offices.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/search-post-offices/search-post-offices.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchPostOfficesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostOfficesComponent", function() { return SearchPostOfficesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pin_codes_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pin-codes-api.service */ "./src/app/services/pin-codes-api.service.ts");




var SearchPostOfficesComponent = /** @class */ (function () {
    function SearchPostOfficesComponent(provider) {
        this.provider = provider;
        this.showLoader = false;
        this.showResult = false;
        this.searchMode = '';
    }
    SearchPostOfficesComponent.prototype.ngOnInit = function () {
        this.pincodeField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.pincodeField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[1-9][0-9]{5}$')
        ]);
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            state_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.searchForm.patchValue({
            state_id: ''
        });
    };
    SearchPostOfficesComponent.prototype.setSearchMode = function (mode) {
        this.searchMode = mode;
    };
    SearchPostOfficesComponent.prototype.searchUsingPincode = function () {
        var _this = this;
        this.showLoader = true;
        var requestBody = {
            "searchBy": "pincode",
            "value": this.pincodeField.value
        };
        this.provider.searchPostOffices(requestBody).subscribe(function (res) {
            _this.response = res;
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    SearchPostOfficesComponent.prototype.searchUsingAddress = function () {
        var _this = this;
        this.showLoader = true;
        var requestBody = {
            "searchBy": "address",
            "state_id": this.searchForm.value.state_id,
            "value": this.searchForm.value.address
        };
        this.provider.searchPostOffices(requestBody).subscribe(function (res) {
            _this.response = res;
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    SearchPostOfficesComponent.ctorParameters = function () { return [
        { type: _services_pin_codes_api_service__WEBPACK_IMPORTED_MODULE_3__["PinCodesApiService"] }
    ]; };
    SearchPostOfficesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-post-offices',
            template: __webpack_require__(/*! raw-loader!./search-post-offices.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-post-offices/search-post-offices.component.html"),
            styles: [__webpack_require__(/*! ./search-post-offices.component.css */ "./src/app/components/search-post-offices/search-post-offices.component.css")]
        })
    ], SearchPostOfficesComponent);
    return SearchPostOfficesComponent;
}());



/***/ }),

/***/ "./src/app/components/search-railways-stations/search-railways-stations.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/search-railways-stations/search-railways-stations.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJhaWx3YXlzLXN0YXRpb25zL3NlYXJjaC1yYWlsd2F5cy1zdGF0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search-railways-stations/search-railways-stations.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/search-railways-stations/search-railways-stations.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchRailwaysStationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRailwaysStationsComponent", function() { return SearchRailwaysStationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_search_stations_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search-stations-api.service */ "./src/app/services/search-stations-api.service.ts");




var SearchRailwaysStationsComponent = /** @class */ (function () {
    function SearchRailwaysStationsComponent(provider) {
        this.provider = provider;
        this.showLoader = false;
        this.showResult = false;
    }
    SearchRailwaysStationsComponent.prototype.ngOnInit = function () {
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.searchField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
        ]);
        this.pnrStatusField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.pnrStatusField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
        ]);
    };
    SearchRailwaysStationsComponent.prototype.setSearchMode = function (mode) {
        this.searchMode = mode;
    };
    SearchRailwaysStationsComponent.prototype.searchStations = function () {
        var _this = this;
        this.showLoader = true;
        this.provider.searchRailwaysStations(this.searchField.value).subscribe(function (res) {
            _this.response = res.stations;
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    SearchRailwaysStationsComponent.prototype.checkStatus = function () {
        var _this = this;
        this.showLoader = true;
        this.provider.pnrStatusCheck(this.pnrStatusField.value).subscribe(function (res) {
            _this.response = res;
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    SearchRailwaysStationsComponent.ctorParameters = function () { return [
        { type: _services_search_stations_api_service__WEBPACK_IMPORTED_MODULE_3__["SearchStationsApiService"] }
    ]; };
    SearchRailwaysStationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-railways-stations',
            template: __webpack_require__(/*! raw-loader!./search-railways-stations.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-railways-stations/search-railways-stations.component.html"),
            styles: [__webpack_require__(/*! ./search-railways-stations.component.css */ "./src/app/components/search-railways-stations/search-railways-stations.component.css")]
        })
    ], SearchRailwaysStationsComponent);
    return SearchRailwaysStationsComponent;
}());



/***/ }),

/***/ "./src/app/components/url-shortener/url-shortener.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/url-shortener/url-shortener.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redirect-link:before { content:url('external-link.png');margin-left: 15px; }\r\n.clipboard:before { content:url('copy.png');margin-left: 15px; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cmwtc2hvcnRlbmVyL3VybC1zaG9ydGVuZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0IsZ0NBQXNELENBQUMsaUJBQWlCLEVBQUU7QUFDbEcsb0JBQW9CLHVCQUE2QyxDQUFDLGlCQUFpQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cmwtc2hvcnRlbmVyL3VybC1zaG9ydGVuZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRpcmVjdC1saW5rOmJlZm9yZSB7IGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvZXh0ZXJuYWwtbGluay5wbmcnKTttYXJnaW4tbGVmdDogMTVweDsgfVxyXG4uY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvY29weS5wbmcnKTttYXJnaW4tbGVmdDogMTVweDsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/url-shortener/url-shortener.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/url-shortener/url-shortener.component.ts ***!
  \*********************************************************************/
/*! exports provided: UrlShortenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlShortenerComponent", function() { return UrlShortenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_url_shortener_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/url-shortener-api.service */ "./src/app/services/url-shortener-api.service.ts");




var UrlShortenerComponent = /** @class */ (function () {
    function UrlShortenerComponent(provider) {
        this.provider = provider;
        this.showLoader = false;
        this.showResult = false;
        this.urlField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.urlField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
    }
    UrlShortenerComponent.prototype.ngOnInit = function () {
    };
    UrlShortenerComponent.prototype.submitUrl = function () {
        var _this = this;
        var body = {
            "url": this.urlField.value
        };
        this.showLoader = true;
        this.showResult = false;
        this.provider.getShortenUrl(body).subscribe(function (res) {
            _this.response = res;
            _this.showResult = true;
            _this.showLoader = false;
        });
    };
    UrlShortenerComponent.prototype.copyMessage = function () {
        var textarea = null;
        textarea = document.createElement("textarea");
        textarea.style.height = "0px";
        textarea.style.left = "-100px";
        textarea.style.opacity = "0";
        textarea.style.position = "fixed";
        textarea.style.top = "-100px";
        textarea.style.width = "0px";
        document.body.appendChild(textarea);
        // Set and select the value (creating an active Selection range).
        textarea.value = this.response.result_url;
        textarea.select();
        // Ask the browser to copy the current selection to the clipboard.
        var successful = document.execCommand("copy");
        if (successful) {
            alert("Copied");
        }
        else {
            alert("Unable to copy in clipboard!");
        }
        if (textarea && textarea.parentNode) {
            textarea.parentNode.removeChild(textarea);
        }
    };
    UrlShortenerComponent.ctorParameters = function () { return [
        { type: _services_url_shortener_api_service__WEBPACK_IMPORTED_MODULE_3__["UrlShortenerApiService"] }
    ]; };
    UrlShortenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-url-shortener',
            template: __webpack_require__(/*! raw-loader!./url-shortener.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/url-shortener/url-shortener.component.html"),
            styles: [__webpack_require__(/*! ./url-shortener.component.css */ "./src/app/components/url-shortener/url-shortener.component.css")]
        })
    ], UrlShortenerComponent);
    return UrlShortenerComponent;
}());



/***/ }),

/***/ "./src/app/components/weather-widget/weather-widget.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/weather-widget/weather-widget.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear { clear:both; }\r\n.card { padding:1em; }\r\n.custom-card { width: 20%;}\r\n.temparature-summary {display: flex;}\r\n.temparature-summary div { width: 50%;}\r\n.city { font-family: Roboto;font-weight: 300;font-size: 1.8em;color:#5b5b5b;margin-bottom:10px; }\r\n.weather-icon { width:5em;height:5em;margin-top: 1em; }\r\n.inline-col { display: inline-grid;position: relative;padding: 0px;width: 100%; }\r\n.temp { text-align: right;font-family: Roboto;font-weight: 300;font-size: 7.5em;margin-top: -1em;color: #5b5b5b;margin-left: 0.75em; }\r\n.unit { font-size: 20px;font-weight: 500;position: absolute; }\r\n.custom-card .weather-icon {position: relative;display: flex;}\r\n.custom-card .temp {font-size: 3em;margin-top: 0em;margin-left: 0em;position: relative;}\r\n.speed:before { content:url('icons8-wind-30.png'); }\r\n.max-temp:before { content:url('icons8-thermometer-up-30.png'); }\r\n.min-temp:before { content:url('icons8-thermometer-down-30.png'); }\r\n.direction:before { content:url('icons8-direction-30.png'); }\r\n.clouds:before { content:url('icons8-clouds-30.png'); }\r\n.pressure:before { content:url('icons8-atmospheric-pressure-30.png'); }\r\n.humidity:before { content:url('icons8-hygrometer-30.png'); }\r\n.sunrise:before { content:url('icons8-sunrise-30.png'); }\r\n.sunset:before { content:url('icons8-sunset-30.png'); }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC93ZWF0aGVyLXdpZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsVUFBVSxFQUFFO0FBQ3JCLFFBQVEsV0FBVyxFQUFFO0FBQ3JCLGVBQWUsVUFBVSxDQUFDO0FBQzFCLHNCQUFzQixhQUFhLENBQUM7QUFDcEMsMkJBQTJCLFVBQVUsQ0FBQztBQUN0QyxRQUFRLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRTtBQUNoRyxnQkFBZ0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUU7QUFDdEQsY0FBYyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO0FBQ2hGLFFBQVEsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFO0FBQ3JJLFFBQVEsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0FBQzdELDRCQUE0QixrQkFBa0IsQ0FBQyxhQUFhLENBQUM7QUFDN0Qsb0JBQW9CLGNBQWMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7QUFDdkYsZ0JBQWdCLGlDQUF1RCxFQUFFO0FBQ3pFLG1CQUFtQiwyQ0FBaUUsRUFBRTtBQUN0RixtQkFBbUIsNkNBQW1FLEVBQUU7QUFDeEYsb0JBQW9CLHNDQUE0RCxFQUFFO0FBQ2xGLGlCQUFpQixtQ0FBeUQsRUFBRTtBQUM1RSxtQkFBbUIsaURBQXVFLEVBQUU7QUFDNUYsbUJBQW1CLHVDQUE2RCxFQUFFO0FBQ2xGLGtCQUFrQixvQ0FBMEQsRUFBRTtBQUM5RSxpQkFBaUIsbUNBQXlELEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXItd2lkZ2V0L3dlYXRoZXItd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXIgeyBjbGVhcjpib3RoOyB9XHJcbi5jYXJkIHsgcGFkZGluZzoxZW07IH1cclxuLmN1c3RvbS1jYXJkIHsgd2lkdGg6IDIwJTt9XHJcbi50ZW1wYXJhdHVyZS1zdW1tYXJ5IHtkaXNwbGF5OiBmbGV4O31cclxuLnRlbXBhcmF0dXJlLXN1bW1hcnkgZGl2IHsgd2lkdGg6IDUwJTt9XHJcbi5jaXR5IHsgZm9udC1mYW1pbHk6IFJvYm90bztmb250LXdlaWdodDogMzAwO2ZvbnQtc2l6ZTogMS44ZW07Y29sb3I6IzViNWI1YjttYXJnaW4tYm90dG9tOjEwcHg7IH1cclxuLndlYXRoZXItaWNvbiB7IHdpZHRoOjVlbTtoZWlnaHQ6NWVtO21hcmdpbi10b3A6IDFlbTsgfVxyXG4uaW5saW5lLWNvbCB7IGRpc3BsYXk6IGlubGluZS1ncmlkO3Bvc2l0aW9uOiByZWxhdGl2ZTtwYWRkaW5nOiAwcHg7d2lkdGg6IDEwMCU7IH1cclxuLnRlbXAgeyB0ZXh0LWFsaWduOiByaWdodDtmb250LWZhbWlseTogUm9ib3RvO2ZvbnQtd2VpZ2h0OiAzMDA7Zm9udC1zaXplOiA3LjVlbTttYXJnaW4tdG9wOiAtMWVtO2NvbG9yOiAjNWI1YjViO21hcmdpbi1sZWZ0OiAwLjc1ZW07IH1cclxuLnVuaXQgeyBmb250LXNpemU6IDIwcHg7Zm9udC13ZWlnaHQ6IDUwMDtwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuLmN1c3RvbS1jYXJkIC53ZWF0aGVyLWljb24ge3Bvc2l0aW9uOiByZWxhdGl2ZTtkaXNwbGF5OiBmbGV4O31cclxuLmN1c3RvbS1jYXJkIC50ZW1wIHtmb250LXNpemU6IDNlbTttYXJnaW4tdG9wOiAwZW07bWFyZ2luLWxlZnQ6IDBlbTtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uc3BlZWQ6YmVmb3JlIHsgY29udGVudDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtd2luZC0zMC5wbmcnKTsgfVxyXG4ubWF4LXRlbXA6YmVmb3JlIHsgY29udGVudDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtdGhlcm1vbWV0ZXItdXAtMzAucG5nJyk7IH1cclxuLm1pbi10ZW1wOmJlZm9yZSB7IGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LXRoZXJtb21ldGVyLWRvd24tMzAucG5nJyk7IH1cclxuLmRpcmVjdGlvbjpiZWZvcmUgeyBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC1kaXJlY3Rpb24tMzAucG5nJyk7IH1cclxuLmNsb3VkczpiZWZvcmUgeyBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC1jbG91ZHMtMzAucG5nJyk7IH1cclxuLnByZXNzdXJlOmJlZm9yZSB7IGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LWF0bW9zcGhlcmljLXByZXNzdXJlLTMwLnBuZycpOyB9XHJcbi5odW1pZGl0eTpiZWZvcmUgeyBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC1oeWdyb21ldGVyLTMwLnBuZycpOyB9XHJcbi5zdW5yaXNlOmJlZm9yZSB7IGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LXN1bnJpc2UtMzAucG5nJyk7IH1cclxuLnN1bnNldDpiZWZvcmUgeyBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC1zdW5zZXQtMzAucG5nJyk7IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/weather-widget/weather-widget.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/weather-widget/weather-widget.component.ts ***!
  \***********************************************************************/
/*! exports provided: WeatherWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetComponent", function() { return WeatherWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_weather_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather-api.service */ "./src/app/services/weather-api.service.ts");




var WeatherWidgetComponent = /** @class */ (function () {
    function WeatherWidgetComponent(dataProvider) {
        this.dataProvider = dataProvider;
        this.currentTimestmp = Math.floor(Date.now() / 1000);
        this.tomorrow = new Date(this.currentTimestmp * 1000).getDate() + 1;
        this.icons_baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openweather_api.icons_url;
        this.icons_sufix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openweather_api.icons_suffix;
    }
    WeatherWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.getCurrentWeatherData();
                _this.get5daysForecastData();
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
        setInterval(function () {
            _this.getCurrentWeatherData();
        }, 300000);
    };
    WeatherWidgetComponent.prototype.getCurrentWeatherData = function () {
        var _this = this;
        this.dataProvider.currentWeatherAPI(this.latitude, this.longitude).subscribe(function (res) {
            _this.response = res;
        });
    };
    WeatherWidgetComponent.prototype.get5daysForecastData = function () {
        var _this = this;
        var index = 0, arrayIndex = [];
        this.dataProvider.weatherForcastAPI(this.latitude, this.longitude).subscribe(function (res) {
            _this.forecast = res.list;
            res.list.forEach(function (element) {
                var checkDay = new Date(element.dt * 1000).getDate();
                if (checkDay >= _this.tomorrow) {
                    _this.tomorrow = checkDay + 1;
                }
                else {
                    arrayIndex.push(index);
                }
                index = index + 1;
            });
            for (var i = arrayIndex.length - 1; i >= 0; i--) {
                _this.forecast.splice(arrayIndex[i], 1);
            }
        });
    };
    WeatherWidgetComponent.ctorParameters = function () { return [
        { type: _services_weather_api_service__WEBPACK_IMPORTED_MODULE_3__["WeatherApiService"] }
    ]; };
    WeatherWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-widget',
            template: __webpack_require__(/*! raw-loader!./weather-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/weather-widget/weather-widget.component.html"),
            styles: [__webpack_require__(/*! ./weather-widget.component.css */ "./src/app/components/weather-widget/weather-widget.component.css")]
        })
    ], WeatherWidgetComponent);
    return WeatherWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/wiki-synonym/wiki-synonym.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/wiki-synonym/wiki-synonym.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lraS1zeW5vbnltL3dpa2ktc3lub255bS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/wiki-synonym/wiki-synonym.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/wiki-synonym/wiki-synonym.component.ts ***!
  \*******************************************************************/
/*! exports provided: WikiSynonymComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiSynonymComponent", function() { return WikiSynonymComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_wiki_synonym_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wiki-synonym-api.service */ "./src/app/services/wiki-synonym-api.service.ts");




var WikiSynonymComponent = /** @class */ (function () {
    function WikiSynonymComponent(provider) {
        this.provider = provider;
        this.showLoader = false;
        this.showResult = false;
        this.termField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.termField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
    }
    WikiSynonymComponent.prototype.ngOnInit = function () {
    };
    WikiSynonymComponent.prototype.submitTerm = function () {
        var _this = this;
        this.showLoader = true;
        this.showResult = false;
        this.provider.getWikiSynonym(this.termField.value).subscribe(function (res) {
            _this.response = res;
            _this.showLoader = false;
            _this.showResult = true;
        });
    };
    WikiSynonymComponent.ctorParameters = function () { return [
        { type: _services_wiki_synonym_api_service__WEBPACK_IMPORTED_MODULE_3__["WikiSynonymApiService"] }
    ]; };
    WikiSynonymComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wiki-synonym',
            template: __webpack_require__(/*! raw-loader!./wiki-synonym.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/wiki-synonym/wiki-synonym.component.html"),
            styles: [__webpack_require__(/*! ./wiki-synonym.component.css */ "./src/app/components/wiki-synonym/wiki-synonym.component.css")]
        })
    ], WikiSynonymComponent);
    return WikiSynonymComponent;
}());



/***/ }),

/***/ "./src/app/components/words/words.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/words/words.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputGroup {\r\n  background-color: #fff;\r\n  display: block;\r\n  margin: 10px 0;\r\n  position: relative;\r\n}\r\n.inputGroup label {\r\n  padding: 12px 30px;\r\n  width: 100%;\r\n  display: block;\r\n  text-align: left;\r\n  color: #3c454c;\r\n  cursor: pointer;\r\n  position: relative;\r\n  z-index: 2;\r\n  transition: color 200ms ease-in;\r\n  overflow: hidden;\r\n}\r\n.inputGroup label:before {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  content: '';\r\n  background-color: #5562eb;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);\r\n          transform: translate(-50%, -50%) scale3d(1, 1, 1);\r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  opacity: 0;\r\n  z-index: -1;\r\n}\r\n.inputGroup label:after {\r\n  width: 32px;\r\n  height: 32px;\r\n  content: '';\r\n  border: 2px solid #d1d7dc;\r\n  background-color: #fff;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E \");\r\n  background-repeat: no-repeat;\r\n  background-position: 2px 3px;\r\n  border-radius: 50%;\r\n  z-index: 2;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  cursor: pointer;\r\n  transition: all 200ms ease-in;\r\n}\r\n.inputGroup input:checked ~ label {\r\n  color: #fff;\r\n}\r\n.inputGroup input:checked ~ label:before {\r\n  -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);\r\n          transform: translate(-50%, -50%) scale3d(56, 56, 1);\r\n  opacity: 1;\r\n}\r\n.inputGroup input:checked ~ label:after {\r\n  background-color: #54e0c7;\r\n  border-color: #54e0c7;\r\n}\r\n.inputGroup input {\r\n  width: 32px;\r\n  height: 32px;\r\n  order: 1;\r\n  z-index: 2;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n}\r\n.form {\r\n  padding: 0 16px;\r\n  max-width: 550px;\r\n  margin: 50px auto;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  line-height: 36px;\r\n}\r\nbody {\r\n  background-color: #d1d7dc;\r\n  font-family: 'Fira Sans', sans-serif;\r\n}\r\n*, *::before, *::after {\r\n  box-sizing: inherit;\r\n}\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\ncode {\r\n  background-color: #9aa3ac;\r\n  padding: 0 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jkcy93b3Jkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IseURBQWlEO1VBQWpELGlEQUFpRDtFQUNqRCxrREFBa0Q7RUFDbEQsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw0UEFBNFA7RUFDNVAsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwyREFBbUQ7VUFBbkQsbURBQW1EO0VBQ25ELFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yZHMvd29yZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dEdyb3VwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5wdXRHcm91cCBsYWJlbCB7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMzYzQ1NGM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW5wdXRHcm91cCBsYWJlbDpiZWZvcmUge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjJlYjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uaW5wdXRHcm91cCBsYWJlbDphZnRlciB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMWQ3ZGM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSczMicgaGVpZ2h0PSczMicgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNNS40MTQgMTFMNCAxMi40MTRsNS40MTQgNS40MTRMMjAuODI4IDYuNDE0IDE5LjQxNCA1bC0xMCAxMHonIGZpbGw9JyUyM2ZmZicgZmlsbC1ydWxlPSdub256ZXJvJy8lM0UlM0Mvc3ZnJTNFIFwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDJweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbn1cclxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NGUwYzc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTRlMGM3O1xyXG59XHJcbi5pbnB1dEdyb3VwIGlucHV0IHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgb3JkZXI6IDE7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmZvcm0ge1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ3ZGM7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuaHRtbCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5jb2RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFhM2FjO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/words/words.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/words/words.component.ts ***!
  \*****************************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_words_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/words-api.service */ "./src/app/services/words-api.service.ts");




var WordsComponent = /** @class */ (function () {
    function WordsComponent(serviceProvider) {
        this.serviceProvider = serviceProvider;
        this.showLoader = false;
    }
    WordsComponent.prototype.ngOnInit = function () {
        this.wordField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.wordField, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
        ]);
    };
    WordsComponent.prototype.searchWordsAPI = function () {
        var _this = this;
        this.showLoader = true;
        this.serviceProvider.relatedWordApi(this.wordField.value, this.relatedWord).subscribe(function (res) {
            _this.response = res;
            _this.showLoader = false;
        });
    };
    WordsComponent.prototype.searchMode = function (mode) {
        this.relatedWord = mode;
    };
    WordsComponent.ctorParameters = function () { return [
        { type: _services_words_api_service__WEBPACK_IMPORTED_MODULE_3__["WordsApiService"] }
    ]; };
    WordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-words',
            template: __webpack_require__(/*! raw-loader!./words.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/words/words.component.html"),
            styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/components/words/words.component.css")]
        })
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/app/services/email-validation-api.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/email-validation-api.service.ts ***!
  \**********************************************************/
/*! exports provided: EmailValidationApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidationApiService", function() { return EmailValidationApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var EmailValidationApiService = /** @class */ (function () {
    function EmailValidationApiService(http) {
        this.http = http;
        this.emailEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.email.endpoint;
    }
    EmailValidationApiService.prototype.validateEmail = function (email) {
        return this.http.get(this.emailEndpoint + encodeURIComponent(email), {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.email.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.key
            }
        });
    };
    EmailValidationApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmailValidationApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EmailValidationApiService);
    return EmailValidationApiService;
}());



/***/ }),

/***/ "./src/app/services/numbers-facts-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/numbers-facts-api.service.ts ***!
  \*******************************************************/
/*! exports provided: NumbersFactsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersFactsApiService", function() { return NumbersFactsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var NumbersFactsApiService = /** @class */ (function () {
    function NumbersFactsApiService(http) {
        this.http = http;
        this.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.numbers.endpoint;
    }
    NumbersFactsApiService.prototype.getNumbersFacts = function (factQuery) {
        return this.http.get(this.apiEndpoint + factQuery + '?max=20&fragment=true&min=10&json=true', {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.numbers.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.key
            }
        });
    };
    NumbersFactsApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NumbersFactsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NumbersFactsApiService);
    return NumbersFactsApiService;
}());



/***/ }),

/***/ "./src/app/services/pin-codes-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/pin-codes-api.service.ts ***!
  \***************************************************/
/*! exports provided: PinCodesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinCodesApiService", function() { return PinCodesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PinCodesApiService = /** @class */ (function () {
    function PinCodesApiService(http) {
        this.http = http;
        this.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.post_office.endpoint;
    }
    PinCodesApiService.prototype.searchPostOffices = function (body) {
        return this.http.post(this.apiEndpoint, body, {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.post_office.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.key
            }
        });
    };
    PinCodesApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PinCodesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PinCodesApiService);
    return PinCodesApiService;
}());



/***/ }),

/***/ "./src/app/services/search-stations-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/search-stations-api.service.ts ***!
  \*********************************************************/
/*! exports provided: SearchStationsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStationsApiService", function() { return SearchStationsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var SearchStationsApiService = /** @class */ (function () {
    function SearchStationsApiService(http) {
        this.http = http;
        this.apiPNREndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.indian_railways.endpoint + "index.php?pnr=";
        this.apiFindStationEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.indian_railways.endpoint + "findstations.php?station=";
    }
    SearchStationsApiService.prototype.searchRailwaysStations = function (station) {
        return this.http.get(this.apiFindStationEndpoint + encodeURIComponent(station), {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.indian_railways.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.key
            }
        });
    };
    SearchStationsApiService.prototype.pnrStatusCheck = function (pnr) {
        return this.http.get(this.apiPNREndpoint + encodeURIComponent(pnr), {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.indian_railways.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.key
            }
        });
    };
    SearchStationsApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SearchStationsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SearchStationsApiService);
    return SearchStationsApiService;
}());



/***/ }),

/***/ "./src/app/services/url-shortener-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/url-shortener-api.service.ts ***!
  \*******************************************************/
/*! exports provided: UrlShortenerApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlShortenerApiService", function() { return UrlShortenerApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UrlShortenerApiService = /** @class */ (function () {
    function UrlShortenerApiService(http) {
        this.http = http;
        this.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.url_shortener.endpoint;
    }
    UrlShortenerApiService.prototype.getShortenUrl = function (body) {
        return this.http.post(this.apiEndpoint, body, {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.url_shortener.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapid_api.key
            }
        });
    };
    UrlShortenerApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UrlShortenerApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UrlShortenerApiService);
    return UrlShortenerApiService;
}());



/***/ }),

/***/ "./src/app/services/weather-api.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/weather-api.service.ts ***!
  \*************************************************/
/*! exports provided: WeatherApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApiService", function() { return WeatherApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WeatherApiService = /** @class */ (function () {
    function WeatherApiService(http) {
        this.http = http;
        this.currentConditionEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].openweather_api.current_condition;
        this.forecastConditionEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].openweather_api.forecast_5days;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].openweather_api.key;
    }
    WeatherApiService.prototype.currentWeatherAPI = function (lat, lon) {
        return this.http.get(this.currentConditionEndpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey);
    };
    WeatherApiService.prototype.weatherForcastAPI = function (lat, lon) {
        return this.http.get(this.forecastConditionEndpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey);
    };
    WeatherApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WeatherApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WeatherApiService);
    return WeatherApiService;
}());



/***/ }),

/***/ "./src/app/services/wiki-synonym-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/wiki-synonym-api.service.ts ***!
  \******************************************************/
/*! exports provided: WikiSynonymApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiSynonymApiService", function() { return WikiSynonymApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var WikiSynonymApiService = /** @class */ (function () {
    function WikiSynonymApiService(http) {
        this.http = http;
        this.wikiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].rapid_api.wiki.endpoint;
    }
    WikiSynonymApiService.prototype.getWikiSynonym = function (term) {
        return this.http.get(this.wikiEndpoint + encodeURIComponent(term), {
            "headers": {
                "x-rapidapi-host": _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].rapid_api.wiki.host,
                "x-rapidapi-key": _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].rapid_api.key
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWikiSynonym', [])));
    };
    WikiSynonymApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error.error);
        };
    };
    WikiSynonymApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    WikiSynonymApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WikiSynonymApiService);
    return WikiSynonymApiService;
}());



/***/ }),

/***/ "./src/app/services/words-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/words-api.service.ts ***!
  \***********************************************/
/*! exports provided: WordsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsApiService", function() { return WordsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WordsApiService = /** @class */ (function () {
    function WordsApiService(http) {
        this.http = http;
        this.wordApiEndpoint = 'https://wordsapiv1.p.rapidapi.com/words/';
    }
    WordsApiService.prototype.relatedWordApi = function (word, mode) {
        return this.http.get(this.wordApiEndpoint + encodeURIComponent(word) + "/" + encodeURIComponent(mode), {
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "81c29f4051msh1004bb8307e4948p17f135jsn8ffa2e7c4bb0"
            }
        });
    };
    WordsApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WordsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WordsApiService);
    return WordsApiService;
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
    rapid_api: {
        key: "81c29f4051msh1004bb8307e4948p17f135jsn8ffa2e7c4bb0",
        email: {
            host: "pozzad-email-validator.p.rapidapi.com",
            endpoint: "https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/"
        },
        post_office: {
            host: "pincode.p.rapidapi.com",
            endpoint: "https://pincode.p.rapidapi.com/"
        },
        indian_railways: {
            host: "indianrailways.p.rapidapi.com",
            endpoint: "https://indianrailways.p.rapidapi.com/"
        },
        numbers: {
            host: "numbersapi.p.rapidapi.com",
            endpoint: "https://numbersapi.p.rapidapi.com/"
        },
        wiki: {
            host: "wikisynonyms.p.rapidapi.com",
            endpoint: "https://wikisynonyms.p.rapidapi.com/"
        },
        url_shortener: {
            host: "url-shortener-service.p.rapidapi.com",
            endpoint: "https://url-shortener-service.p.rapidapi.com/shorten"
        }
    },
    openweather_api: {
        key: "ac4bf024b73edcba91d2143dc028cb09",
        current_condition: "https://api.openweathermap.org/data/2.5/weather",
        forecast_5days: "https://api.openweathermap.org/data/2.5/forecast",
        icons_url: "https://openweathermap.org/img/wn/",
        icons_suffix: "@2x.png"
    }
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

module.exports = __webpack_require__(/*! C:\Users\tonmoym\Documents\myApp\POC-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map