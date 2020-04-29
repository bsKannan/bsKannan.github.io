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

module.exports = " \n<!-- <button type=\"button\" (click)=\"generatePdf()\">\n  open pdf\n</button> -->\n\n<nav class=\"navbar navbar-brand navbar-light by-primary d-flex justify-content-between\">\n  <div class=\"navbar-brand mb-0 h1 text-whilte\">\n    ONLINE RESUME BUILDER\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form #resumeForm=\"ngForm\" (ngSubmit)=\"resumeForm.valid\" novalidate> \n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\">\n                account_circle\n              </i>\n              Personal Details\n            </h4>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.name\" name=\"txtName\" placeholder=\"Your Name\"\n                  #txtName=\"ngModel\" required>\n                  <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (txtName, resumeForm)\">\n                    <span *ngIf=\"txtName.errors['required']\">\n                      Name is required.\n                    </span>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control\" [(ngModel)]=\"resume.address\" name=\"txtAddress\" rows=\"3\"\n                    #txtAddress=\"ngModel\" placeholder=\"Address\" required></textarea>\n                   </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"txtPhone\" [(ngModel)]=\"resume.contactNo\" \n                  placeholder=\"Contact No.\" #txtPhone=ngModel pattern=\"[0-9]{10}\" required>\n                   <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (txtPhone, resumeForm)\">\n                    <span *ngIf=\"txtPhone.hasError('required')\">\n                      Contact No. is required.\n                    </span>\n                    <span *ngIf=\"txtPhone.hasError('pattern')\">\n                      Contact No. should be in 10 digits.\n                    </span>\n                  </div>\n                </div>\n                <div class=\"form-group\" >\n                  <input type=\"text\" class=\"form-control\" name=\"txtEmail\" [(ngModel)]=\"resume.email\"\n                  placeholder=\"Email id\" #txtEmail=ngModel required>\n                  <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (txtEmail, resumeForm)\">\n                    <span *ngIf=\"txtEmail.errors['required']\">\n                      Email is required.\n                    </span>\n                  </div>\n                </div> \n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"txtSprofile\" [(ngModel)]=\"resume.socialProfile\"\n                  placeholder=\"Social Profile\" #txtSprofile=ngModel required>\n                  <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (txtSprofile, resumeForm)\">\n                    <span *ngIf=\"txtSprofile.errors['required']\">\n                      Social Profile is required.\n                    </span>\n                  </div>\n                </div> \n              </div>\n          </div>\n        </div>\n      </div>\n<!-- Skills -->\n      <div class=\"shadow-sm card\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between card-title\">\n            <h4 class=\"d-flex align-items-center\">\n              <i class=\"material-icons\">\n                timeline\n              </i>\n              Skills\n            </h4>\n            <button class=\"btn btn-primary\" (click)=\"addSkill()\">+</button>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\" *ngFor=\"let s of resume.skills;let i=index\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"skill{{i}}\" [(ngModel)]=\"s.value\"\n                placeholder=\"e.g. Java / Angular / .Net \" #Skil=\"ngModel\" required\n                >\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (Skil, resumeForm)\">\n                  <span *ngIf=\"Skil.errors['required']\">\n                    Skil required.\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Experience -->\n      <div class=\"shadow-sm card\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between card-title\">\n            <h4 class=\"d-flex align-items-center\">\n              <i class=\"material-icons\">\n                timeline\n              </i>\n              Experience\n            </h4>\n            <button class=\"btn btn-primary\" (click)=\"addExperience()\">+</button>\n          </div>\n          <div class=\"row\" *ngFor=\"let ex of resume.experiences;let i=index\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"employer{{i}}\"\n                [(ngModel)]=\"ex.employer\"\n                placeholder=\"Employer\" #Employer=\"ngModel\" required>\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (Employer, resumeForm)\">\n                  <span *ngIf=\"Employer.errors['required']\">\n                    Employer required.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" name=\"jobDescription{{i}}\" [(ngModel)]=\"ex.jobDescription\" rows=\"3\"\n                      placeholder=\"Job Description\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"jobTitle{{i}}\"\n                [(ngModel)]=\"ex.jobTitle\"\n                placeholder=\"Job Title\" #JobTitle=\"ngModel\" required >\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (JobTitle, resumeForm)\">\n                  <span *ngIf=\"JobTitle.errors['required']\">\n                    Job Title is required.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"number\" class=\"form-control\" name=\"exInMonths{{i}}\" \n                [(ngModel)]=\"ex.experience\" \n                placeholder=\"Experience in months\" #Experience=\"ngModel\" required>\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (Experience, resumeForm)\">\n                  <span *ngIf=\"Experience.errors['required']\">\n                    Experience is required.\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!--Education  -->\n      <div class=\"shadow-sm card\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between card-title\">\n            <h4 class=\"d-flex align-items-center\">\n              <i class=\"material-icons\">\n                school\n              </i>\n              Education\n            </h4>\n            <button class=\"btn btn-primary\" (click)=\"addEducation()\">\n              +\n            </button>\n          </div>\n          <div class=\"row\" *ngFor=\"let ed of resume.educations;let i=index\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <select class=\"form-control\" placeholder=\"Degree\" name=\"degree{{i}}\"\n                [(ngModel)]=\"ed.degree\" #Degree=\"ngModel\" required>\n                <option [value]=\"d\" *ngFor=\"let d of degrees\">{{d}}</option>\n              </select>\n              <div *ngIf=\"resumeForm.submitted && Degree.errors\" class=\"text-error\">\n                <div *ngIf=\"Degree.hasError('required')\">\n                    Degree is required.\n                </div>\n            </div> \n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"college{{i}}\"\n                [(ngModel)]=\"ed.college\" placeholder=\"School/College\" \n                #College=\"ngModel\" required>\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (College, resumeForm)\">\n                  <span *ngIf=\"College.errors['required']\">\n                    College is required.\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <input type=\"number\" class=\"form-control\" name=\"passingYear{{i}}\"\n                [(ngModel)]=\"ed.passingYear\"\n                placeholder=\"Passing Year\" #PassingYear=\"ngModel\" required>\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (PassingYear, resumeForm)\">\n                  <span *ngIf=\"PassingYear.errors['required']\">\n                    Passing Year is required.\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <input type=\"number\" class=\"form-control\" name=\"result{{i}}\"\n                [(ngModel)]=\"ed.percentage\" placeholder=\"Percentage\" #Percentage=\"ngModel\" required>\n                <div class=\"text-danger\" *ngIf=\"lib.isCtrlValid (Percentage, resumeForm)\">\n                  <span *ngIf=\"Percentage.errors['required']\">\n                    Percentage is required.\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Other Details -->\n\n      <div class=\"shadow-sm card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title d-flex align-items-center\">\n            <i class=\"material-icons\"> list </i>\n            Other Details\n          </h4>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.otherDetails\"\n                name=\"otherDetails\" rows=\"4\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"shadow-sm card action-buttons\">\n        <button (click)=\"generatePdf('open')\"\n        class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n        <i class=\"material-icons\">\n          picture_as_pdf\n        </i><span>Open PDF</span>\n      </button>\n      <button (click)=\"generatePdf('download')\"\n      class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n          <i class=\"material-icons\">\n            cloud_download\n          </i><span>Download PDF</span>\n      </button>\n      <button (click)=\"generatePdf('print')\"\n      class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n      <i class=\"material-icons\">\n        print\n      </i><span>Print PDF</span>\n      </button>\n\n      <button type=\"reset\" (click)=\"resetForm()\"\n      class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n        <i class=\"material-icons\">\n          clear\n        </i><span>Reset</span>\n      </button>\n      </div>\n\n      <div class=\"card p-4\">\n        <div class=\"form-group\">\n          <label class=\"h4 mb-3\" for=\"\">Show your picture in Resume</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"fileChanged($event)\"\n            aria-describedby=\"fileHelpId\">\n        </div>\n        <img *ngIf=\"resume.profilePic\" [src]=\"resume.profilePic\" class=\"img-thumbnail\">\n      </div>\n    </div>\n    </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding: 10px;\n}\n\n.card {\n  margin: 10px;\n}\n\n.material-icons {\n  font-size: 30px;\n}\n\nbutton span {\n  font-size: 22px;\n}\n\n.action-buttons button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSDpcXG5ld3RyeVxcb25saW5lLXJlc3VtZS1idWlsZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucyBidXR0b257XHJcbiAgICBtYXJnaW46IDVweDtcclxufSIsIi5yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5idXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmFjdGlvbi1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"

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
/* harmony import */ var pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/pdfMake */ "./node_modules/pdfmake/build/pdfMake.js");
/* harmony import */ var pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume */ "./src/app/resume.ts");
/* harmony import */ var _resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume.service */ "./src/app/resume.service.ts");




pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default.a.pdfMake.vfs;


var AppComponent = /** @class */ (function () {
    function AppComponent(lib) {
        this.lib = lib;
        // generatePdf(){
        //   // console.log("hai");   https://www.ngdevelop.tech/angular-8-export-to-pdf-using-pdfmake/
        //   const documentDefinition  = {content :'This is pdf online builder' };
        //   // pdfMake.createPdf(documentDefinition).open();// Open for pdf
        //   // pdfMake.createPdf(documentDefinition).download();// Download for pdf
        //   pdfMake.createPdf(documentDefinition).open({},window); // Open pdf in same window
        //   pdfMake.createPdf(documentDefinition).print(); // Print pdf and download
        // }
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_4__["Resume"]();
        this.degrees = ['S.S.L.C', 'H.S.C', 'B.E.', 'M.E.', 'B.Com', 'M.Com'];
        this.resume = JSON.parse(sessionStorage.getItem('resume')) || new _resume__WEBPACK_IMPORTED_MODULE_4__["Resume"]();
        if (!this.resume.experiences || this.resume.experiences.length === 0) {
            this.resume.experiences = [];
            this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_4__["Experience"]());
        }
        if (!this.resume.educations || this.resume.educations.length === 0) {
            this.resume.educations = [];
            this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_4__["Education"]());
        }
        if (!this.resume.skills || this.resume.skills.length === 0) {
            this.resume.skills = [];
            this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_4__["Skill"]());
        }
    }
    AppComponent.prototype.addExperience = function () {
        this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_4__["Experience"]());
    };
    AppComponent.prototype.addEducation = function () {
        this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_4__["Education"]());
    };
    AppComponent.prototype.generatePdf = function (action) {
        if (action === void 0) { action = 'open'; }
        var documentDefinition = this.getDocumentDefinition();
        switch (action) {
            case 'open':
                pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(documentDefinition).open();
                break;
            case 'print':
                pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(documentDefinition).print();
                break;
            case 'download':
                pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(documentDefinition).download();
                break;
            default:
                pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(documentDefinition).open();
                break;
        }
    };
    AppComponent.prototype.resetForm = function () {
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_4__["Resume"]();
    };
    AppComponent.prototype.getDocumentDefinition = function () {
        sessionStorage.setItem('resume', JSON.stringify(this.resume));
        return {
            // content : 'This is  a sample PDF'
            content: [
                {
                    text: 'RESUME',
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                {
                    columns: [
                        [{
                                text: this.resume.name,
                                style: 'name'
                            },
                            {
                                text: this.resume.address
                            },
                            {
                                text: 'Email : ' + this.resume.email
                            },
                            {
                                text: 'Contact No : ' + this.resume.contactNo
                            },
                            {
                                text: 'Github: ' + this.resume.socialProfile,
                                link: this.resume.socialProfile,
                                color: 'blue'
                            }
                        ],
                        [
                            this.getProfilePicObject()
                        ]
                    ]
                },
                {
                    text: 'Skills',
                    style: 'header'
                },
                {
                    columns: [
                        {
                            ul: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.resume.skills.filter(function (value, index) { return index % 3 === 0; }).map(function (s) { return s.value; }))
                        },
                        {
                            ul: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.resume.skills.filter(function (value, index) { return index % 3 === 1; }).map(function (s) { return s.value; }))
                        },
                        {
                            ul: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.resume.skills.filter(function (value, index) { return index % 3 === 2; }).map(function (s) { return s.value; }))
                        }
                    ]
                },
                {
                    text: 'Experience',
                    style: 'header'
                },
                this.getExperienceObject(this.resume.experiences),
                {
                    text: 'Education',
                    style: 'header'
                },
                this.getEducationObject(this.resume.educations),
                {
                    text: 'Other Details',
                    style: 'header'
                },
                {
                    text: this.resume.otherDetails
                },
                {
                    text: 'Signature',
                    style: 'sign'
                },
                {
                    columns: [
                        { qr: this.resume.name + ', Contact No : ' + this.resume.contactNo, fit: 100 },
                        {
                            text: "(" + this.resume.name + ")",
                            alignment: 'right',
                        }
                    ]
                }
            ],
            info: {
                title: this.resume.name + '_RESUME',
                author: this.resume.name,
                subject: 'RESUME',
                keywords: 'RESUME, ONLINE RESUME',
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline'
                },
                name: {
                    fontSize: 16,
                    bold: true
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: 'right',
                    italics: true
                },
                tableHeader: {
                    bold: true
                }
            }
        };
    };
    AppComponent.prototype.getExperienceObject = function (experiences) {
        var exs = [];
        experiences.forEach(function (experience) {
            exs.push([{
                    columns: [
                        [{
                                text: experience.jobTitle,
                                style: 'jobTitle'
                            },
                            {
                                text: experience.employer
                            },
                            {
                                text: experience.jobDescription
                            }],
                        {
                            text: 'Experience : ' + experience.experience + ' Months',
                            alignment: 'right'
                        }
                    ]
                }]);
        });
        return {
            table: {
                widths: ['*'],
                body: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](exs)
            }
        };
    };
    AppComponent.prototype.getEducationObject = function (educations) {
        return {
            table: {
                widths: ['*', '*', '*', '*'],
                body: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                    [{
                            text: 'Degree',
                            style: 'tableHeader'
                        },
                        {
                            text: 'College',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Passing Year',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Result',
                            style: 'tableHeader'
                        },
                    ]
                ], educations.map(function (ed) {
                    return [ed.degree, ed.college, ed.passingYear, ed.percentage];
                }))
            }
        };
    };
    AppComponent.prototype.getProfilePicObject = function () {
        if (this.resume.ProfilePic) {
            return {
                image: this.resume.ProfilePic,
                width: 75,
                alignment: 'right'
            };
        }
        return null;
    };
    AppComponent.prototype.fileChanged = function (e) {
        var file = e.target.files[0];
        this.getBase64(file);
    };
    AppComponent.prototype.getBase64 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            _this.resume.ProfilePic = reader.result;
        };
        reader.onerror = function (err) {
            console.log('Error', err);
        };
    };
    AppComponent.prototype.addSkill = function () {
        this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_4__["Skill"]());
    };
    AppComponent.ctorParameters = function () { return [
        { type: _resume_service__WEBPACK_IMPORTED_MODULE_5__["ResumeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resumeForm', { static: true })
    ], AppComponent.prototype, "resumeForm", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume.service */ "./src/app/resume.service.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_resume_service__WEBPACK_IMPORTED_MODULE_5__["ResumeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/resume.service.ts":
/*!***********************************!*\
  !*** ./src/app/resume.service.ts ***!
  \***********************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeService = /** @class */ (function () {
    function ResumeService() {
    }
    ResumeService.prototype.isCtrlValid = function (Ctrl, Form) {
        return Ctrl.errors && Form.submitted;
    };
    ResumeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ResumeService);
    return ResumeService;
}());



/***/ }),

/***/ "./src/app/resume.ts":
/*!***************************!*\
  !*** ./src/app/resume.ts ***!
  \***************************/
/*! exports provided: Resume, Experience, Education, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Resume = /** @class */ (function () {
    function Resume() {
        this.experiences = [];
        this.educations = [];
        this.skills = [];
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.skills.push(new Skill());
    }
    return Resume;
}());

var Experience = /** @class */ (function () {
    function Experience() {
    }
    return Experience;
}());

var Education = /** @class */ (function () {
    function Education() {
    }
    return Education;
}());

var Skill = /** @class */ (function () {
    function Skill() {
    }
    return Skill;
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

module.exports = __webpack_require__(/*! H:\newtry\online-resume-builder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map