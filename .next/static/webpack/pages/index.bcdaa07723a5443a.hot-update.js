"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Authorization/Authorization.tsx":
/*!****************************************************!*\
  !*** ./components/Authorization/Authorization.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Authorization: function() { return /* binding */ Authorization; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authorization_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization.module.scss */ \"./components/Authorization/authorization.module.scss\");\n/* harmony import */ var _authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ACCOUNTS = [\n    {\n        login: \"knilpt2007@gmail.com\",\n        password: \"12d2ca1\"\n    },\n    {\n        login: \"betepok\",\n        password: \"12345\"\n    }\n];\nconst checkInputLog = (e, func)=>{\n    const value = e instanceof HTMLInputElement ? e.value : e.target.value;\n    const data = ACCOUNTS;\n    if (value === \"\") {\n        func({\n            error: true,\n            errorMessage: \"Поле не может быть пустым\"\n        });\n    } else {\n        func({\n            error: false,\n            errorMessage: \"\"\n        });\n        for (const el of data){\n            if (el.login === value) {\n                func({\n                    error: false,\n                    errorMessage: \"\"\n                });\n                break;\n            } else {\n                console.log(value);\n                func({\n                    error: true,\n                    errorMessage: \"Неправильный логин\"\n                });\n            }\n        }\n    }\n};\nconst checkInputPas = (e, func)=>{\n    const value = e instanceof HTMLInputElement ? e.value : e.target.value;\n    const data = ACCOUNTS;\n    if (value === \"\") {\n        func({\n            error: true,\n            errorMessage: \"Поле не может быть пустым\"\n        });\n    } else {\n        func({\n            error: false,\n            errorMessage: \"\"\n        });\n        for (const el of data){\n            if (el.password === value) {\n                func({\n                    error: false,\n                    errorMessage: \"\"\n                });\n                break;\n            } else {\n                func({\n                    error: true,\n                    errorMessage: \"Неправильный пароль\"\n                });\n            }\n        }\n    }\n};\nconst createError = (settings)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error),\n        children: settings.errorMessage\n    }, void 0, false, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, undefined);\n};\nconst buttonClick = (e, funcs, param)=>{\n    let [correct1, correct2] = param;\n    e.preventDefault();\n    const login = document.getElementById(\"login\");\n    const password = document.getElementById(\"password\");\n    if (login instanceof HTMLInputElement) {\n        checkInputLog(login, funcs[0]);\n    }\n    if (password instanceof HTMLInputElement) {\n        checkInputPas(password, funcs[1]);\n    }\n    if (correct1 && correct2) {\n        console.log(\"1\");\n        window.location.href = \"./rstore\";\n    }\n};\nfunction Authorization() {\n    _s();\n    const [checkErrorLog, setCheckedErrorLog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: false,\n        errorMessage: \"\"\n    });\n    const [checkErrorPas, setCheckedErrorPas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: false,\n        errorMessage: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n            action: \"GET\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                    children: \"ВХОД\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: [\n                                checkErrorLog.error ? createError(checkErrorLog) : \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"login\",\n                                    onBlur: (e)=>{\n                                        checkInputLog(e, setCheckedErrorLog);\n                                    },\n                                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    type: \"text\",\n                                    placeholder: \"Логин\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, 1, true, {\n                            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: [\n                                checkErrorPas.error ? createError(checkErrorPas) : \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"password\",\n                                    onBlur: (e)=>{\n                                        checkInputPas(e, setCheckedErrorPas);\n                                    },\n                                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    type: \"text\",\n                                    placeholder: \"Пароль\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, 2, true, {\n                            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: (e)=>{\n                        buttonClick(e, [\n                            setCheckedErrorLog,\n                            setCheckedErrorPas\n                        ], [\n                            checkErrorLog.error,\n                            checkErrorPas.error\n                        ]);\n                    },\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    children: \"Войти\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n            lineNumber: 134,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n        lineNumber: 133,\n        columnNumber: 9\n    }, this);\n}\n_s(Authorization, \"fzgo8HJAvJ6EGYWyKgs6aTlsJ+s=\");\n_c = Authorization;\nvar _c;\n$RefreshReg$(_c, \"Authorization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvcml6YXRpb24vQXV0aG9yaXphdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ2Y7QUFPakMsTUFBTUcsV0FBdUI7SUFDekI7UUFDSUMsT0FBTztRQUNQQyxVQUFVO0lBQ2Q7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtDQUNIO0FBWUQsTUFBTUMsZ0JBQWdCLENBQUNDLEdBQW1FQztJQUN0RixNQUFNQyxRQUFnQkYsYUFBYUcsbUJBQW1CSCxFQUFFRSxLQUFLLEdBQUdGLEVBQUVJLE1BQU0sQ0FBQ0YsS0FBSztJQUM5RSxNQUFNRyxPQUFtQlQ7SUFFekIsSUFBSU0sVUFBVSxJQUFJO1FBQ2RELEtBQUs7WUFDREssT0FBTztZQUNQQyxjQUFjO1FBQ2xCO0lBQ0osT0FBTztRQUNITixLQUFLO1lBQ0RLLE9BQU87WUFDUEMsY0FBYztRQUNsQjtRQUVBLEtBQUssTUFBTUMsTUFBTUgsS0FBTTtZQUNuQixJQUFJRyxHQUFHWCxLQUFLLEtBQUtLLE9BQU87Z0JBQ3BCRCxLQUFLO29CQUNESyxPQUFPO29CQUNQQyxjQUFjO2dCQUNsQjtnQkFDQTtZQUNKLE9BQU87Z0JBQ0hFLFFBQVFDLEdBQUcsQ0FBQ1I7Z0JBQ1pELEtBQUs7b0JBQ0RLLE9BQU87b0JBQ1BDLGNBQWM7Z0JBQ2xCO1lBQ0o7UUFDSjtJQUNKO0FBQ0o7QUFFQSxNQUFNSSxnQkFBZ0IsQ0FBQ1gsR0FBbUVDO0lBQ3RGLE1BQU1DLFFBQWdCRixhQUFhRyxtQkFBbUJILEVBQUVFLEtBQUssR0FBR0YsRUFBRUksTUFBTSxDQUFDRixLQUFLO0lBQzlFLE1BQU1HLE9BQW1CVDtJQUV6QixJQUFJTSxVQUFVLElBQUk7UUFDZEQsS0FBSztZQUNESyxPQUFPO1lBQ1BDLGNBQWM7UUFDbEI7SUFDSixPQUFPO1FBQ0hOLEtBQUs7WUFDREssT0FBTztZQUNQQyxjQUFjO1FBQ2xCO1FBRUEsS0FBSyxNQUFNQyxNQUFNSCxLQUFNO1lBQ25CLElBQUlHLEdBQUdWLFFBQVEsS0FBS0ksT0FBTztnQkFDdkJELEtBQUs7b0JBQ0RLLE9BQU87b0JBQ1BDLGNBQWM7Z0JBQ2xCO2dCQUNBO1lBQ0osT0FBTztnQkFDSE4sS0FBSztvQkFDREssT0FBTztvQkFDUEMsY0FBYztnQkFDbEI7WUFDSjtRQUNKO0lBQ0o7QUFDSjtBQUVBLE1BQU1LLGNBQWMsQ0FBQ0M7SUFDakIscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVdyQix5RUFBWTtrQkFBR21CLFNBQVNOLFlBQVk7Ozs7OztBQUU3RDtBQUVBLE1BQU1TLGNBQWMsQ0FBQ2hCLEdBQXFEaUI7UUFBZ0IsQ0FBQ0MsVUFBVUMsU0FBb0I7SUFDckhuQixFQUFFb0IsY0FBYztJQUNoQixNQUFNdkIsUUFBUXdCLFNBQVNDLGNBQWMsQ0FBQztJQUN0QyxNQUFNeEIsV0FBV3VCLFNBQVNDLGNBQWMsQ0FBQztJQUV6QyxJQUFJekIsaUJBQWlCTSxrQkFBa0I7UUFDbkNKLGNBQWNGLE9BQU9vQixLQUFLLENBQUMsRUFBRTtJQUNqQztJQUVBLElBQUluQixvQkFBb0JLLGtCQUFrQjtRQUN0Q1EsY0FBY2IsVUFBVW1CLEtBQUssQ0FBQyxFQUFFO0lBQ3BDO0lBRUEsSUFBSUMsWUFBWUMsVUFBVTtRQUN0QlYsUUFBUUMsR0FBRyxDQUFDO1FBQ1phLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQzNCO0FBQ0o7QUFFTyxTQUFTQzs7SUFDWixNQUFNLENBQUNDLGVBQWVDLG1CQUFtQixHQUFHakMsK0NBQVFBLENBQUM7UUFDakRXLE9BQU87UUFDUEMsY0FBYztJQUNsQjtJQUVBLE1BQU0sQ0FBQ3NCLGVBQWVDLG1CQUFtQixHQUFHbkMsK0NBQVFBLENBQUM7UUFDakRXLE9BQU87UUFDUEMsY0FBYztJQUNsQjtJQUVBLHFCQUNJLDhEQUFDd0I7UUFBSWhCLFdBQVdyQiwyRUFBYztrQkFDMUIsNEVBQUN1QztZQUFLbEIsV0FBV3JCLHdFQUFXO1lBQUV3QyxRQUFPOzs4QkFDakMsOERBQUNDO29CQUFHcEIsV0FBV3JCLDJFQUFjOzhCQUFFOzs7Ozs7OEJBRS9CLDhEQUFDMkM7b0JBQUd0QixXQUFXckIsd0VBQVc7O3NDQUN0Qiw4REFBQzZDOzRCQUFXeEIsV0FBV3JCLHdFQUFXOztnQ0FDN0JpQyxjQUFjckIsS0FBSyxHQUFHTSxZQUFZZSxpQkFBaUI7OENBQ3BELDhEQUFDYztvQ0FBTUMsSUFBRztvQ0FBUUMsUUFBUSxDQUFDM0M7d0NBQU9ELGNBQWNDLEdBQUc0QjtvQ0FBbUI7b0NBQUdiLFdBQVdyQix5RUFBWTtvQ0FBRWtELE1BQUs7b0NBQU9DLGFBQVk7Ozs7Ozs7MkJBRnJIOzs7OztzQ0FJVCw4REFBQ047NEJBQVd4QixXQUFXckIsd0VBQVc7O2dDQUM3Qm1DLGNBQWN2QixLQUFLLEdBQUdNLFlBQVlpQixpQkFBaUI7OENBQ3BELDhEQUFDWTtvQ0FBTUMsSUFBRztvQ0FBV0MsUUFBUSxDQUFDM0M7d0NBQU9XLGNBQWNYLEdBQUc4QjtvQ0FBbUI7b0NBQUdmLFdBQVdyQix5RUFBWTtvQ0FBRWtELE1BQUs7b0NBQU9DLGFBQVk7Ozs7Ozs7MkJBRnhIOzs7Ozs7Ozs7Ozs4QkFNYiw4REFBQ0M7b0JBQU9DLFNBQVMsQ0FBQy9DO3dCQUFPZ0IsWUFBWWhCLEdBQUc7NEJBQUM0Qjs0QkFBb0JFO3lCQUFtQixFQUFFOzRCQUFDSCxjQUFjckIsS0FBSzs0QkFBRXVCLGNBQWN2QixLQUFLO3lCQUFDO29CQUFDO29CQUFHUyxXQUFXckIsMEVBQWE7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFLO0dBL0JnQmdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbi9BdXRob3JpemF0aW9uLnRzeD9jYzkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hdXRob3JpemF0aW9uLm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBJQWNjb3VudCB7XHJcbiAgICBsb2dpbjogc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBBQ0NPVU5UUzogSUFjY291bnRbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBsb2dpbjogXCJrbmlscHQyMDA3QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIjEyZDJjYTFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsb2dpbjogXCJiZXRlcG9rXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDVcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5pbnRlcmZhY2UgSVNldHRpbmdzIHtcclxuICAgIGVycm9yOiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgVEZ1bmMgPSBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7XHJcbiAgICBlcnJvcjogYm9vbGVhbjtcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG59Pj5cclxuXHJcbmNvbnN0IGNoZWNrSW5wdXRMb2cgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50LCBFbGVtZW50PiB8IEhUTUxJbnB1dEVsZW1lbnQsIGZ1bmM6IFRGdW5jKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgPyBlLnZhbHVlIDogZS50YXJnZXQudmFsdWVcclxuICAgIGNvbnN0IGRhdGE6IElBY2NvdW50W10gPSBBQ0NPVU5UU1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIixcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5sb2dpbiA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcItCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9XCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja0lucHV0UGFzID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudCwgRWxlbWVudD4gfCBIVE1MSW5wdXRFbGVtZW50LCBmdW5jOiBURnVuYykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ID8gZS52YWx1ZSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBjb25zdCBkYXRhOiBJQWNjb3VudFtdID0gQUNDT1VOVFNcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQn9C+0LvQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCIsXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZWwucGFzc3dvcmQgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LDRgNC+0LvRjFwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlRXJyb3IgPSAoc2V0dGluZ3M6IElTZXR0aW5ncykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e3NldHRpbmdzLmVycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+ICwgZnVuY3M6IFRGdW5jW10sIFtjb3JyZWN0MSwgY29ycmVjdDJdOiBib29sZWFuW10pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIilcclxuXHJcbiAgICBpZiAobG9naW4gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgY2hlY2tJbnB1dExvZyhsb2dpbiwgZnVuY3NbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGNoZWNrSW5wdXRQYXMocGFzc3dvcmQsIGZ1bmNzWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3JyZWN0MSAmJiBjb3JyZWN0Mikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuL3JzdG9yZVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRob3JpemF0aW9uICgpIHtcclxuICAgIGNvbnN0IFtjaGVja0Vycm9yTG9nLCBzZXRDaGVja2VkRXJyb3JMb2ddID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtjaGVja0Vycm9yUGFzLCBzZXRDaGVja2VkRXJyb3JQYXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gYWN0aW9uPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+0JLQpdCe0JQ8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsxfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrRXJyb3JMb2cuZXJyb3IgPyBjcmVhdGVFcnJvcihjaGVja0Vycm9yTG9nKSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvZ2luXCIgb25CbHVyPXsoZSkgPT4ge2NoZWNrSW5wdXRMb2coZSwgc2V0Q2hlY2tlZEVycm9yTG9nKX19IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JvQvtCz0LjQvVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezJ9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tFcnJvclBhcy5lcnJvciA/IGNyZWF0ZUVycm9yKGNoZWNrRXJyb3JQYXMpIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBvbkJsdXI9eyhlKSA9PiB7Y2hlY2tJbnB1dFBhcyhlLCBzZXRDaGVja2VkRXJyb3JQYXMpfX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge2J1dHRvbkNsaWNrKGUsIFtzZXRDaGVja2VkRXJyb3JMb2csIHNldENoZWNrZWRFcnJvclBhc10sIFtjaGVja0Vycm9yTG9nLmVycm9yLCBjaGVja0Vycm9yUGFzLmVycm9yXSl9fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJBQ0NPVU5UUyIsImxvZ2luIiwicGFzc3dvcmQiLCJjaGVja0lucHV0TG9nIiwiZSIsImZ1bmMiLCJ2YWx1ZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJ0YXJnZXQiLCJkYXRhIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lucHV0UGFzIiwiY3JlYXRlRXJyb3IiLCJzZXR0aW5ncyIsInNwYW4iLCJjbGFzc05hbWUiLCJidXR0b25DbGljayIsImZ1bmNzIiwiY29ycmVjdDEiLCJjb3JyZWN0MiIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkF1dGhvcml6YXRpb24iLCJjaGVja0Vycm9yTG9nIiwic2V0Q2hlY2tlZEVycm9yTG9nIiwiY2hlY2tFcnJvclBhcyIsInNldENoZWNrZWRFcnJvclBhcyIsImRpdiIsImNvbnRlbnQiLCJmb3JtIiwiYWN0aW9uIiwiaDIiLCJoZWFkaW5nIiwidWwiLCJsaXN0IiwibGkiLCJpdGVtIiwiaW5wdXQiLCJpZCIsIm9uQmx1ciIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Authorization/Authorization.tsx\n"));

/***/ })

});