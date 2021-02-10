function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"card\">\r\n  <div class=\"card-hearder p-3 text-center\">\r\n    <span class=\"h1\">Employees</span>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row border-top border-bottom\">\r\n      <div class=\"col-1 font-weight-bold text-truncate\" title=\"Id\">Id</div>\r\n      <div class=\"col-2 font-weight-bold text-truncate\" title=\"Username\">Username</div>\r\n      <div class=\"col-2 font-weight-bold text-truncate\" title=\"Phone\">Phone</div>\r\n      <div class=\"col-2 font-weight-bold text-truncate\" title=\"Role\">Role</div>\r\n      <div class=\"col-2 font-weight-bold text-truncate\" title=\"Name\">Name</div>\r\n      <div class=\"col-3 font-weight-bold text-truncate text-center\" title=\"Action\">Action\r\n        <i class=\"fa fa-user-plus text-success\" title=\"Add employee\" role=\"button\" (click)=\"addEmployee()\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"row border-bottom\" *ngFor=\"let item of employees\">\r\n      <div class=\"col-1 text-truncate\" [title]=\"item.id\">{{item.id}}</div>\r\n      <div class=\"col-2 text-truncate\" [title]=\"item.username\">{{item.username}}</div>\r\n      <div class=\"col-2 text-truncate\" [title]=\"item.phone\">{{item.phone}}</div>\r\n      <div class=\"col-2 text-truncate\" [title]=\"item.role\">{{item.role}}</div>\r\n      <div class=\"col-2 text-truncate\" [title]=\"item.name\">{{item.name}}</div>\r\n      <div class=\"col-3 text-truncate text-center\">\r\n        <i class=\"fa fa-user-minus text-danger\" title=\"Remove employee\" (click)=\"deleteEmployee(item)\" role=\"button\"></i>\r\n        <i class=\"fa fa-user-edit\" title=\"Edit employee\" (click)=\"editEmployee(item)\" role=\"button\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/new-employee-modal/new-employee-modal.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/new-employee-modal/new-employee-modal.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminNewEmployeeModalNewEmployeeModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Add Employee</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"fg\" (ngSubmit)=\"submit()\">\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Username</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <input [class.is-invalid]=\"fg.get('username').invalid && fg.get('username').touched\"\r\n        type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Phone Number</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <input [class.is-invalid]=\"fg.get('phone').invalid && fg.get('phone').touched\"\r\n        type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" formControlName=\"phone\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Role</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <select [class.is-invalid]=\"fg.get('role').invalid && fg.get('role').touched\"\r\n        class=\"custom-select\" formControlName=\"role\">\r\n          <option *ngFor=\"let role of roles\" [selected]=\"role == fg.get('role').value\">{{role}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Name</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <input [class.is-invalid]=\"fg.get('name').invalid && fg.get('name').touched\"\r\n        type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\r\n  <button type=\"submit\" class=\"btn btn-primary\" ngbAutofocus\r\n  (click)=\"submit()\" [disabled]=\"fg.invalid\" [style.cursor]=\"fg.valid ? 'pointer':'not-allowed'\">Ok</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-employee-modal/update-employee-modal.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-employee-modal/update-employee-modal.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUpdateEmployeeModalUpdateEmployeeModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Employee</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"fg\" (ngSubmit)=\"submit()\">\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Id</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <span>{{ employee.id }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Username</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <input [class.is-invalid]=\"fg.get('username').invalid && fg.get('username').touched\"\r\n        type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Phone Number</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <input [class.is-invalid]=\"fg.get('phone').invalid && fg.get('phone').touched\"\r\n        type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" formControlName=\"phone\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Role</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <select [class.is-invalid]=\"fg.get('role').invalid && fg.get('role').touched\"\r\n        class=\"custom-select\" formControlName=\"role\">\r\n          <option *ngFor=\"let role of roles\" [selected]=\"role == fg.get('role').value\">{{role}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-4 d-flex align-items-center\">\r\n        <span class=\"ml-auto\">Name</span>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <input [class.is-invalid]=\"fg.get('name').invalid && fg.get('name').touched\"\r\n        type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\r\n  <button type=\"submit\" class=\"btn btn-primary\" ngbAutofocus [disabled]=\"fg.invalid\"\r\n  (click)=\"submit()\" [style.cursor]=\"fg.valid ? 'default':'not-allowed'\">Ok</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container h-100\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Posts</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\">Admin</a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation-modal/confirmation-modal.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation-modal/confirmation-modal.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfirmationModalConfirmationModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{title}}</h4>\r\n  <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n    <span >&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <span>{{message}}</span>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">{{cancel || 'Cancel'}}</button>\r\n  <button type=\"button\" ngbAutofocus class=\"btn btn-primary\" (click)=\"submit()\">{{ok || 'Ok'}}</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"h1 text-danger\">Error Page Not Found!!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/autocomplete/autocomplete.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/autocomplete/autocomplete.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsAutocompleteAutocompleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row py-3\" [formGroup]=\"parentForm\">\r\n  <div class=\"d-flex align-items-center col-3\" [class.col-md-2]=\"buttonVisible\" [class.col-md-3]=\"!buttonVisible\">\r\n    <label for=\"comment\">Comment</label>\r\n  </div>\r\n  <div [ngClass]=\"{'col-md-9 col-6': buttonVisible, 'col-9':!buttonVisible}\">\r\n    <textarea class=\"form-control\" id=\"comment\" placeholder=\"Add your comment here...\"\r\n    [class.is-invalid]=\"parentForm.get('comment').invalid && parentForm.get('comment').touched\"\r\n    formControlName=\"comment\" [mentionConfig]=\"mentionConfig\"\r\n    ></textarea>\r\n  </div>\r\n  <div class=\"col-md-1 col-3\" *ngIf=\"buttonVisible\">\r\n    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/edit-post-modal/edit-post-modal.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/edit-post-modal/edit-post-modal.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsEditPostModalEditPostModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Post</h4>\r\n  <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n    <span >&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"fg\">\r\n    <app-autocomplete [parentForm]=\"fg\" [buttonVisible]=\"false\"></app-autocomplete>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\r\n  <button type=\"submit\" ngbAutofocus class=\"btn btn-primary\" (click)=\"submit()\">Ok</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/employee/employee.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/employee/employee.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsEmployeeEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #popContent>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <span>Id: {{employee?.id}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <span>Username: {{employee?.username}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <span>Phone: {{employee?.phone}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <span>Role: {{employee?.role}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <span>Name: {{employee?.name}}</span>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ins class=\"text-primary\" [ngbPopover]=\"popContent\" *ngIf=\"field==='phone'\" triggers=\"mouseenter:mouseleave\">#{{employee?.phone}}</ins>\r\n<ins class=\"text-primary\" [ngbPopover]=\"popContent\" *ngIf=\"field==='username'\" triggers=\"mouseenter:mouseleave\">@{{employee?.username}}</ins>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/new-post/new-post.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/new-post/new-post.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsNewPostNewPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"emit()\" [formGroup]=\"fg\">\r\n  <app-autocomplete [parentForm]=\"fg\" [buttonVisible]=\"true\"></app-autocomplete>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"card\">\r\n  <div class=\"card-hearder p-3 text-center\">\r\n    <span class=\"h1\">Posts</span>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"container-fluid\">\r\n      <app-new-post (add)=\"addPost($event)\"></app-new-post>\r\n    </div>\r\n    <div class=\"container-fluid p-3 border\" *ngFor=\"let post of posts\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <i class=\"fas fa-trash-alt float-right text-danger pl-3\" role=\"button\" (click)=\"removePost(post)\"></i>\r\n          <i class=\"fas fa-pencil-alt float-right\" role=\"button\" (click)=\"openModalEdit(post)\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-right\">{{post.date | date:'dd/MM/yyyy'}}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ng-container  *ngFor=\"let commentField of post.comments\">\r\n            <span *ngIf=\"!commentField.id; else employee\">\r\n              {{commentField.comment}}\r\n            </span>\r\n            <ng-template #employee>\r\n                <app-employee [id]=\"commentField.id\" [field]=\"commentField.field\"></app-employee>\r\n            </ng-template>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    var __createBinding = Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      });
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    };

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    var __setModuleDefault = Object.create ? function (o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function (o, v) {
      o["default"] = v;
    };

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin.component.scss":
  /*!********************************************!*\
    !*** ./src/app/admin/admin.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _update_employee_modal_update_employee_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-employee-modal/update-employee-modal.component */
    "./src/app/admin/update-employee-modal/update-employee-modal.component.ts");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../confirmation-modal/confirmation-modal.component */
    "./src/app/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _new_employee_modal_new_employee_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./new-employee-modal/new-employee-modal.component */
    "./src/app/admin/new-employee-modal/new-employee-modal.component.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(employeeService, postService, modalService, toastr) {
        _classCallCheck(this, AdminComponent);

        this.employeeService = employeeService;
        this.postService = postService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmployees();
          this.getPosts();
        }
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this = this;

          this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            return _this.employees = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "editEmployee",
        value: function editEmployee(employee) {
          var _this2 = this;

          var modalRef = this.modalService.open(_update_employee_modal_update_employee_modal_component__WEBPACK_IMPORTED_MODULE_6__["UpdateEmployeeModalComponent"]);
          modalRef.componentInstance.employee = employee;
          modalRef.result.then(function (res) {
            if (res.success) {
              _this2.saveEmployee(res.value);

              _this2.toastr.success("Employee ".concat(employee.name, " successfully updated"), 'Success!');
            }
          })["catch"](function () {});
        }
      }, {
        key: "addEmployee",
        value: function addEmployee() {
          var _this3 = this;

          var modalRef = this.modalService.open(_new_employee_modal_new_employee_modal_component__WEBPACK_IMPORTED_MODULE_9__["NewEmployeeModalComponent"]);
          modalRef.result.then(function (res) {
            if (res.success) {
              _this3.addEmployeeInService(res.value);

              _this3.toastr.success("Employee ".concat(res.value.name, " successfully added"), 'Success!');
            }
          })["catch"](function () {});
        }
      }, {
        key: "addEmployeeInService",
        value: function addEmployeeInService(employee) {
          var _this4 = this;

          this.employeeService.addEmployee(employee).subscribe(function () {
            _this4.getEmployees();
          });
        }
      }, {
        key: "saveEmployee",
        value: function saveEmployee(employee) {
          var _this5 = this;

          this.employeeService.updateEmployee(employee).subscribe(function () {
            _this5.getEmployees();
          });
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this6 = this;

          this.postService.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            _this6.posts = res;
          });
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(employee) {
          var _this7 = this;

          var exist = false;
          this.posts.forEach(function (post) {
            if (post.comment.includes("id=\"".concat(employee.id, "\""))) {
              _this7.toastr.error("Employee ".concat(employee.name, " is associated in posts, please delete the post where it is mentioned first"), 'Post dependency!');

              exist = true;
            }
          });

          if (!exist) {
            this.openModalDelete(employee);
          }
        }
      }, {
        key: "openModalDelete",
        value: function openModalDelete(employee) {
          var _this8 = this;

          var modalRef = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationModalComponent"]);
          modalRef.componentInstance.title = 'Delete employee';
          modalRef.componentInstance.message = "Are you sure you want to delete employee ".concat(employee.name, "?");
          modalRef.result.then(function (res) {
            if (res.success) {
              _this8.employeeService.removeEmployee(employee).subscribe(function () {
                _this8.toastr.success("Employee ".concat(employee.name, " successfully deleted"), 'Success!');

                _this8.getEmployees();
              });
            }
          })["catch"](function () {});
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/new-employee-modal/new-employee-modal.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/new-employee-modal/new-employee-modal.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminNewEmployeeModalNewEmployeeModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1lbXBsb3llZS1tb2RhbC9uZXctZW1wbG95ZWUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/new-employee-modal/new-employee-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/new-employee-modal/new-employee-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: NewEmployeeModalComponent */

  /***/
  function srcAppAdminNewEmployeeModalNewEmployeeModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewEmployeeModalComponent", function () {
      return NewEmployeeModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NewEmployeeModalComponent = /*#__PURE__*/function () {
      function NewEmployeeModalComponent(activeModal, employeeService, fb) {
        _classCallCheck(this, NewEmployeeModalComponent);

        this.activeModal = activeModal;
        this.employeeService = employeeService;
        this.fb = fb;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.roles = ['', 'CEO', 'Designer', 'Developer', 'Sales', 'PR'];
      }

      _createClass(NewEmployeeModalComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            return _this9.employees = res;
          });
          this.fg = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[\w-_]+$/)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.UniquePhoneValidator()]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "UniquePhoneValidator",
        value: function UniquePhoneValidator() {
          var _this10 = this;

          return function (control) {
            var res = null;

            if (control.value !== undefined && isNaN(control.value)) {
              return null;
            }

            if (_this10.employees.length > 0 && control.value) {
              var phoneUnique = _this10.employees.filter(function (emp) {
                return emp.phone === control.value;
              });

              if (phoneUnique.length > 0) {
                res = {
                  'NumberUnique': true
                };
              }
            }

            return res;
          };
        }
      }, {
        key: "close",
        value: function close() {
          this.activeModal.close({
            success: false,
            value: this.fg.value
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.fg.valid) {
            this.activeModal.close({
              success: true,
              value: this.fg.value
            });
          }
        }
      }]);

      return NewEmployeeModalComponent;
    }();

    NewEmployeeModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }, {
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    NewEmployeeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-employee-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-employee-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/new-employee-modal/new-employee-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-employee-modal.component.scss */
      "./src/app/admin/new-employee-modal/new-employee-modal.component.scss"))["default"]]
    })], NewEmployeeModalComponent);
    /***/
  },

  /***/
  "./src/app/admin/update-employee-modal/update-employee-modal.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/update-employee-modal/update-employee-modal.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUpdateEmployeeModalUpdateEmployeeModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VwZGF0ZS1lbXBsb3llZS1tb2RhbC91cGRhdGUtZW1wbG95ZWUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/update-employee-modal/update-employee-modal.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/update-employee-modal/update-employee-modal.component.ts ***!
    \********************************************************************************/

  /*! exports provided: UpdateEmployeeModalComponent */

  /***/
  function srcAppAdminUpdateEmployeeModalUpdateEmployeeModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateEmployeeModalComponent", function () {
      return UpdateEmployeeModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UpdateEmployeeModalComponent = /*#__PURE__*/function () {
      function UpdateEmployeeModalComponent(activeModal, employeeService, fb) {
        _classCallCheck(this, UpdateEmployeeModalComponent);

        this.activeModal = activeModal;
        this.employeeService = employeeService;
        this.fb = fb;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.roles = ['', 'CEO', 'Designer', 'Developer', 'Sales', 'PR'];
      }

      _createClass(UpdateEmployeeModalComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            return _this11.employees = res;
          });

          if (!this.employee) {
            return;
          }

          this.fg = this.fb.group({
            id: [this.employee.id],
            username: [this.employee.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[\w-_]+$/)]],
            phone: [this.employee.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.UniquePhoneValidator()]],
            role: [this.employee.role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.employee.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "UniquePhoneValidator",
        value: function UniquePhoneValidator() {
          var _this12 = this;

          return function (control) {
            var res = null;

            if (control.value !== undefined && isNaN(control.value)) {
              return null;
            }

            if (_this12.employees.length > 0 && control.value && _this12.fg && _this12.fg.controls && _this12.fg.controls.id && _this12.fg.controls.id.value) {
              var phoneUnique = _this12.employees.filter(function (emp) {
                return emp.phone === control.value && emp.id !== _this12.fg.controls.id.value;
              });

              if (phoneUnique.length > 0) {
                res = {
                  'NumberUnique': true
                };
              }
            }

            return res;
          };
        }
      }, {
        key: "close",
        value: function close() {
          this.activeModal.close({
            success: false,
            value: this.fg.value
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.activeModal.close({
            success: true,
            value: this.fg.value
          });
        }
      }]);

      return UpdateEmployeeModalComponent;
    }();

    UpdateEmployeeModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }, {
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UpdateEmployeeModalComponent.prototype, "employee", void 0);
    UpdateEmployeeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-employee-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-employee-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-employee-modal/update-employee-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-employee-modal.component.scss */
      "./src/app/admin/update-employee-modal/update-employee-modal.component.scss"))["default"]]
    })], UpdateEmployeeModalComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");

    var routes = [{
      path: '',
      component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'valispace';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./posts/new-post/new-post.component */
    "./src/app/posts/new-post/new-post.component.ts");
    /* harmony import */


    var _admin_new_employee_modal_new_employee_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/new-employee-modal/new-employee-modal.component */
    "./src/app/admin/new-employee-modal/new-employee-modal.component.ts");
    /* harmony import */


    var _admin_update_employee_modal_update_employee_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/update-employee-modal/update-employee-modal.component */
    "./src/app/admin/update-employee-modal/update-employee-modal.component.ts");
    /* harmony import */


    var _error_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./error/error.interceptor */
    "./src/app/error/error.interceptor.ts");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./confirmation-modal/confirmation-modal.component */
    "./src/app/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var _posts_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./posts/autocomplete/autocomplete.component */
    "./src/app/posts/autocomplete/autocomplete.component.ts");
    /* harmony import */


    var _posts_edit_post_modal_edit_post_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./posts/edit-post-modal/edit-post-modal.component */
    "./src/app/posts/edit-post-modal/edit-post-modal.component.ts");
    /* harmony import */


    var angular_mentions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angular-mentions */
    "./node_modules/angular-mentions/fesm2015/angular-mentions.js");
    /* harmony import */


    var _posts_employee_employee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./posts/employee/employee.component */
    "./src/app/posts/employee/employee.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"], _posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_13__["NewPostComponent"], _admin_new_employee_modal_new_employee_modal_component__WEBPACK_IMPORTED_MODULE_14__["NewEmployeeModalComponent"], _admin_update_employee_modal_update_employee_modal_component__WEBPACK_IMPORTED_MODULE_15__["UpdateEmployeeModalComponent"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationModalComponent"], _posts_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_18__["AutocompleteComponent"], _posts_edit_post_modal_edit_post_modal_component__WEBPACK_IMPORTED_MODULE_19__["EditPostModalComponent"], _posts_employee_employee_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_mentions__WEBPACK_IMPORTED_MODULE_20__["MentionModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _error_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"],
        multi: true
      }],
      entryComponents: [_admin_update_employee_modal_update_employee_modal_component__WEBPACK_IMPORTED_MODULE_15__["UpdateEmployeeModalComponent"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationModalComponent"], _posts_edit_post_modal_edit_post_modal_component__WEBPACK_IMPORTED_MODULE_19__["EditPostModalComponent"], _admin_new_employee_modal_new_employee_modal_component__WEBPACK_IMPORTED_MODULE_14__["NewEmployeeModalComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/confirmation-modal/confirmation-modal.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/confirmation-modal/confirmation-modal.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfirmationModalConfirmationModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/confirmation-modal/confirmation-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/confirmation-modal/confirmation-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: ConfirmationModalComponent */

  /***/
  function srcAppConfirmationModalConfirmationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function () {
      return ConfirmationModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ConfirmationModalComponent = /*#__PURE__*/function () {
      function ConfirmationModalComponent(activeModal) {
        _classCallCheck(this, ConfirmationModalComponent);

        this.activeModal = activeModal;
      }

      _createClass(ConfirmationModalComponent, [{
        key: "close",
        value: function close() {
          this.activeModal.close();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.activeModal.close({
            success: true
          });
        }
      }]);

      return ConfirmationModalComponent;
    }();

    ConfirmationModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmationModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmationModalComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmationModalComponent.prototype, "cancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmationModalComponent.prototype, "ok", void 0);
    ConfirmationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation-modal/confirmation-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation-modal.component.scss */
      "./src/app/confirmation-modal/confirmation-modal.component.scss"))["default"]]
    })], ConfirmationModalComponent);
    /***/
  },

  /***/
  "./src/app/error/error.component.scss":
  /*!********************************************!*\
    !*** ./src/app/error/error.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.scss */
      "./src/app/error/error.component.scss"))["default"]]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/error/error.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/error/error.interceptor.ts ***!
    \********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(toastr) {
        _classCallCheck(this, ErrorInterceptor);

        this.toastr = toastr;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this13 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            var error = err.statusText.message || err.statusText;

            _this13.toastr.error(error, 'Error');

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/posts/autocomplete/autocomplete.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/posts/autocomplete/autocomplete.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsAutocompleteAutocompleteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/posts/autocomplete/autocomplete.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/posts/autocomplete/autocomplete.component.ts ***!
    \**************************************************************/

  /*! exports provided: AutocompleteComponent */

  /***/
  function srcAppPostsAutocompleteAutocompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
      return AutocompleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");

    var AutocompleteComponent = /*#__PURE__*/function () {
      function AutocompleteComponent(empoyeesService) {
        _classCallCheck(this, AutocompleteComponent);

        this.empoyeesService = empoyeesService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mentionConfig = {};
      }

      _createClass(AutocompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.empoyeesService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            return _this14.getData(res);
          });
        }
      }, {
        key: "getData",
        value: function getData(employees) {
          this.listEmployees = employees;
          this.mentionConfig = {
            mentions: [{
              items: this.listEmployees.map(function (e) {
                return e.username;
              }),
              triggerChar: '@'
            }, {
              items: this.listEmployees.map(function (e) {
                return e.phone;
              }),
              triggerChar: '#'
            }]
          };
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return AutocompleteComponent;
    }();

    AutocompleteComponent.ctorParameters = function () {
      return [{
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutocompleteComponent.prototype, "parentForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutocompleteComponent.prototype, "buttonVisible", void 0);
    AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-autocomplete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./autocomplete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/autocomplete/autocomplete.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./autocomplete.component.scss */
      "./src/app/posts/autocomplete/autocomplete.component.scss"))["default"]]
    })], AutocompleteComponent);
    /***/
  },

  /***/
  "./src/app/posts/edit-post-modal/edit-post-modal.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/posts/edit-post-modal/edit-post-modal.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsEditPostModalEditPostModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2VkaXQtcG9zdC1tb2RhbC9lZGl0LXBvc3QtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/posts/edit-post-modal/edit-post-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/posts/edit-post-modal/edit-post-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: EditPostModalComponent */

  /***/
  function srcAppPostsEditPostModalEditPostModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPostModalComponent", function () {
      return EditPostModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EditPostModalComponent = /*#__PURE__*/function () {
      function EditPostModalComponent(activeModal, fb) {
        _classCallCheck(this, EditPostModalComponent);

        this.activeModal = activeModal;
        this.fb = fb;
        this.fg = fb.group({
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(EditPostModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.post) {
            return;
          }

          this.fg = this.fb.group({
            comment: [this.post.comment, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.activeModal.close();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.activeModal.close({
            success: true,
            value: Object.assign({}, this.post, {
              comment: this.fg.value.comment,
              date: new Date().toISOString()
            })
          });
        }
      }]);

      return EditPostModalComponent;
    }();

    EditPostModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditPostModalComponent.prototype, "post", void 0);
    EditPostModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-post-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-post-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/edit-post-modal/edit-post-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-post-modal.component.scss */
      "./src/app/posts/edit-post-modal/edit-post-modal.component.scss"))["default"]]
    })], EditPostModalComponent);
    /***/
  },

  /***/
  "./src/app/posts/employee/employee.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/posts/employee/employee.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsEmployeeEmployeeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/posts/employee/employee.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/posts/employee/employee.component.ts ***!
    \******************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppPostsEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EmployeeComponent = /*#__PURE__*/function () {
      function EmployeeComponent(employeeService) {
        _classCallCheck(this, EmployeeComponent);

        this.employeeService = employeeService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmployee();
        }
      }, {
        key: "getEmployee",
        value: function getEmployee() {
          var _this15 = this;

          this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            return _this15.employee = res.find(function (e) {
              return e.id === _this15.id;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "field", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/employee/employee.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee.component.scss */
      "./src/app/posts/employee/employee.component.scss"))["default"]]
    })], EmployeeComponent);
    /***/
  },

  /***/
  "./src/app/posts/new-post/new-post.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/posts/new-post/new-post.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsNewPostNewPostComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/posts/new-post/new-post.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/posts/new-post/new-post.component.ts ***!
    \******************************************************/

  /*! exports provided: NewPostComponent */

  /***/
  function srcAppPostsNewPostNewPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPostComponent", function () {
      return NewPostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");

    var NewPostComponent = /*#__PURE__*/function () {
      function NewPostComponent(fb, postService) {
        _classCallCheck(this, NewPostComponent);

        this.postService = postService;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fg = fb.group({
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(NewPostComponent, [{
        key: "emit",
        value: function emit() {
          this.add.emit({
            id: null,
            comment: this.fg.value.comment,
            date: new Date().toISOString()
          });
          this.fg.markAsUntouched();
          this.fg.controls.comment.setValue('');
        }
      }]);

      return NewPostComponent;
    }();

    NewPostComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NewPostComponent.prototype, "add", void 0);
    NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/new-post/new-post.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-post.component.scss */
      "./src/app/posts/new-post/new-post.component.scss"))["default"]]
    })], NewPostComponent);
    /***/
  },

  /***/
  "./src/app/posts/posts.component.scss":
  /*!********************************************!*\
    !*** ./src/app/posts/posts.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _edit_post_modal_edit_post_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-post-modal/edit-post-modal.component */
    "./src/app/posts/edit-post-modal/edit-post-modal.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../confirmation-modal/confirmation-modal.component */
    "./src/app/confirmation-modal/confirmation-modal.component.ts");

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent(postService, employeeService, modalService, toastr) {
        _classCallCheck(this, PostsComponent);

        this.postService = postService;
        this.employeeService = employeeService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPosts();
          this.getEmployees();
        }
      }, {
        key: "addPost",
        value: function addPost(post) {
          var _this16 = this;

          post.comment = this.employeeService.transformCommentToSend(post.comment);
          this.postService.addPost(post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this16.toastr.success("Post successfully added.", 'Success!');

            _this16.getPosts();
          });
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this17 = this;

          this.postService.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            _this17.posts = res.map(function (post) {
              post = _this17.postService.treatPost(post);
              return post;
            });
            _this17.posts = _this17.posts.sort(function (a, b) {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
          });
        }
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this18 = this;

          this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            return _this18.employees = res;
          });
        }
      }, {
        key: "removePost",
        value: function removePost(post) {
          var _this19 = this;

          var modalRef = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationModalComponent"]);
          modalRef.componentInstance.title = 'Delete post';
          modalRef.componentInstance.message = "Are you sure you want to delete post?";
          modalRef.result.then(function (res) {
            if (res.success) {
              _this19.postService.removePost(post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this19.unsubscribe$)).subscribe(function () {
                _this19.toastr.success("Post successfully deleted.", 'Success!');

                _this19.getPosts();
              });
            }
          })["catch"](function () {});
        }
      }, {
        key: "openModalEdit",
        value: function openModalEdit(post) {
          var _this20 = this;

          var modalRef = this.modalService.open(_edit_post_modal_edit_post_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditPostModalComponent"]);
          var postText = '';
          post.comments.forEach(function (element) {
            var res = element.comment;

            if (element.id) {
              if (element.field === 'username') {
                res = '@' + _this20.employees.find(function (e) {
                  return e.id === element.id;
                }).username;
              }

              if (element.field === 'phone') {
                res = '#' + _this20.employees.find(function (e) {
                  return e.id === element.id;
                }).phone;
              }
            }

            postText += res;
          });
          post.comment = postText;
          modalRef.componentInstance.post = post;
          modalRef.result.then(function (res) {
            if (res && res.success) {
              res.value.comment = _this20.employeeService.transformCommentToSend(res.value.comment);

              _this20.postService.updatePost(res.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this20.unsubscribe$)).subscribe(function () {
                _this20.toastr.success("Post successfully updated", 'Success!');

                _this20.getPosts();
              });
            }
          })["catch"](function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return PostsComponent;
    }();

    PostsComponent.ctorParameters = function () {
      return [{
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_8__["EmployeeService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }];
    };

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.scss */
      "./src/app/posts/posts.component.scss"))["default"]]
    })], PostsComponent);
    /***/
  },

  /***/
  "./src/app/services/employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(http) {
        _classCallCheck(this, EmployeeService);

        this.http = http;
        this.gotData = false;
      }

      _createClass(EmployeeService, [{
        key: "getEmployees",
        value: function getEmployees() {
          var _this21 = this;

          if (!this.gotData) {
            return this.http.get('../../assets/employees.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              _this21.gotData = true;
              _this21.employees = response;
              return response;
            }));
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.employees).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
          }
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(employee) {
          employee = Object.assign({}, employee, {
            id: this.employees && this.employees.length ? this.employees.sort(function (a, b) {
              return b.id - a.id;
            })[0].id + 1 : 1
          });
          this.employees.push(employee);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }, {
        key: "removeEmployee",
        value: function removeEmployee(employee) {
          this.employees = this.employees.filter(function (existentEmployee) {
            return existentEmployee.id !== employee.id;
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(employee) {
          this.employees = this.employees.map(function (existentEmployee) {
            if (existentEmployee.id === employee.id) {
              existentEmployee = employee;
            }

            return existentEmployee;
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }, {
        key: "transformCommentToSend",
        value: function transformCommentToSend(comment) {
          this.employees.forEach(function (emp) {
            if (comment.indexOf("@".concat(emp.username, " ")) > -1 || comment.indexOf("#".concat(emp.username)) + "#".concat(emp.username).length === comment.length) {
              comment = comment.split("@".concat(emp.username)).join("<employee id=\"".concat(emp.id, "\" field=\"username\"></employee>"));
            }

            if (comment.indexOf("#".concat(emp.phone, " ")) > -1 || comment.indexOf("#".concat(emp.phone)) + "#".concat(emp.phone).length === comment.length) {
              comment = comment.split("#".concat(emp.phone)).join("<employee id=\"".concat(emp.id, "\" field=\"phone\"></employee>"));
            }
          });
          return comment;
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);
    /***/
  },

  /***/
  "./src/app/services/post.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/post.service.ts ***!
    \******************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/observable/of */
    "./node_modules/rxjs/internal/observable/of.js");
    /* harmony import */


    var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PostService = /*#__PURE__*/function () {
      function PostService(http) {
        _classCallCheck(this, PostService);

        this.http = http;
        this.gotData = false;
      }

      _createClass(PostService, [{
        key: "getPosts",
        value: function getPosts() {
          var _this22 = this;

          if (!this.gotData) {
            return this.http.get('../../assets/posts.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              _this22.gotData = true;
              _this22.posts = response;
              return response;
            }));
          } else {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(this.posts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
          }
        }
      }, {
        key: "addPost",
        value: function addPost(post) {
          post = Object.assign({}, post, {
            id: this.posts && this.posts.length ? this.posts.sort(function (a, b) {
              return b.id - a.id;
            })[0].id + 1 : 1
          });
          this.posts.push(post);
          return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }, {
        key: "removePost",
        value: function removePost(post) {
          this.posts = this.posts.filter(function (existentPost) {
            return existentPost.id !== post.id;
          });
          return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          this.posts = this.posts.map(function (existentPost) {
            if (existentPost.id === post.id) {
              existentPost = post;
            }

            return existentPost;
          });
          return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }, {
        key: "treatPost",
        value: function treatPost(post) {
          post.comments = [{
            comment: post.comment,
            id: 0,
            field: ''
          }];

          if (post.comment.indexOf('<employee') > -1) {
            var employees = post.comment.match(/<employee[\s\S]*?><\/employee>/gm);
            var texts = post.comment.split(/<employee[\s\S]*?\<\/employee>.*?/gm).join('\>').split('\>');
            post.comments = [];
            texts.forEach(function (text) {
              post.comments.push({
                comment: text,
                id: 0,
                field: ''
              });

              if (employees.length) {
                var cmt = employees.shift();
                post.comments.push({
                  comment: cmt,
                  id: Number(cmt.match(/id=\"([^"]*)/g)[0].replace('id=\"', '')),
                  field: cmt.match(/field=\"([^"]*)/g)[0].replace('field=\"', '')
                });
              }
            });
          }

          return post;
        }
      }]);

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\projetos\valispace\valispace\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map