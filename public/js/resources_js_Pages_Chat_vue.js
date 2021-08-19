"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      chats: [],
      msg: null,
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getChatList(this.$route.params.id);
    window.Echo["private"]('chats').listen('ChatSent', function (e) {
      if (e.receiver_id == _this.user.id && e.sender_id == _this.$route.params.id) {
        _this.chats.push({
          id: new Date().getTime(),
          sender_id: e.sender_id,
          receiver_id: e.receiver_id,
          message: e.message
        });
      }
    });
    console.log(window.Echo);
  },
  methods: {
    getChatList: function getChatList(receiver) {
      var _this2 = this;

      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/v1/chat/".concat(receiver)).then(function (response) {
        var data = response.data;
        _this2.chats = data.payload;
        _this2.loading = false;
      }, // eslint-disable-next-line no-unused-vars
      function (error) {
        _this2.loading = false;

        _this2.$message({
          message: 'Failed to fecth chat',
          type: 'warning'
        });
      });
    },
    sendMsg: function sendMsg() {
      var _this3 = this;

      if (!this.msg) {
        return;
      }

      var receiver = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("api/v1/chat/".concat(receiver), {
        message: this.msg
      }).then(function (response) {
        var data = response.data;

        if (data.success) {
          _this3.chats.push({
            id: new Date().getTime(),
            sender_id: _this3.user.id,
            receiver_id: receiver,
            message: _this3.msg
          });

          _this3.msg = null;
        }
      }, // eslint-disable-next-line no-unused-vars
      function (error) {
        _this3.$message({
          message: 'Failed to send chat',
          type: 'warning'
        });
      });
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    user: function user(state) {
      return state.auth.user;
    }
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.received_msg[data-v-45e8c2fe] {\n\tdisplay: inline-block;\n\tpadding: 0 0 0 10px;\n\tvertical-align: top;\n\twidth: 92%;\n}\n.received_withd_msg p[data-v-45e8c2fe] {\n\tbackground: #ebebeb none repeat scroll 0 0;\n\tborder-radius: 0 15px 15px 15px;\n\tcolor: #646464;\n\tfont-size: 14px;\n\tmargin: 0;\n\tpadding: 5px 10px 5px 12px;\n\twidth: 100%;\n}\n.time_date[data-v-45e8c2fe] {\n\tcolor: #747474;\n\tdisplay: block;\n\tfont-size: 12px;\n\tmargin: 8px 0 0;\n}\n.received_withd_msg[data-v-45e8c2fe] {\n\twidth: 57%;\n}\n.mesgs[data-v-45e8c2fe]{\n\tfloat: left;\n\tpadding: 30px 15px 0 25px;\n\twidth:70%;\n}\n.sent_msg p[data-v-45e8c2fe] {\n\tbackground:#0465ac;\n\tborder-radius: 12px 15px 15px 0;\n\tfont-size: 14px;\n\tmargin: 0;\n\tcolor: #fff;\n\tpadding: 5px 10px 5px 12px;\n\twidth: 100%;\n}\n.outgoing_msg[data-v-45e8c2fe] {\n\toverflow: hidden;\n\tmargin: 26px 0 26px;\n}\n.sent_msg[data-v-45e8c2fe] {\n\tfloat: right;\n\twidth: 46%;\n}\n.input_msg_write input[data-v-45e8c2fe] {\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n\tborder: medium none;\n\tcolor: #4c4c4c;\n\tfont-size: 15px;\n\tmin-height: 48px;\n\twidth: 100%;\n\toutline:none;\n}\n.type_msg[data-v-45e8c2fe] {\n\tborder-top: 1px solid #c4c4c4;\n\tposition: relative;\n}\n.msg_send_btn[data-v-45e8c2fe] {\n\tbackground: #05728f none repeat scroll 0 0;\n\tborder:none;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 15px;\n\theight: 33px;\n\tposition: absolute;\n\tright: 0;\n\ttop: 11px;\n\twidth: 33px;\n}\n.msg_history[data-v-45e8c2fe] {\n\theight: 516px;\n\toverflow-y: auto;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_45e8c2fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_45e8c2fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_45e8c2fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/Pages/Chat.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Chat.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_45e8c2fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=45e8c2fe&scoped=true& */ "./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_45e8c2fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css& */ "./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Chat_vue_vue_type_template_id_45e8c2fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chat_vue_vue_type_template_id_45e8c2fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "45e8c2fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Chat.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_45e8c2fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_45e8c2fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_45e8c2fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_45e8c2fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=template&id=45e8c2fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mesgs" }, [
    _c(
      "div",
      { staticClass: "msg_history" },
      _vm._l(_vm.chats, function(chat) {
        return _c("div", { key: chat.id, staticClass: "incoming_msg my-1" }, [
          _c(
            "div",
            {
              class:
                chat.sender_id === _vm.user.id ? "outgoing_msg" : "received_msg"
            },
            [
              _c(
                "div",
                {
                  class:
                    chat.sender_id === _vm.user.id
                      ? "sent_msg"
                      : "received_withd_msg"
                },
                [_c("p", [_vm._v(_vm._s(chat.message))])]
              )
            ]
          )
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "type_msg" }, [
      _c("div", { staticClass: "input_msg_write" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.msg,
              expression: "msg"
            }
          ],
          staticClass: "write_msg",
          attrs: { type: "text", placeholder: "Type a message" },
          domProps: { value: _vm.msg },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.msg = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "msg_send_btn",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.sendMsg()
              }
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-paper-plane",
              attrs: { "aria-hidden": "true" }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);