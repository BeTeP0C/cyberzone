"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rstore",{

/***/ "./components/Products/Products.tsx":
/*!******************************************!*\
  !*** ./components/Products/Products.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Products: function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _products_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.module.scss */ \"./components/Products/products.module.scss\");\n/* harmony import */ var _products_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_products_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product/Product */ \"./components/Products/Product/Product.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"./components/Products/Modal/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        open: false,\n        id: \"0\"\n    });\n    function changeOpened(e) {\n        // document.body.classList.add(modalStyles.modalOpen)\n        setOpened({\n            open: !opened.open,\n            id: e.target.id\n        });\n        document.body.style.overflowY = \"hidden\";\n        const ovelay = document.getElementById(\"ovelay\");\n        ovelay.setAttribute(\"styles\", \"\".concat(ovelay.getBoundingClientRect().top));\n    // document.body.setAttribute(\"style\", \"position: relative; top: 1000px;\")\n    // document.body.style.height = \"100vh\"\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_products_module_scss__WEBPACK_IMPORTED_MODULE_2___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_3__.Product, {\n                props: changeOpened\n            }, void 0, false, {\n                fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Products\\\\Products.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                props: {\n                    opened,\n                    setOpened\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Products\\\\Products.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Products\\\\Products.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(Products, \"nGQnhfWPdMJL7CViqluAx/UrsHA=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUVWO0FBQ1c7QUFDWjtBQU96QixTQUFTSzs7SUFDWixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7UUFDakNNLE1BQU07UUFDTkMsSUFBSTtJQUNSO0lBRUEsU0FBU0MsYUFBY0MsQ0FBTTtRQUN6QixxREFBcUQ7UUFFckRKLFVBQVU7WUFDTkMsTUFBTSxDQUFDRixPQUFPRSxJQUFJO1lBQ2xCQyxJQUFJRSxFQUFFQyxNQUFNLENBQUNILEVBQUU7UUFDbkI7UUFFQUksU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRztRQUNoQyxNQUFNQyxTQUFTSixTQUFTSyxjQUFjLENBQUM7UUFDdkNELE9BQU9FLFlBQVksQ0FBQyxVQUFVLEdBQXNDLE9BQW5DRixPQUFPRyxxQkFBcUIsR0FBR0MsR0FBRztJQUNuRSwwRUFBMEU7SUFDMUUsdUNBQXVDO0lBQzNDO0lBRUEscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVd0QixzRUFBYzs7MEJBQzlCLDhEQUFDRSxxREFBT0E7Z0JBQUNxQixPQUFPZDs7Ozs7OzBCQUNoQiw4REFBQ04seUNBQUtBO2dCQUFDb0IsT0FBTztvQkFBQ2xCO29CQUFRQztnQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVDO0dBM0JnQkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy50c3g/OGMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHMubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgbW9kYWxTdHlsZXMgZnJvbSBcIi4vTW9kYWwvbW9kYWwubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbnR5cGUgVE9wZW5Nb2RhbCA9IHtcclxuICAgIG9wZW46IGJvb2xlYW4sXHJcbiAgICBpZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0cyAoKSB7XHJcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgIGlkOiBcIjBcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU9wZW5lZCAoZTogYW55KSB7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKG1vZGFsU3R5bGVzLm1vZGFsT3BlbilcclxuXHJcbiAgICAgICAgc2V0T3BlbmVkKHtcclxuICAgICAgICAgICAgb3BlbjogIW9wZW5lZC5vcGVuLFxyXG4gICAgICAgICAgICBpZDogZS50YXJnZXQuaWQsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiXHJcbiAgICAgICAgY29uc3Qgb3ZlbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVsYXlcIikgXHJcbiAgICAgICAgb3ZlbGF5LnNldEF0dHJpYnV0ZShcInN0eWxlc1wiLCBgJHtvdmVsYXkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wfWApXHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAxMDAwcHg7XCIpXHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPFByb2R1Y3QgcHJvcHM9e2NoYW5nZU9wZW5lZH0vPlxyXG4gICAgICAgICAgICA8TW9kYWwgcHJvcHM9e3tvcGVuZWQsIHNldE9wZW5lZH19Lz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIlByb2R1Y3QiLCJNb2RhbCIsIlByb2R1Y3RzIiwib3BlbmVkIiwic2V0T3BlbmVkIiwib3BlbiIsImlkIiwiY2hhbmdlT3BlbmVkIiwiZSIsInRhcmdldCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3dZIiwib3ZlbGF5IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products/Products.tsx\n"));

/***/ })

});