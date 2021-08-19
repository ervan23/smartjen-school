"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/auth */ "./resources/js/Helpers/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      users: [],
      selectedRole: null
    };
  },
  beforeMount: function beforeMount() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  },
  mounted: function mounted() {
    this.getUserByRole();
  },
  methods: {
    getUserByRole: function getUserByRole() {
      if (this.role.isAdmin) {
        this.selectedRole = null;
      } else if (this.role.isStudent) {
        this.selectedRole = _Helpers_auth__WEBPACK_IMPORTED_MODULE_1__.Role.STUDENT;
      } else if (this.role.isTeacher) {
        this.selectedRole = _Helpers_auth__WEBPACK_IMPORTED_MODULE_1__.Role.TEACHER;
      }

      this.getListUser(this.selectedRole);
    },
    changeSelectedRole: function changeSelectedRole(role) {
      this.selectedRole = role;
      this.getListUser(this.selectedRole);
    },
    getListUser: function getListUser(role) {
      var _this = this;

      this.users = [];
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/v1/user', {
        params: {
          role: role
        }
      }).then(function (response) {
        var data = response.data;
        _this.users = data.payload;
        _this.loading = false;
      }, // eslint-disable-next-line no-unused-vars
      function (error) {
        _this.loading = false;

        _this.$message({
          message: 'Failed to fetch user',
          type: 'warning'
        });
      });
    },
    confirmDelete: function confirmDelete(id) {
      var _this2 = this;

      this.$msgBox.confirm('Delete this user ?', 'Confirmation', {
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        _this2.deleteUser(id);
      })["catch"](function () {});
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().delete("api/v1/user/".concat(id)).then(function (response) {
        var data = response.data;

        if (data.success) {
          _this3.getListUser();

          _this3.$message({
            message: 'User Deleted',
            type: 'success'
          });
        }
      }, // eslint-disable-next-line no-unused-vars
      function (error) {
        _this3.$message({
          message: 'Failed to delete user',
          type: 'warning'
        });
      });
    },
    getStringRole: function getStringRole(role) {
      return (0,_Helpers_auth__WEBPACK_IMPORTED_MODULE_1__.getRole)(role);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    loggedIn: function loggedIn(state) {
      return state.auth.isLoggedIn;
    },
    authUser: function authUser(state) {
      return state.auth.user;
    },
    role: function role(state) {
      return state.role;
    }
  }))
});

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row my-4" }, [
        _c("h4", { staticClass: "text-dark" }, [
          _vm._v("Hi, " + _vm._s(_vm.authUser.name) + " ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 table-responsive" }, [
          _vm.role.isAdmin
            ? _c(
                "div",
                { staticClass: "d-flex justify-content-end" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { to: { name: "invite" } }
                    },
                    [_vm._v("Invite")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role.isTeacher
            ? _c("div", { staticClass: "d-flex justify-content-center" }, [
                _c("ul", { staticClass: "nav nav-pills" }, [
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        class: { active: _vm.selectedRole == 1 },
                        attrs: {
                          "aria-current": "page",
                          href: "javascript:void(0)"
                        },
                        on: {
                          click: function($event) {
                            return _vm.changeSelectedRole(1)
                          }
                        }
                      },
                      [_vm._v("Teacher")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        class: { active: _vm.selectedRole == 2 },
                        attrs: {
                          "aria-current": "page",
                          href: "javascript:void(0)"
                        },
                        on: {
                          click: function($event) {
                            return _vm.changeSelectedRole(2)
                          }
                        }
                      },
                      [_vm._v("Student")]
                    )
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("table", { staticClass: "table table-striped" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users, function(user) {
                return _c("tr", { key: user.id }, [
                  _c("td", [_vm._v(_vm._s(user.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.email))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.getStringRole(user.role)))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group",
                        attrs: { role: "group", "aria-label": "Basic example" }
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              to: { name: "chat", params: { id: user.id } }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-comments-o" })]
                        ),
                        _vm._v(" "),
                        _vm.role.isAdmin
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.confirmDelete(user.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-trash" })]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);