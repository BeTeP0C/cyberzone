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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Authorization: function() { return /* binding */ Authorization; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authorization_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization.module.scss */ \"./components/Authorization/authorization.module.scss\");\n/* harmony import */ var _authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ACCOUNTS = [\n    {\n        login: \"knilpt2007@gmail.com\",\n        password: \"12d2ca1\"\n    },\n    {\n        login: \"betepok\",\n        password: \"12345\"\n    }\n];\nconst checkInputLog = (e, func)=>{\n    const value = e instanceof HTMLInputElement ? e.value : e.target.value;\n    const data = ACCOUNTS;\n    if (value === \"\") {\n        func({\n            error: true,\n            errorMessage: \"Поле не может быть пустым\"\n        });\n    } else {\n        func({\n            error: false,\n            errorMessage: \"\"\n        });\n        for (const el of data){\n            if (el.login === value) {\n                func({\n                    error: false,\n                    errorMessage: \"\"\n                });\n                break;\n            } else {\n                func({\n                    error: true,\n                    errorMessage: \"Неправильный логин\"\n                });\n            }\n        }\n    }\n};\nconst checkInputPas = (e, func)=>{\n    const value = e instanceof HTMLInputElement ? e.value : e.target.value;\n    const data = ACCOUNTS;\n    if (value === \"\") {\n        func({\n            error: true,\n            errorMessage: \"Поле не может быть пустым\"\n        });\n    } else {\n        func({\n            error: false,\n            errorMessage: \"\"\n        });\n        for (const el of data){\n            if (el.password === value) {\n                func({\n                    error: false,\n                    errorMessage: \"\"\n                });\n                break;\n            } else {\n                func({\n                    error: true,\n                    errorMessage: \"Неправильный пароль\"\n                });\n            }\n        }\n    }\n};\nconst createError = (settings)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error),\n        children: settings.errorMessage\n    }, void 0, false, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n};\nconst buttonClick = (e, funcs, param)=>{\n    let [correct1, correct2] = param;\n    e.preventDefault();\n    const login = document.getElementById(\"login\");\n    const password = document.getElementById(\"password\");\n    if (login instanceof HTMLInputElement) {\n        checkInputLog(login, funcs[0]);\n    }\n    if (password instanceof HTMLInputElement) {\n        checkInputPas(password, funcs[1]);\n    }\n    if (!correct1 && !correct2) {\n        window.location.href = \"./rstore\";\n    }\n};\nfunction Authorization() {\n    _s();\n    const [checkErrorLog, setCheckedErrorLog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: true,\n        errorMessage: \"\"\n    });\n    const [checkErrorPas, setCheckedErrorPas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: true,\n        errorMessage: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n            action: \"GET\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                    children: \"ВХОД\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: [\n                                checkErrorLog.error ? createError(checkErrorLog) : \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"login\",\n                                    onBlur: (e)=>{\n                                        checkInputLog(e, setCheckedErrorLog);\n                                    },\n                                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    type: \"text\",\n                                    placeholder: \"Логин\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, 1, true, {\n                            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: [\n                                checkErrorPas.error ? createError(checkErrorPas) : \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"password\",\n                                    onBlur: (e)=>{\n                                        checkInputPas(e, setCheckedErrorPas);\n                                    },\n                                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    type: \"text\",\n                                    placeholder: \"Пароль\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, 2, true, {\n                            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: (e)=>{\n                        buttonClick(e, [\n                            setCheckedErrorLog,\n                            setCheckedErrorPas\n                        ], [\n                            checkErrorLog.error,\n                            checkErrorPas.error\n                        ]);\n                    },\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    children: \"Войти\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n            lineNumber: 132,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n        lineNumber: 131,\n        columnNumber: 9\n    }, this);\n}\n_s(Authorization, \"OKB83oC+mt6n30UnjTkG4wEXRGA=\");\n_c = Authorization;\nvar _c;\n$RefreshReg$(_c, \"Authorization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvcml6YXRpb24vQXV0aG9yaXphdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ2Y7QUFPakMsTUFBTUcsV0FBdUI7SUFDekI7UUFDSUMsT0FBTztRQUNQQyxVQUFVO0lBQ2Q7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtDQUNIO0FBWUQsTUFBTUMsZ0JBQWdCLENBQUNDLEdBQW1FQztJQUN0RixNQUFNQyxRQUFnQkYsYUFBYUcsbUJBQW1CSCxFQUFFRSxLQUFLLEdBQUdGLEVBQUVJLE1BQU0sQ0FBQ0YsS0FBSztJQUM5RSxNQUFNRyxPQUFtQlQ7SUFFekIsSUFBSU0sVUFBVSxJQUFJO1FBQ2RELEtBQUs7WUFDREssT0FBTztZQUNQQyxjQUFjO1FBQ2xCO0lBQ0osT0FBTztRQUNITixLQUFLO1lBQ0RLLE9BQU87WUFDUEMsY0FBYztRQUNsQjtRQUVBLEtBQUssTUFBTUMsTUFBTUgsS0FBTTtZQUNuQixJQUFJRyxHQUFHWCxLQUFLLEtBQUtLLE9BQU87Z0JBQ3BCRCxLQUFLO29CQUNESyxPQUFPO29CQUNQQyxjQUFjO2dCQUNsQjtnQkFDQTtZQUNKLE9BQU87Z0JBQ0hOLEtBQUs7b0JBQ0RLLE9BQU87b0JBQ1BDLGNBQWM7Z0JBQ2xCO1lBQ0o7UUFDSjtJQUNKO0FBQ0o7QUFFQSxNQUFNRSxnQkFBZ0IsQ0FBQ1QsR0FBbUVDO0lBQ3RGLE1BQU1DLFFBQWdCRixhQUFhRyxtQkFBbUJILEVBQUVFLEtBQUssR0FBR0YsRUFBRUksTUFBTSxDQUFDRixLQUFLO0lBQzlFLE1BQU1HLE9BQW1CVDtJQUV6QixJQUFJTSxVQUFVLElBQUk7UUFDZEQsS0FBSztZQUNESyxPQUFPO1lBQ1BDLGNBQWM7UUFDbEI7SUFDSixPQUFPO1FBQ0hOLEtBQUs7WUFDREssT0FBTztZQUNQQyxjQUFjO1FBQ2xCO1FBRUEsS0FBSyxNQUFNQyxNQUFNSCxLQUFNO1lBQ25CLElBQUlHLEdBQUdWLFFBQVEsS0FBS0ksT0FBTztnQkFDdkJELEtBQUs7b0JBQ0RLLE9BQU87b0JBQ1BDLGNBQWM7Z0JBQ2xCO2dCQUNBO1lBQ0osT0FBTztnQkFDSE4sS0FBSztvQkFDREssT0FBTztvQkFDUEMsY0FBYztnQkFDbEI7WUFDSjtRQUNKO0lBQ0o7QUFDSjtBQUVBLE1BQU1HLGNBQWMsQ0FBQ0M7SUFDakIscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVduQix5RUFBWTtrQkFBR2lCLFNBQVNKLFlBQVk7Ozs7OztBQUU3RDtBQUVBLE1BQU1PLGNBQWMsQ0FBQ2QsR0FBcURlO1FBQWdCLENBQUNDLFVBQVVDLFNBQW9CO0lBQ3JIakIsRUFBRWtCLGNBQWM7SUFDaEIsTUFBTXJCLFFBQVFzQixTQUFTQyxjQUFjLENBQUM7SUFDdEMsTUFBTXRCLFdBQVdxQixTQUFTQyxjQUFjLENBQUM7SUFFekMsSUFBSXZCLGlCQUFpQk0sa0JBQWtCO1FBQ25DSixjQUFjRixPQUFPa0IsS0FBSyxDQUFDLEVBQUU7SUFDakM7SUFFQSxJQUFJakIsb0JBQW9CSyxrQkFBa0I7UUFDdENNLGNBQWNYLFVBQVVpQixLQUFLLENBQUMsRUFBRTtJQUNwQztJQUVBLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxVQUFVO1FBQ3hCSSxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUMzQjtBQUNKO0FBRU8sU0FBU0M7O0lBQ1osTUFBTSxDQUFDQyxlQUFlQyxtQkFBbUIsR0FBRy9CLCtDQUFRQSxDQUFDO1FBQ2pEVyxPQUFPO1FBQ1BDLGNBQWM7SUFDbEI7SUFFQSxNQUFNLENBQUNvQixlQUFlQyxtQkFBbUIsR0FBR2pDLCtDQUFRQSxDQUFDO1FBQ2pEVyxPQUFPO1FBQ1BDLGNBQWM7SUFDbEI7SUFFQSxxQkFDSSw4REFBQ3NCO1FBQUloQixXQUFXbkIsMkVBQWM7a0JBQzFCLDRFQUFDcUM7WUFBS2xCLFdBQVduQix3RUFBVztZQUFFc0MsUUFBTzs7OEJBQ2pDLDhEQUFDQztvQkFBR3BCLFdBQVduQiwyRUFBYzs4QkFBRTs7Ozs7OzhCQUUvQiw4REFBQ3lDO29CQUFHdEIsV0FBV25CLHdFQUFXOztzQ0FDdEIsOERBQUMyQzs0QkFBV3hCLFdBQVduQix3RUFBVzs7Z0NBQzdCK0IsY0FBY25CLEtBQUssR0FBR0ksWUFBWWUsaUJBQWlCOzhDQUNwRCw4REFBQ2M7b0NBQU1DLElBQUc7b0NBQVFDLFFBQVEsQ0FBQ3pDO3dDQUFPRCxjQUFjQyxHQUFHMEI7b0NBQW1CO29DQUFHYixXQUFXbkIseUVBQVk7b0NBQUVnRCxNQUFLO29DQUFPQyxhQUFZOzs7Ozs7OzJCQUZySDs7Ozs7c0NBSVQsOERBQUNOOzRCQUFXeEIsV0FBV25CLHdFQUFXOztnQ0FDN0JpQyxjQUFjckIsS0FBSyxHQUFHSSxZQUFZaUIsaUJBQWlCOzhDQUNwRCw4REFBQ1k7b0NBQU1DLElBQUc7b0NBQVdDLFFBQVEsQ0FBQ3pDO3dDQUFPUyxjQUFjVCxHQUFHNEI7b0NBQW1CO29DQUFHZixXQUFXbkIseUVBQVk7b0NBQUVnRCxNQUFLO29DQUFPQyxhQUFZOzs7Ozs7OzJCQUZ4SDs7Ozs7Ozs7Ozs7OEJBTWIsOERBQUNDO29CQUFPQyxTQUFTLENBQUM3Qzt3QkFBT2MsWUFBWWQsR0FBRzs0QkFBQzBCOzRCQUFvQkU7eUJBQW1CLEVBQUU7NEJBQUNILGNBQWNuQixLQUFLOzRCQUFFcUIsY0FBY3JCLEtBQUs7eUJBQUM7b0JBQUM7b0JBQUdPLFdBQVduQiwwRUFBYTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUs7R0EvQmdCOEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JpemF0aW9uL0F1dGhvcml6YXRpb24udHN4P2NjOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2F1dGhvcml6YXRpb24ubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElBY2NvdW50IHtcclxuICAgIGxvZ2luOiBzdHJpbmcsXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFDQ09VTlRTOiBJQWNjb3VudFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxvZ2luOiBcImtuaWxwdDIwMDdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTJkMmNhMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvZ2luOiBcImJldGVwb2tcIixcclxuICAgICAgICBwYXNzd29yZDogXCIxMjM0NVwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmludGVyZmFjZSBJU2V0dGluZ3Mge1xyXG4gICAgZXJyb3I6IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBURnVuYyA9IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHtcclxuICAgIGVycm9yOiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn0+PlxyXG5cclxuY29uc3QgY2hlY2tJbnB1dExvZyA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQsIEVsZW1lbnQ+IHwgSFRNTElucHV0RWxlbWVudCwgZnVuYzogVEZ1bmMpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCA/IGUudmFsdWUgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgY29uc3QgZGF0YTogSUFjY291bnRbXSA9IEFDQ09VTlRTXHJcblxyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J/QvtC70LUg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvFwiLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGVsLmxvZ2luID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcItCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9XCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja0lucHV0UGFzID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudCwgRWxlbWVudD4gfCBIVE1MSW5wdXRFbGVtZW50LCBmdW5jOiBURnVuYykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ID8gZS52YWx1ZSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBjb25zdCBkYXRhOiBJQWNjb3VudFtdID0gQUNDT1VOVFNcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQn9C+0LvQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCIsXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZWwucGFzc3dvcmQgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LDRgNC+0LvRjFwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlRXJyb3IgPSAoc2V0dGluZ3M6IElTZXR0aW5ncykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e3NldHRpbmdzLmVycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+ICwgZnVuY3M6IFRGdW5jW10sIFtjb3JyZWN0MSwgY29ycmVjdDJdOiBib29sZWFuW10pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIilcclxuXHJcbiAgICBpZiAobG9naW4gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgY2hlY2tJbnB1dExvZyhsb2dpbiwgZnVuY3NbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGNoZWNrSW5wdXRQYXMocGFzc3dvcmQsIGZ1bmNzWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29ycmVjdDEgJiYgIWNvcnJlY3QyKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vcnN0b3JlXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhvcml6YXRpb24gKCkge1xyXG4gICAgY29uc3QgW2NoZWNrRXJyb3JMb2csIHNldENoZWNrZWRFcnJvckxvZ10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbY2hlY2tFcnJvclBhcywgc2V0Q2hlY2tlZEVycm9yUGFzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gYWN0aW9uPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+0JLQpdCe0JQ8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsxfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrRXJyb3JMb2cuZXJyb3IgPyBjcmVhdGVFcnJvcihjaGVja0Vycm9yTG9nKSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvZ2luXCIgb25CbHVyPXsoZSkgPT4ge2NoZWNrSW5wdXRMb2coZSwgc2V0Q2hlY2tlZEVycm9yTG9nKX19IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JvQvtCz0LjQvVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezJ9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tFcnJvclBhcy5lcnJvciA/IGNyZWF0ZUVycm9yKGNoZWNrRXJyb3JQYXMpIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBvbkJsdXI9eyhlKSA9PiB7Y2hlY2tJbnB1dFBhcyhlLCBzZXRDaGVja2VkRXJyb3JQYXMpfX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge2J1dHRvbkNsaWNrKGUsIFtzZXRDaGVja2VkRXJyb3JMb2csIHNldENoZWNrZWRFcnJvclBhc10sIFtjaGVja0Vycm9yTG9nLmVycm9yLCBjaGVja0Vycm9yUGFzLmVycm9yXSl9fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJBQ0NPVU5UUyIsImxvZ2luIiwicGFzc3dvcmQiLCJjaGVja0lucHV0TG9nIiwiZSIsImZ1bmMiLCJ2YWx1ZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJ0YXJnZXQiLCJkYXRhIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJlbCIsImNoZWNrSW5wdXRQYXMiLCJjcmVhdGVFcnJvciIsInNldHRpbmdzIiwic3BhbiIsImNsYXNzTmFtZSIsImJ1dHRvbkNsaWNrIiwiZnVuY3MiLCJjb3JyZWN0MSIsImNvcnJlY3QyIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiQXV0aG9yaXphdGlvbiIsImNoZWNrRXJyb3JMb2ciLCJzZXRDaGVja2VkRXJyb3JMb2ciLCJjaGVja0Vycm9yUGFzIiwic2V0Q2hlY2tlZEVycm9yUGFzIiwiZGl2IiwiY29udGVudCIsImZvcm0iLCJhY3Rpb24iLCJoMiIsImhlYWRpbmciLCJ1bCIsImxpc3QiLCJsaSIsIml0ZW0iLCJpbnB1dCIsImlkIiwib25CbHVyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Authorization/Authorization.tsx\n"));

/***/ })

});