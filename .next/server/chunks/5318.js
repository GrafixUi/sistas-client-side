"use strict";
exports.id = 5318;
exports.ids = [5318];
exports.modules = {

/***/ 5318:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3069);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _CompareTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6375);





const CompareModal = ({ compare , closeCompareModal , deleteFromCompare: deleteFromCompare1 , clearCompare: clearCompare1  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-xl-12",
                    children: compare.items.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompareTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                data: compare.items,
                                features: [
                                    "name",
                                    "price",
                                    "size"
                                ],
                                deleteFromCompare: deleteFromCompare1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "clear-btn",
                                    onClick: clearCompare1,
                                    children: "Clear All"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "No Products"
                    })
                })
            })
        })
    });
};
const mapStateToProps = (state)=>({
        compare: state.compare
    })
;
const mapDispatchToProps = {
    closeCompareModal: _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_4__/* .closeCompareModal */ .iH,
    clearCompare: _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_4__/* .clearCompare */ ._Z,
    deleteFromCompare: _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_4__/* .deleteFromCompare */ .Ht
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CompareModal));


/***/ })

};
;