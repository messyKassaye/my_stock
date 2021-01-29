(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/auth/company/CompaniesRoute.js":
/*!*****************************************************!*\
  !*** ./resources/js/auth/company/CompaniesRoute.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/Dashboard */ "./resources/js/auth/company/components/dashboard/Dashboard.js");




function CompaniesRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth',
    component: _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CompaniesRoute);

/***/ }),

/***/ "./resources/js/auth/company/components/company/CompanyDashboard.js":
/*!**************************************************************************!*\
  !*** ./resources/js/auth/company/components/company/CompanyDashboard.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CompanyStyle */ "./resources/js/auth/company/components/company/styles/CompanyStyle.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _stock_forms_CreateStock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stock/forms/CreateStock */ "./resources/js/auth/company/components/stock/forms/CreateStock.js");
/* harmony import */ var _loans_forms_CreateLoan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loans/forms/CreateLoan */ "./resources/js/auth/company/components/loans/forms/CreateLoan.js");













function CompanyDashboard() {
  var classes = Object(_styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.authReducer.userData.loading;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_3__["index"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_5__["API_PATH"], "me"), _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_6__["ME"]));
  }, []);

  var openCreateDialog = function openCreateDialog(showData) {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_3__["openDialog"])(showData));
  };

  var openEditDialog = function openEditDialog(showData) {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_3__["openDialog"])(showData));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 6,
    xs: 12,
    sm: 12
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    width: '100%',
    height: 400,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["grey"][500]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'h5',
    className: classes.info
  }, "Stock products"), user.data.stock === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    className: classes.noStock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, "No stock is created until now."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: openCreateDialog({
      'show': true,
      'title': 'Create new Stock',
      'page': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_stock_forms_CreateStock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: 'create',
        data: null,
        company: user.data.company
      })
    }),
    variant: 'text',
    color: 'secondary',
    style: {
      textTransform: 'none'
    }
  }, "Create stock"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: "".concat(user.data.stock.stock_price, " ETB"),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
      onClick: function onClick() {
        return openEditDialog({
          'show': true,
          'title': 'Edit stock',
          'page': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_stock_forms_CreateStock__WEBPACK_IMPORTED_MODULE_10__["default"], {
            type: 'edit',
            data: user.data.stock,
            company: user.data.company
          })
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Edit"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 6,
    xs: 12,
    sm: 12
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 12,
    xs: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    width: '100%',
    height: 400,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["grey"][500]
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 12,
    xs: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    width: '100%',
    height: 400,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["grey"][500]
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'h5',
    className: classes.info
  }, "Loan products"), user.data.loans.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2
  }, user.data.loans.map(function (loan) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      md: 8,
      xs: 12,
      sm: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
      title: loan.loan_type.name,
      action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
        onClick: function onClick() {
          return openEditDialog({
            'show': true,
            'title': 'Edit stock',
            'page': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loans_forms_CreateLoan__WEBPACK_IMPORTED_MODULE_11__["default"], {
              type: 'edit',
              data: loan,
              company: user.data.company
            })
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Edit"], null))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
      style: {
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      color: 'textSecondary'
    }, "".concat(loan.interest_rate, "% intereset rate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      color: 'textSecondary'
    }, "".concat(loan.number_of_month, " month")))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    className: classes.noStock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, "No loan is created until now."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: function onClick() {
      return openCreateDialog({
        'show': true,
        'title': 'Create new loan',
        'page': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loans_forms_CreateLoan__WEBPACK_IMPORTED_MODULE_11__["default"], {
          type: 'create',
          data: null,
          company: user.data.company
        })
      });
    },
    variant: 'text',
    color: 'secondary',
    style: {
      textTransform: 'none'
    }
  }, "Create loan"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CompanyDashboard);

/***/ }),

/***/ "./resources/js/auth/company/components/company/CompanyHome.js":
/*!*********************************************************************!*\
  !*** ./resources/js/auth/company/components/company/CompanyHome.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _loaders_HorizontalLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../loaders/HorizontalLoader */ "./resources/js/loaders/HorizontalLoader.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CompanyStyle */ "./resources/js/auth/company/components/company/styles/CompanyStyle.js");
/* harmony import */ var _forms_RegisterNewCompany__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/RegisterNewCompany */ "./resources/js/auth/company/components/company/forms/RegisterNewCompany.js");
/* harmony import */ var _CompanyDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompanyDashboard */ "./resources/js/auth/company/components/company/CompanyDashboard.js");








function CompanyHome() {
  var classes = Object(_styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.authReducer.userData.loading;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loaders_HorizontalLoader__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.data.company.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_RegisterNewCompany__WEBPACK_IMPORTED_MODULE_5__["default"], {
    creation: 'first_creation'
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CompanyDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (CompanyHome);

/***/ }),

/***/ "./resources/js/auth/company/components/company/CompanyProfile.js":
/*!************************************************************************!*\
  !*** ./resources/js/auth/company/components/company/CompanyProfile.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/CompanyConstants */ "./resources/js/auth/company/state/CompanyConstants.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _loaders_ProfileLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../loaders/ProfileLoader */ "./resources/js/loaders/ProfileLoader.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");










function CompanyProfile(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.companyProfileReducer.loading;
  });
  var company = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.companyProfileReducer.company;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_3__["show"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_5__["API_PATH"], "companies"), user.data.company[0].id, _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_4__["SHOW_COMPANY"]));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loaders_ProfileLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: 'md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    elevation: 0,
    style: {
      backgroundColor: 'transparent',
      marginTop: -50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: 'Profile',
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Edit"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    style: {
      display: "flex",
      flexDirection: 'column',
      paddingTop: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginBottom: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Company name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      fontType: 'bold',
      color: 'black'
    }
  }, company.data.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Category"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, company.data.category.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    orientation: 'vertical',
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Room"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, "".concat(company.data.location.region[0].name, ",").concat(company.data.location.city[0].name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    orientation: 'vertical',
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginRight: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Established year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CalendarToday"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, company.data.established_year)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Contact info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Phone"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, company.data.contact.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Email"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, company.data.contact.email)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: 'column',
      marginTop: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Change picture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: 'contained',
    color: 'default',
    style: {
      textTransform: 'none',
      width: '35%'
    }
  }, "Change picture")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: 'column',
      marginTop: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, company.data.about))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CompanyProfile);

/***/ }),

/***/ "./resources/js/auth/company/components/company/MyCompanies.js":
/*!*********************************************************************!*\
  !*** ./resources/js/auth/company/components/company/MyCompanies.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/CompanyConstants */ "./resources/js/auth/company/state/CompanyConstants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");









function MyCompanies(props) {
  var disapatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.companyReducer.loading;
  });
  var company = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.companyReducer.company;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    disapatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_2__["index"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_5__["API_PATH"], "companies"), _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_3__["FETCH_COMPANIES"]));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: 'sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    elevation: 0,
    style: {
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: 'My companies'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 100,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["grey"][500]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2
  }, company.data.map(function (company) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      key: company.id,
      item: true,
      md: 12,
      xs: 12,
      sm: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
      title: company.name,
      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
        variant: 'circular',
        src: company.logo_path
      }),
      subheader: company.category.name
    })));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyCompanies);

/***/ }),

/***/ "./resources/js/auth/company/components/company/forms/CompanyContact.js":
/*!******************************************************************************!*\
  !*** ./resources/js/auth/company/components/company/forms/CompanyContact.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _home_state_HomeConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../home/state/HomeConstants */ "./resources/js/home/state/HomeConstants.js");
/* harmony import */ var _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../commons/forms/UseForm */ "./resources/js/commons/forms/UseForm.js");
/* harmony import */ var _commons_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../commons/LoadingButton */ "./resources/js/commons/LoadingButton.js");
/* harmony import */ var _styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/CompanyStyle */ "./resources/js/auth/company/components/company/styles/CompanyStyle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CompanyFinance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CompanyFinance */ "./resources/js/auth/company/components/company/forms/CompanyFinance.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function CompanyContact(props) {
  var classes = Object(_styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _UseForm = Object(_commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    owner_id: '',
    email: '',
    phone: "",
    region_id: "",
    city_id: ''
  }),
      inputs = _UseForm.inputs,
      handleInputChange = _UseForm.handleInputChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      finished = _useState6[0],
      setFinished = _useState6[1];

  var loadingSet = !finished && loading;
  var isEnabled = inputs.email.length > 0;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var regions = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.homeReducer.registrationReducer.regions;
  });
  var dataLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.homeReducer.registrationReducer.regionsLoading;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      childData = _React$useState2[0],
      setChildData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      region = _React$useState4[0],
      setRegion = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      child = _React$useState6[0],
      setChild = _React$useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      done = _useState8[0],
      setDone = _useState8[1];

  var response = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.authReducer.contactReducer.response;
  });
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_9__["index"])('/api/regions', _home_state_HomeConstants__WEBPACK_IMPORTED_MODULE_1__["SELECT_REGIONS"]));
  }, []);

  var handleChange = function handleChange(event) {
    setRegion(event.target.value);
    inputs.region_id = event.target.value.id;
    setChildData(event.target.value.child);
  };

  var handleChildChange = function handleChildChange(event) {
    setChild(event.target.value);
    inputs.city_id = event.target.value;
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    inputs.owner_id = props.company.id;
    console.log(inputs);
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_9__["store"])('/api/contact', inputs, _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_2__["STORE_CONTACT"]));
    setLoading(true);
    setSubmitted(true);
    setDone(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, response.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CompanyFinance__WEBPACK_IMPORTED_MODULE_12__["default"], {
    company: props.company
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classes.formContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["green"][500],
      marginBottom: 15
    }
  }, "Company is registered successfully. Now tell us contact address for company ".concat(props.company.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Company email address',
    onChange: handleInputChange,
    name: "email",
    type: "email",
    value: inputs.email,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Company phone number',
    onChange: handleInputChange,
    name: "phone",
    type: "text",
    value: inputs.phone,
    validators: ['required']
  }), dataLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 50,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["grey"][500]
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 50,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["grey"][500]
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    variant: 'outlined',
    className: classes.text_input
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Select the region where the company is located"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    label: 'Select your company category',
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: region,
    onChange: handleChange
  }, regions.data.map(function (region) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
      key: region.id,
      value: region
    }, region.name);
  }))), childData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    variant: 'outlined',
    className: classes.text_input
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Select the city where the company is located"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    label: 'Select your company category',
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: child,
    onChange: handleChildChange
  }, childData.map(function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
      key: child.id,
      value: child.id
    }, child.name);
  }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_commons_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.text_input,
    color: "secondary",
    variant: "outlined",
    type: "submit",
    disabled: !isEnabled || submitted,
    loading: loadingSet,
    text: 'Register contact',
    done: finished
  }, 'Register contact'))));
}

/* harmony default export */ __webpack_exports__["default"] = (CompanyContact);

/***/ }),

/***/ "./resources/js/auth/company/components/company/forms/CompanyFinance.js":
/*!******************************************************************************!*\
  !*** ./resources/js/auth/company/components/company/forms/CompanyFinance.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commons/forms/UseForm */ "./resources/js/commons/forms/UseForm.js");
/* harmony import */ var _home_registration_style_RegistrationStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../home/registration/style/RegistrationStyle */ "./resources/js/home/registration/style/RegistrationStyle.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _commons_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../commons/LoadingButton */ "./resources/js/commons/LoadingButton.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../Constants */ "./resources/js/Constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function CompanyFinance(props) {
  var classes = Object(_home_registration_style_RegistrationStyle__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _UseForm = Object(_commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    year_1: '',
    year_2: "",
    year_3: "",
    year_4: '',
    year_5: '',
    company_id: ''
  }),
      inputs = _UseForm.inputs,
      handleInputChange = _UseForm.handleInputChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      finished = _useState6[0],
      setFinished = _useState6[1];

  var loadingSet = !finished && loading;
  var isEnabled = inputs.year_1.length > 0;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      done = _useState8[0],
      setDone = _useState8[1];

  var response = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.authReducer.companyFinanceReducer.response;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (response.status) {
      setDone(true);
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  });

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    inputs.company_id = props.company.id;
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_7__["store"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_10__["API_PATH"], "company_finance"), inputs, _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_9__["STORE_COMPANY_FINANCE"]));
    setLoading(true);
    setSubmitted(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, done ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'h6',
    style: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][500]
    }
  }, "Congratulations, you have finished registering your first company ):")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.formContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][500],
      marginBottom: 15
    }
  }, "We are allmost there. Now tell us your company 5 years finance status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500],
      margin: 10
    }
  }, "please right like this E.g year-finance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Year 1 finace',
    onChange: handleInputChange,
    name: "year_1",
    type: "text",
    value: inputs.year_1,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Year 2 finace',
    onChange: handleInputChange,
    name: "year_2",
    type: "text",
    value: inputs.year_2,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Year 3 finace',
    onChange: handleInputChange,
    name: "year_3",
    type: "text",
    value: inputs.year_3,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Year 4 finace',
    onChange: handleInputChange,
    name: "year_4",
    type: "text",
    value: inputs.year_4,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Year 5 finace',
    onChange: handleInputChange,
    name: "year_5",
    type: "text",
    value: inputs.year_5,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_commons_LoadingButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.text_input,
    color: "secondary",
    variant: "outlined",
    type: "submit",
    disabled: !isEnabled || submitted,
    loading: loadingSet,
    text: 'Add company finance',
    done: finished
  }, 'Register contact'))));
}

/* harmony default export */ __webpack_exports__["default"] = (CompanyFinance);

/***/ }),

/***/ "./resources/js/auth/company/components/company/forms/RegisterNewCompany.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/auth/company/components/company/forms/RegisterNewCompany.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commons/forms/UseForm */ "./resources/js/commons/forms/UseForm.js");
/* harmony import */ var _home_registration_style_RegistrationStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../home/registration/style/RegistrationStyle */ "./resources/js/home/registration/style/RegistrationStyle.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _home_state_HomeConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../home/state/HomeConstants */ "./resources/js/home/state/HomeConstants.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _commons_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../commons/LoadingButton */ "./resources/js/commons/LoadingButton.js");
/* harmony import */ var _styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/CompanyStyle */ "./resources/js/auth/company/components/company/styles/CompanyStyle.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _CompanyContact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CompanyContact */ "./resources/js/auth/company/components/company/forms/CompanyContact.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function RegisterNewCompany(props) {
  var classes = Object(_styles_CompanyStyle__WEBPACK_IMPORTED_MODULE_10__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      finished = _useState6[0],
      setFinished = _useState6[1];

  var fileRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      imageUrl = _useState8[0],
      setImageUrl = _useState8[1];

  var _UseForm = Object(_commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    name: '',
    established_year: "",
    category_id: '',
    file: '',
    date: '',
    month: '',
    year: '',
    about: ""
  }),
      inputs = _UseForm.inputs,
      handleInputChange = _UseForm.handleInputChange;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.homeReducer.companyCategoryReducer.categories;
  });
  var dataLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.homeReducer.companyCategoryReducer.loading;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      category = _React$useState2[0],
      setCategory = _React$useState2[1];

  var loadingSet = !finished && loading;
  var isEnabled = inputs.name.length > 0;
  var response = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.homeReducer.registrationReducer.response;
  });
  var userLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.authReducer.userData.loading;
  });
  var userData = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState10 = _slicedToArray(_useState9, 2),
      upload = _useState10[0],
      setUpload = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      done = _useState12[0],
      setDone = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState14 = _slicedToArray(_useState13, 2),
      company = _useState14[0],
      setCompany = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_5__["index"])("/api/company_category", _home_state_HomeConstants__WEBPACK_IMPORTED_MODULE_7__["FETCH_COMPANY_CATEGORY"]));
  }, []);

  var handleChange = function handleChange(event) {
    setCategory(event.target.value);
    inputs.category_id = event.target.value;
  };

  var handleFileChange = function handleFileChange(event) {
    var file = event.target.files[0];
    inputs.file = file;
    var url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  var openFile = function openFile() {
    fileRef.current.click();
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setSubmitted(true);
    var established_year = "".concat(inputs.date, "/").concat(inputs.month, "/").concat(inputs.year);
    var formData = new FormData();
    formData.append('file', inputs.file);
    formData.append('name', inputs.name);
    formData.append('category_id', inputs.category_id);
    formData.append('established_year', established_year);
    formData.append('about', inputs.about);
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("".concat(_Constants__WEBPACK_IMPORTED_MODULE_12__["API_PATH"], "companies"), formData, {
      onUploadProgress: function onUploadProgress(progressEvent) {
        setUpload(Math.round(progressEvent.loaded * 100 / progressEvent.total));
      }
    }).then(function (response) {
      return response.data;
    }).then(function (res) {
      console.log(upload);

      if (res.status) {
        setLoading(false);
        setSubmitted(false);
        setDone(true);
        setCompany(res.company);
      }
    });
    console.log(inputs);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, done ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CompanyContact__WEBPACK_IMPORTED_MODULE_13__["default"], {
    company: company
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.formContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, props.creation === 'first_creation' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.welcome
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    style: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["green"][500],
      marginBottom: 25
    }
  }, "Hi, ".concat(userData.data.first_name, " welcome to MyStock. We love you be here since you are registered\n                                                         as company representative we need your company information. Can you register your company please"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'h4',
    className: classes.formInfo
  }, "Company registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Company name',
    onChange: handleInputChange,
    name: "name",
    type: "text",
    value: inputs.name,
    validators: ['required']
  }), dataLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 50,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["grey"][500]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    variant: 'outlined',
    className: classes.text_input
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Select your company category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    label: 'Select your company category',
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: category,
    onChange: handleChange
  }, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
      key: category.id,
      value: category.id
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.birthDate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary',
    style: {
      marginBottom: 10
    }
  }, "Establishement year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.genderInnerLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    onChange: handleInputChange,
    style: {
      marginRight: 15
    },
    name: 'date',
    value: inputs.date,
    label: 'DD',
    type: 'number',
    variant: "outlined"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    onChange: handleInputChange,
    style: {
      marginRight: 15
    },
    name: 'month',
    type: 'number',
    value: inputs.month,
    label: 'MM',
    variant: "outlined"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    onChange: handleInputChange,
    style: {
      marginRight: 15
    },
    name: "year",
    type: 'number',
    value: inputs.year,
    label: 'YY',
    variant: "outlined"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextareaAutosize"], {
    variant: 'outlined',
    "aria-label": "minimum height",
    className: classes.text_area,
    rowsMin: 10,
    name: 'about',
    onChange: handleInputChange,
    value: inputs.about,
    placeholder: "Add about to your company"
  }), ";", imageUrl === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.upload
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Upload company logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: 'file',
    style: {
      display: 'none'
    },
    ref: fileRef,
    onChange: handleFileChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: openFile,
    variant: 'outlined',
    color: 'secondary',
    style: {
      textTransform: 'none',
      marginLeft: 25
    }
  }, "Upload")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.company_logo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: imageUrl,
    style: {
      width: 'auto',
      height: 'auto'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_commons_LoadingButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.text_input,
    color: "secondary",
    variant: "outlined",
    type: "submit",
    disabled: !isEnabled || submitted,
    loading: loadingSet,
    text: 'Register company',
    done: finished
  }, 'Register company'))));
}

/* harmony default export */ __webpack_exports__["default"] = (RegisterNewCompany);

/***/ }),

/***/ "./resources/js/auth/company/components/company/styles/CompanyStyle.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/auth/company/components/company/styles/CompanyStyle.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var CompanyStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    grow: {
      flexGrow: 1
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%'
    },
    formInfo: {
      marginBottom: 20
    },
    text_input: {
      width: '100%',
      marginBottom: 50
    },
    text_area: {
      width: '100%',
      padding: 10,
      marginBottom: 50
    },
    birthDate: {
      display: "flex",
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: 30
    },
    genderInnerLayout: {
      display: "flex",
      flexDirection: 'row'
    },
    upload: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 25
    },
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    welcome: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    company_logo: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 20
    },
    noStock: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    noLoan: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    info: {
      marginBottom: 20
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (CompanyStyle);

/***/ }),

/***/ "./resources/js/auth/company/components/dashboard/Dashboard.js":
/*!*********************************************************************!*\
  !*** ./resources/js/auth/company/components/dashboard/Dashboard.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_auth_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../style/auth_style */ "./resources/js/auth/style/auth_style.js");
/* harmony import */ var _commons_drawers_DrawerProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commons/drawers/DrawerProfile */ "./resources/js/commons/drawers/DrawerProfile.js");
/* harmony import */ var _themes_app_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../themes/app_theme */ "./resources/js/themes/app_theme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commons_drawers_AdminDrawerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commons/drawers/AdminDrawerMenu */ "./resources/js/commons/drawers/AdminDrawerMenu.js");
/* harmony import */ var _data_drawerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/drawerMenu */ "./resources/js/auth/company/data/drawerMenu.js");
/* harmony import */ var _company_CompanyHome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../company/CompanyHome */ "./resources/js/auth/company/components/company/CompanyHome.js");
/* harmony import */ var _commons_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../commons/Logout */ "./resources/js/commons/Logout.js");
/* harmony import */ var _company_CompanyProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../company/CompanyProfile */ "./resources/js/auth/company/components/company/CompanyProfile.js");
/* harmony import */ var _stock_Stocks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stock/Stocks */ "./resources/js/auth/company/components/stock/Stocks.js");
/* harmony import */ var _loans_Loans__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loans/Loans */ "./resources/js/auth/company/components/loans/Loans.js");
/* harmony import */ var _company_MyCompanies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../company/MyCompanies */ "./resources/js/auth/company/components/company/MyCompanies.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var Dashboard = function Dashboard(props) {
  var classes = Object(_style_auth_style__WEBPACK_IMPORTED_MODULE_2__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      mobileOpen = _useState2[0],
      setMobileOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("Dashboard"),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var container = props.container;
  var drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classes.drawerRoot
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_commons_drawers_DrawerProfile__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_commons_drawers_AdminDrawerMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    menu: _data_drawerMenu__WEBPACK_IMPORTED_MODULE_7__["default"]
  }));

  var handleDrawerToggle = function handleDrawerToggle(value, page) {
    return function (event) {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setMobileOpen(value);
      setCurrentPage(value);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CssBaseline"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
    className: classes.drawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    smUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["SwipeableDrawer"], {
    container: container,
    variant: "temporary",
    anchor: _themes_app_theme__WEBPACK_IMPORTED_MODULE_4__["default"].direction === 'rtl' ? 'right' : 'left',
    open: mobileOpen,
    onOpen: handleDrawerToggle(true, currentPage),
    onClose: handleDrawerToggle(false, currentPage),
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    }
  }, drawer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    xsDown: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["SwipeableDrawer"], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: mobileOpen,
    onOpen: handleDrawerToggle(true, currentPage),
    onClose: handleDrawerToggle(false, currentPage)
  }, drawer))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: 'lg'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth',
    component: _company_CompanyHome__WEBPACK_IMPORTED_MODULE_8__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth/profile',
    component: _company_CompanyProfile__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth/stocks',
    component: _stock_Stocks__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth/loans',
    component: _loans_Loans__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth/company',
    component: _company_MyCompanies__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: '/auth/logout',
    component: _commons_Logout__WEBPACK_IMPORTED_MODULE_9__["default"]
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/auth/company/components/loans/LoanItem.js":
/*!****************************************************************!*\
  !*** ./resources/js/auth/company/components/loans/LoanItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_LoanStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LoanStyle */ "./resources/js/auth/company/components/loans/styles/LoanStyle.js");




function LoanItem(props) {
  var classes = Object(_styles_LoanStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var loan = props.loan;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.loanItemContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Loan type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.label
  }, loan.loan_type.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.loanInterest
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Number of months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.label
  }, loan.number_of_month)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    orientation: 'vertical',
    flexItem: true,
    className: classes.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Interest rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.label
  }, "".concat(loan.interest_rate, "%")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Loan description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.label
  }, loan.description)));
}

/* harmony default export */ __webpack_exports__["default"] = (LoanItem);

/***/ }),

/***/ "./resources/js/auth/company/components/loans/Loans.js":
/*!*************************************************************!*\
  !*** ./resources/js/auth/company/components/loans/Loans.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _LoanItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoanItem */ "./resources/js/auth/company/components/loans/LoanItem.js");











function Loans() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.authReducer.userData.loading;
  });
  var userData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_4__["index"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_5__["API_PATH"], "me"), _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_6__["ME"]));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: 'md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    elevation: 0,
    style: {
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: "Loan product",
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Edit"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    width: '100%',
    height: 100,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["grey"][500]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, userData.data.loans.map(function (loan) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LoanItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      loan: loan
    });
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Loans);

/***/ }),

/***/ "./resources/js/auth/company/components/loans/forms/CreateLoan.js":
/*!************************************************************************!*\
  !*** ./resources/js/auth/company/components/loans/forms/CreateLoan.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/CompanyConstants */ "./resources/js/auth/company/state/CompanyConstants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_LoanStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/LoanStyle */ "./resources/js/auth/company/components/loans/styles/LoanStyle.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../commons/forms/UseForm */ "./resources/js/commons/forms/UseForm.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _commons_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../commons/LoadingButton */ "./resources/js/commons/LoadingButton.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function CreateLoan(props) {
  var classes = Object(_styles_LoanStyle__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      type = _React$useState2[0],
      setType = _React$useState2[1];

  var _UseForm = Object(_commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_8__["default"])({
    company_id: '',
    loan_type_id: '',
    month: '',
    interest: '',
    description: ''
  }),
      inputs = _UseForm.inputs,
      handleInputChange = _UseForm.handleInputChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      finished = _useState6[0],
      setFinished = _useState6[1];

  var loadingSet = !finished && loading;

  if (props.type === 'edit') {
    inputs.company_id = props.data.company_id;
    inputs.loan_type_id = props.data.loan_type_id;
    inputs.month = props.data.number_of_month;
    inputs.interest = props.data.interest_rate;
    inputs.description = props.data.description;
  }

  var isEnabled = inputs.month > 0 && inputs.interest > 0 && inputs.loan_type_id > 0 && inputs.description.length > 0; //state management handling

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var dataLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.loanReducer.loanTypeLoading;
  });
  var loanType = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.loanReducer.loanType;
  });
  var response = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.loanReducer.response;
  }); //loan creation completed

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      done = _useState8[0],
      setDone = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_1__["index"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_9__["API_PATH"], "loan_type"), _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_2__["FETCH_LOAN_TYPE"]));
    inputs.company_id = props.company[0].id;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (response.status) {
      setDone(true);
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    }
  });

  var handleChange = function handleChange(event) {
    setType(event.target.value);
    inputs.loan_type_id = event.target.value;
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_1__["store"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_9__["API_PATH"], "loans"), inputs, _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_2__["STORE_LOAN"]));
    setSubmitted(true);
    setLoading(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, done ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: 'h5',
    style: {
      color: green[500]
    }
  }, "Congratulations your loan is created successfully") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, dataLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Skeleton"], {
    variant: 'rect',
    width: '90%',
    height: 30,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["grey"][500]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    variant: 'outlined',
    className: classes.text_input
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Select loan type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Select"], {
    label: 'Select company name',
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: type,
    onChange: handleChange
  }, loanType.map(function (loan) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      key: loan.id,
      value: loan.id
    }, loan.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Loan month',
    onChange: handleInputChange,
    name: "month",
    type: "number",
    value: inputs.month,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Loan interest',
    onChange: handleInputChange,
    name: "interest",
    type: "number",
    value: inputs.interest,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextareaAutosize"], {
    variant: 'outlined',
    "aria-label": "minimum height",
    className: classes.text_input,
    rowsMin: 10,
    name: 'description',
    onChange: handleInputChange,
    value: inputs.description,
    placeholder: "Add stock description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_LoadingButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.text_input,
    color: "secondary",
    variant: "outlined",
    type: "submit",
    disabled: !isEnabled || submitted,
    loading: loadingSet,
    text: 'Create loan',
    done: finished
  }, 'Create loan')));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateLoan);

/***/ }),

/***/ "./resources/js/auth/company/components/loans/styles/LoanStyle.js":
/*!************************************************************************!*\
  !*** ./resources/js/auth/company/components/loans/styles/LoanStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var FormStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    text_input: {
      width: '90%',
      marginBottom: 25,
      padding: 5
    },
    loanItemContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    miniContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 40
    },
    label: {
      color: 'black',
      fontWeight: "bold"
    },
    loanInterest: {
      display: "flex",
      flexDirection: 'row'
    },
    divider: {
      marginLeft: 100,
      marginRight: 100
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (FormStyle);

/***/ }),

/***/ "./resources/js/auth/company/components/stock/StockItem.js":
/*!*****************************************************************!*\
  !*** ./resources/js/auth/company/components/stock/StockItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_stockStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/stockStyle */ "./resources/js/auth/company/components/stock/styles/stockStyle.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _data_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/chart */ "./resources/js/auth/company/data/chart.js");






function StockItem(props) {
  var classes = Object(_styles_stockStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var stock = props.stock;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.stockItemContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Selling price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.label
  }, "".concat(stock.stock_price, " ETB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Selling price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.label
  }, stock.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.miniContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: 'textSecondary'
  }, "Stock data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["LineChart"], {
    width: 500,
    height: 300,
    data: _data_chart__WEBPACK_IMPORTED_MODULE_4__["lineData"],
    margin: {
      top: 20,
      right: 5,
      left: 5,
      bottom: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "pv",
    stroke: "#8884d8",
    activeDot: {
      r: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "uv",
    stroke: "#82ca9d"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (StockItem);

/***/ }),

/***/ "./resources/js/auth/company/components/stock/Stocks.js":
/*!**************************************************************!*\
  !*** ./resources/js/auth/company/components/stock/Stocks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _StockItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StockItem */ "./resources/js/auth/company/components/stock/StockItem.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");











function Stocks() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var userData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.userData.loading;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_1__["index"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_3__["API_PATH"], "me"), _state_AuthConnstant__WEBPACK_IMPORTED_MODULE_4__["ME"]));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 100,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["grey"][500]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    maxWidth: 'md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    elevation: 0,
    style: {
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    title: 'Stock product',
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Edit"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    stock: userData.data.stock
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Stocks);

/***/ }),

/***/ "./resources/js/auth/company/components/stock/forms/CreateStock.js":
/*!*************************************************************************!*\
  !*** ./resources/js/auth/company/components/stock/forms/CreateStock.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _commons_forms_UseForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commons/forms/UseForm */ "./resources/js/commons/forms/UseForm.js");
/* harmony import */ var _commons_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../commons/LoadingButton */ "./resources/js/commons/LoadingButton.js");
/* harmony import */ var _styles_stockStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/stockStyle */ "./resources/js/auth/company/components/stock/styles/stockStyle.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../state/CompanyConstants */ "./resources/js/auth/company/state/CompanyConstants.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../Constants */ "./resources/js/Constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function CreateStock(props) {
  var classes = Object(_styles_stockStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(); //form validator variable

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    company_id: '',
    price: '',
    amount: '',
    description: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      submitted = _useState4[0],
      setSubmitted = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      finished = _useState8[0],
      setFinished = _useState8[1];

  var loadingSet = !finished && loading;

  if (props.type === 'edit') {
    formData.company_id = props.data.company_id;
    formData.price = props.data.stock_price;
    formData.amount = props.data.minimum_amount;
    formData.description = props.data.description;
  }

  var isEnabled = formData.company_id > 0 && formData.price > 0 && formData.amount > 0 && formData.description.length > 0; //check company existence

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      singleCompany = _useState10[0],
      setSingleCompany = _useState10[1]; //state management variable


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var response = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.companyReducer.stockReducer.response;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (response.status) {
      setLoading(true);
      setSubmitted(true);
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.company.length === 1) {
      formData.company_id = props.company[0].id;
      setSingleCompany(true);
    } else {
      setSingleCompany(false);
    }
  });

  var handleChange = function handleChange(event) {
    formData.company_id = event.target.value;
  };

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setFormData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setLoading(true);
    setSubmitted(true);

    if (props.type === 'edit') {
      dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_6__["update"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_8__["API_PATH"], "stocks"), props.data.id, formData, _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_7__["UPDATE_STOCK"]));
    } else {
      dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_6__["store"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_8__["API_PATH"], "stocks"), formData, _state_CompanyConstants__WEBPACK_IMPORTED_MODULE_7__["STORE_STOCK"]));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, response.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'h5',
    className: classes.formLabel
  }, "Congratulations, your stock is created successfully") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, singleCompany ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.formLabel
  }, "You have only one company name as ".concat(props.company[0].name, ".So you are going to create stock for this company")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    variant: 'outlined',
    className: classes.text_input
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Select company name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    label: 'Select company name',
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: region,
    onChange: handleChange
  }, props.company.map(function (company) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
      key: company.id,
      value: company.id
    }, company.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Stock price',
    onChange: handleInputChange,
    name: "price",
    type: "number",
    value: formData.price,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    variant: 'outlined',
    className: classes.text_input,
    label: 'Stock minimum price',
    onChange: handleInputChange,
    name: "amount",
    type: "number",
    value: formData.amount,
    validators: ['required']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextareaAutosize"], {
    variant: 'outlined',
    "aria-label": "minimum height",
    className: classes.text_input,
    rowsMin: 10,
    name: 'description',
    onChange: handleInputChange,
    value: formData.description,
    placeholder: "Add stock description"
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.button,
    color: "secondary",
    variant: "outlined",
    type: "submit",
    disabled: !isEnabled || submitted,
    loading: loadingSet,
    text: 'Create stock',
    done: finished
  }, 'Register company')));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateStock);

/***/ }),

/***/ "./resources/js/auth/company/components/stock/styles/stockStyle.js":
/*!*************************************************************************!*\
  !*** ./resources/js/auth/company/components/stock/styles/stockStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");


var stockStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    formLabel: {
      margin: 15,
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][500]
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    text_input: {
      width: '90%',
      marginBottom: 25,
      padding: 5
    },
    button: {
      width: '90%',
      textTransform: 'none'
    },
    stockItemContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    miniContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 40
    },
    label: {
      color: 'black',
      fontWeight: "bold"
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (stockStyle);

/***/ }),

/***/ "./resources/js/auth/company/data/chart.js":
/*!*************************************************!*\
  !*** ./resources/js/auth/company/data/chart.js ***!
  \*************************************************/
/*! exports provided: lineData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineData", function() { return lineData; });
var lineData = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

/***/ }),

/***/ "./resources/js/auth/company/data/drawerMenu.js":
/*!******************************************************!*\
  !*** ./resources/js/auth/company/data/drawerMenu.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_DirectionsCar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/DirectionsCar */ "./node_modules/@material-ui/icons/DirectionsCar.js");
/* harmony import */ var _material_ui_icons_DirectionsCar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsCar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Videocam */ "./node_modules/@material-ui/icons/Videocam.js");
/* harmony import */ var _material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Videocam__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AttachMoney */ "./node_modules/@material-ui/icons/AttachMoney.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MusicNote */ "./node_modules/@material-ui/icons/MusicNote.js");
/* harmony import */ var _material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Extension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Extension */ "./node_modules/@material-ui/icons/Extension.js");
/* harmony import */ var _material_ui_icons_Extension__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Extension__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Business */ "./node_modules/@material-ui/icons/Business.js");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");












var drawerMenu = [{
  name: 'Dashboard',
  route: '/auth',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0___default.a, null)
}, {
  name: 'My profile',
  route: '/auth/profile',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6___default.a, null)
}, {
  name: 'My stocks',
  route: '/auth/stocks',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Store"], null)
}, {
  name: 'My loans',
  route: '/auth/loans',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_4___default.a, null)
}, {
  name: 'My companies',
  route: '/auth/company',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8___default.a, null)
}, {
  name: 'Logout',
  route: '/auth/logout',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, null)
}];
/* harmony default export */ __webpack_exports__["default"] = (drawerMenu);

/***/ }),

/***/ "./resources/js/auth/style/auth_style.js":
/*!***********************************************!*\
  !*** ./resources/js/auth/style/auth_style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var drawerWidth = 240;
var authstyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      padding: 0,
      backgroundColor: '#f4f6f9',
      height: '100vh'
    },
    parent: {
      backgroundColor: 'transparent',
      marginRight: 20,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      '&:hover': {
        backgroundColor: '#111236',
        color: 'white',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
      }
    },
    drawerRoot: {
      backgroundColor: '#000c15',
      height: '100%',
      width: '100%',
      position: 'relative',
      color: '#47536b'
    },
    avatarLayout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: "center",
      height: '100%',
      width: '100%'
    },
    avatarImage: {
      margin: 3,
      marginRight: 10
    },
    drawer: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: _defineProperty({
      marginLeft: drawerWidth,
      backgroundColor: 'white'
    }, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      backgroundColor: 'white'
    }),
    menuButton: _defineProperty({
      marginRight: theme.spacing(2),
      display: 'none'
    }, theme.breakpoints.up('xs'), {
      display: 'flex'
    }),
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      paddingTop: 20
    },
    grow: {
      flexGrow: 1
    },
    nested: {
      paddingLeft: theme.spacing(6)
    },
    flags: {
      paddingRight: 20
    },
    language: _defineProperty({
      display: 'flex',
      marginRight: 10,
      textAlign: 'center',
      fontSize: 14
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    card1: _defineProperty({
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["deepOrange"][500],
      color: 'white'
    }, theme.breakpoints.down('xs'), {
      width: '100%'
    }),
    card2: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["deepPurple"][500],
      color: 'white',
      paddingBottom: 0,
      paddingTop: 0
    },
    card3: {
      backgroundColor: '#3C4252',
      color: 'white'
    },
    card4: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["green"][500],
      color: 'white'
    },
    cardActions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "flex-end",
      alignItems: 'center'
    },
    logo: _defineProperty({
      display: 'flex'
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    app_name: _defineProperty({
      marginLeft: 10,
      display: 'flex'
    }, theme.breakpoints.down('xs'), {
      marginLeft: -20
    }),
    profile: _defineProperty({
      display: 'flex'
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    circleAvator: {
      width: 100,
      height: 100,
      borderRadius: '50%',
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["deepOrange"][500],
      alignItems: 'center',
      color: 'white',
      fontSize: '2.5em',
      justifyContent: 'center'
    },
    sub_menu: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][800],
      border: '1px solid #2B2B2B'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (authstyle);

/***/ }),

/***/ "./resources/js/commons/Logout.js":
/*!****************************************!*\
  !*** ./resources/js/commons/Logout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _TokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TokenService */ "./resources/js/TokenService.js");




function Logout() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_TokenService__WEBPACK_IMPORTED_MODULE_2__["removeToken"])();
    Object(_TokenService__WEBPACK_IMPORTED_MODULE_2__["removeRole"])();
    history.push('/');
    window.location.reload();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Logging out...");
}

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./resources/js/commons/drawers/AdminDrawerMenu.js":
/*!*********************************************************!*\
  !*** ./resources/js/commons/drawers/AdminDrawerMenu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_style_auth_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/style/auth_style */ "./resources/js/auth/style/auth_style.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function AdminDrawerMenu(props) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      prevState = _useState2[0],
      setPrevState = _useState2[1];

  var classes = Object(_auth_style_auth_style__WEBPACK_IMPORTED_MODULE_7__["default"])();

  var handleClick = function handleClick(item) {
    setPrevState(item);
  };

  var handler = function handler(children) {
    var classes = Object(_auth_style_auth_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var state = _this.state;
    return children.map(function (subOption) {
      if (!subOption.children) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: subOption.name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
          button: true,
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
          to: subOption.route,
          key: subOption.name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
          inset: true,
          primary: subOption.name
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: subOption.name,
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        button: true,
        onClick: function onClick() {
          return _this.handleClick(subOption.name);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
        inset: true,
        primary: subOption.name
      }), state[subOption.name] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_10__["default"], {
        "in": state[subOption.name],
        timeout: "auto",
        unmountOnExit: true
      }, _this.handler(subOption.children)));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      overflowY: 'auto',
      backgroundColor: 'transparent',
      marginTop: 50
    }
  }, props.menu.map(function (item) {
    return item.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      button: true,
      onClick: function onClick() {
        return _this.handleClick(item.name);
      },
      className: classes.parent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.icons
    }, item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: item.name
    }), _this.state[item.name] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.sub_menu,
      "in": _this.state[item.name],
      timeout: "auto",
      unmountOnExit: true
    }, _this.handler(item.children))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      button: true,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: item.route,
      key: item.name,
      className: classes.parent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        color: '#53607b'
      }
    }, item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: item.name
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AdminDrawerMenu);

/***/ }),

/***/ "./resources/js/commons/drawers/DrawerProfile.js":
/*!*******************************************************!*\
  !*** ./resources/js/commons/drawers/DrawerProfile.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_AppAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/AppAction */ "./resources/js/state/AppAction.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Constants */ "./resources/js/Constants.js");
/* harmony import */ var _auth_state_AuthConnstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/state/AuthConnstant */ "./resources/js/auth/state/AuthConnstant.js");
/* harmony import */ var _loaders_ProfileLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loaders/ProfileLoader */ "./resources/js/loaders/ProfileLoader.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");









var DrawerProfile = function DrawerProfile() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.userData.loading;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.authReducer.userData.user;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_state_AppAction__WEBPACK_IMPORTED_MODULE_3__["index"])("".concat(_Constants__WEBPACK_IMPORTED_MODULE_4__["API_PATH"], "me"), _auth_state_AuthConnstant__WEBPACK_IMPORTED_MODULE_5__["ME"]));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loaders_ProfileLoader__WEBPACK_IMPORTED_MODULE_6__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    style: {
      width: 60,
      height: 60
    }
  }, user.data.first_name.charAt(0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, user.data.role[0].id === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 25,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#47536b'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, "Company dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, "".concat(user.data.first_name, " ").concat(user.data.last_name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], null, "".concat(user.data.first_name, " ").concat(user.data.last_name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (DrawerProfile);

/***/ }),

/***/ "./resources/js/loaders/HorizontalLoader.js":
/*!**************************************************!*\
  !*** ./resources/js/loaders/HorizontalLoader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_LoaderStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/LoaderStyle */ "./resources/js/loaders/styles/LoaderStyle.js");





function HorizontalLoader() {
  var classes = Object(_styles_LoaderStyle__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 25,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][500],
      marginBottom: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 25,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][500],
      marginBottom: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 25,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][500],
      marginBottom: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'rect',
    width: '100%',
    height: 25,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][500],
      marginBottom: 15
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HorizontalLoader);

/***/ }),

/***/ "./resources/js/loaders/ProfileLoader.js":
/*!***********************************************!*\
  !*** ./resources/js/loaders/ProfileLoader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _styles_LoaderStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LoaderStyle */ "./resources/js/loaders/styles/LoaderStyle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function ProfileLoader() {
  var classes = Object(_styles_LoaderStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.profile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'circle',
    width: 60,
    height: 60,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][500],
      marginBottom: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    variant: 'text',
    width: '50%',
    height: 20,
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][500]
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileLoader);

/***/ }),

/***/ "./resources/js/loaders/styles/LoaderStyle.js":
/*!****************************************************!*\
  !*** ./resources/js/loaders/styles/LoaderStyle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var LoaderStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    profile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ })

}]);