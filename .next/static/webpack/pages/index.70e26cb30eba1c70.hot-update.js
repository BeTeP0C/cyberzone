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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Authorization: function() { return /* binding */ Authorization; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authorization_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization.module.scss */ \"./components/Authorization/authorization.module.scss\");\n/* harmony import */ var _authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ACCOUNTS = [\n    {\n        login: \"knilpt2007@gmail.com\",\n        password: \"12d2ca1\"\n    },\n    {\n        login: \"betepok\",\n        password: \"12345\"\n    }\n];\nconst checkInputLog = (e, func)=>{\n    const value = e instanceof HTMLInputElement ? e.value : e.target.value;\n    const data = ACCOUNTS;\n    if (value === \"\") {\n        func({\n            error: true,\n            errorMessage: \"Поле не может быть пустым\"\n        });\n    } else {\n        func({\n            error: false,\n            errorMessage: \"\"\n        });\n        for (const el of data){\n            if (el.login === value) {\n                func({\n                    error: false,\n                    errorMessage: \"\"\n                });\n                break;\n            } else {\n                console.log(value);\n                func({\n                    error: true,\n                    errorMessage: \"Неправильный логин\"\n                });\n            }\n        }\n    }\n};\nconst checkInputPas = (e, func)=>{\n    const value = e instanceof HTMLInputElement ? e.value : e.target.value;\n    const data = ACCOUNTS;\n    if (value === \"\") {\n        func({\n            error: true,\n            errorMessage: \"Поле не может быть пустым\"\n        });\n    } else {\n        func({\n            error: false,\n            errorMessage: \"\"\n        });\n        for (const el of data){\n            if (el.password === value) {\n                func({\n                    error: false,\n                    errorMessage: \"\"\n                });\n                break;\n            } else {\n                func({\n                    error: true,\n                    errorMessage: \"Неправильный пароль\"\n                });\n            }\n        }\n    }\n};\nconst createError = (settings)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error),\n        children: settings.errorMessage\n    }, void 0, false, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, undefined);\n};\nconst buttonClick = (e, funcs, param)=>{\n    let [correct1, correct2] = param;\n    e.preventDefault();\n    const login = document.getElementById(\"login\");\n    const password = document.getElementById(\"password\");\n    if (login instanceof HTMLInputElement) {\n        checkInputLog(login, funcs[0]);\n    }\n    if (password instanceof HTMLInputElement) {\n        checkInputPas(password, funcs[1]);\n    }\n    setTimeout(()=>{\n        if (!correct1 && !correct2) {\n            window.location.href = \"./rstore\";\n        }\n    }, 1);\n};\nfunction Authorization() {\n    _s();\n    const [checkErrorLog, setCheckedErrorLog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: false,\n        errorMessage: \"\"\n    });\n    const [checkErrorPas, setCheckedErrorPas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: false,\n        errorMessage: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n            action: \"GET\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                    children: \"ВХОД\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: [\n                                checkErrorLog.error ? createError(checkErrorLog) : \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"login\",\n                                    onBlur: (e)=>{\n                                        checkInputLog(e, setCheckedErrorLog);\n                                    },\n                                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    type: \"text\",\n                                    placeholder: \"Логин\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, 1, true, {\n                            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: [\n                                checkErrorPas.error ? createError(checkErrorPas) : \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"password\",\n                                    onBlur: (e)=>{\n                                        checkInputPas(e, setCheckedErrorPas);\n                                    },\n                                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    type: \"text\",\n                                    placeholder: \"Пароль\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, 2, true, {\n                            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: (e)=>{\n                        buttonClick(e, [\n                            setCheckedErrorLog,\n                            setCheckedErrorPas\n                        ], [\n                            checkErrorLog.error,\n                            checkErrorPas.error\n                        ]);\n                    },\n                    className: (_authorization_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    children: \"Войти\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n            lineNumber: 135,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\cyberzone_test\\\\rstore_next\\\\components\\\\Authorization\\\\Authorization.tsx\",\n        lineNumber: 134,\n        columnNumber: 9\n    }, this);\n}\n_s(Authorization, \"fzgo8HJAvJ6EGYWyKgs6aTlsJ+s=\");\n_c = Authorization;\nvar _c;\n$RefreshReg$(_c, \"Authorization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvcml6YXRpb24vQXV0aG9yaXphdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ2Y7QUFPakMsTUFBTUcsV0FBdUI7SUFDekI7UUFDSUMsT0FBTztRQUNQQyxVQUFVO0lBQ2Q7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtDQUNIO0FBWUQsTUFBTUMsZ0JBQWdCLENBQUNDLEdBQW1FQztJQUN0RixNQUFNQyxRQUFnQkYsYUFBYUcsbUJBQW1CSCxFQUFFRSxLQUFLLEdBQUdGLEVBQUVJLE1BQU0sQ0FBQ0YsS0FBSztJQUM5RSxNQUFNRyxPQUFtQlQ7SUFFekIsSUFBSU0sVUFBVSxJQUFJO1FBQ2RELEtBQUs7WUFDREssT0FBTztZQUNQQyxjQUFjO1FBQ2xCO0lBQ0osT0FBTztRQUNITixLQUFLO1lBQ0RLLE9BQU87WUFDUEMsY0FBYztRQUNsQjtRQUVBLEtBQUssTUFBTUMsTUFBTUgsS0FBTTtZQUNuQixJQUFJRyxHQUFHWCxLQUFLLEtBQUtLLE9BQU87Z0JBQ3BCRCxLQUFLO29CQUNESyxPQUFPO29CQUNQQyxjQUFjO2dCQUNsQjtnQkFDQTtZQUNKLE9BQU87Z0JBQ0hFLFFBQVFDLEdBQUcsQ0FBQ1I7Z0JBQ1pELEtBQUs7b0JBQ0RLLE9BQU87b0JBQ1BDLGNBQWM7Z0JBQ2xCO1lBQ0o7UUFDSjtJQUNKO0FBQ0o7QUFFQSxNQUFNSSxnQkFBZ0IsQ0FBQ1gsR0FBbUVDO0lBQ3RGLE1BQU1DLFFBQWdCRixhQUFhRyxtQkFBbUJILEVBQUVFLEtBQUssR0FBR0YsRUFBRUksTUFBTSxDQUFDRixLQUFLO0lBQzlFLE1BQU1HLE9BQW1CVDtJQUV6QixJQUFJTSxVQUFVLElBQUk7UUFDZEQsS0FBSztZQUNESyxPQUFPO1lBQ1BDLGNBQWM7UUFDbEI7SUFDSixPQUFPO1FBQ0hOLEtBQUs7WUFDREssT0FBTztZQUNQQyxjQUFjO1FBQ2xCO1FBRUEsS0FBSyxNQUFNQyxNQUFNSCxLQUFNO1lBQ25CLElBQUlHLEdBQUdWLFFBQVEsS0FBS0ksT0FBTztnQkFDdkJELEtBQUs7b0JBQ0RLLE9BQU87b0JBQ1BDLGNBQWM7Z0JBQ2xCO2dCQUNBO1lBQ0osT0FBTztnQkFDSE4sS0FBSztvQkFDREssT0FBTztvQkFDUEMsY0FBYztnQkFDbEI7WUFDSjtRQUNKO0lBQ0o7QUFDSjtBQUVBLE1BQU1LLGNBQWMsQ0FBQ0M7SUFDakIscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVdyQix5RUFBWTtrQkFBR21CLFNBQVNOLFlBQVk7Ozs7OztBQUU3RDtBQUVBLE1BQU1TLGNBQWMsQ0FBQ2hCLEdBQXFEaUI7UUFBZ0IsQ0FBQ0MsVUFBVUMsU0FBb0I7SUFDckhuQixFQUFFb0IsY0FBYztJQUNoQixNQUFNdkIsUUFBUXdCLFNBQVNDLGNBQWMsQ0FBQztJQUN0QyxNQUFNeEIsV0FBV3VCLFNBQVNDLGNBQWMsQ0FBQztJQUV6QyxJQUFJekIsaUJBQWlCTSxrQkFBa0I7UUFDbkNKLGNBQWNGLE9BQU9vQixLQUFLLENBQUMsRUFBRTtJQUNqQztJQUVBLElBQUluQixvQkFBb0JLLGtCQUFrQjtRQUN0Q1EsY0FBY2IsVUFBVW1CLEtBQUssQ0FBQyxFQUFFO0lBQ3BDO0lBRUFNLFdBQVc7UUFDUCxJQUFJLENBQUNMLFlBQVksQ0FBQ0MsVUFBVTtZQUN4QkssT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7UUFDM0I7SUFDSixHQUFHO0FBQ1A7QUFFTyxTQUFTQzs7SUFDWixNQUFNLENBQUNDLGVBQWVDLG1CQUFtQixHQUFHbEMsK0NBQVFBLENBQUM7UUFDakRXLE9BQU87UUFDUEMsY0FBYztJQUNsQjtJQUVBLE1BQU0sQ0FBQ3VCLGVBQWVDLG1CQUFtQixHQUFHcEMsK0NBQVFBLENBQUM7UUFDakRXLE9BQU87UUFDUEMsY0FBYztJQUNsQjtJQUVBLHFCQUNJLDhEQUFDeUI7UUFBSWpCLFdBQVdyQiwyRUFBYztrQkFDMUIsNEVBQUN3QztZQUFLbkIsV0FBV3JCLHdFQUFXO1lBQUV5QyxRQUFPOzs4QkFDakMsOERBQUNDO29CQUFHckIsV0FBV3JCLDJFQUFjOzhCQUFFOzs7Ozs7OEJBRS9CLDhEQUFDNEM7b0JBQUd2QixXQUFXckIsd0VBQVc7O3NDQUN0Qiw4REFBQzhDOzRCQUFXekIsV0FBV3JCLHdFQUFXOztnQ0FDN0JrQyxjQUFjdEIsS0FBSyxHQUFHTSxZQUFZZ0IsaUJBQWlCOzhDQUNwRCw4REFBQ2M7b0NBQU1DLElBQUc7b0NBQVFDLFFBQVEsQ0FBQzVDO3dDQUFPRCxjQUFjQyxHQUFHNkI7b0NBQW1CO29DQUFHZCxXQUFXckIseUVBQVk7b0NBQUVtRCxNQUFLO29DQUFPQyxhQUFZOzs7Ozs7OzJCQUZySDs7Ozs7c0NBSVQsOERBQUNOOzRCQUFXekIsV0FBV3JCLHdFQUFXOztnQ0FDN0JvQyxjQUFjeEIsS0FBSyxHQUFHTSxZQUFZa0IsaUJBQWlCOzhDQUNwRCw4REFBQ1k7b0NBQU1DLElBQUc7b0NBQVdDLFFBQVEsQ0FBQzVDO3dDQUFPVyxjQUFjWCxHQUFHK0I7b0NBQW1CO29DQUFHaEIsV0FBV3JCLHlFQUFZO29DQUFFbUQsTUFBSztvQ0FBT0MsYUFBWTs7Ozs7OzsyQkFGeEg7Ozs7Ozs7Ozs7OzhCQU1iLDhEQUFDQztvQkFBT0MsU0FBUyxDQUFDaEQ7d0JBQU9nQixZQUFZaEIsR0FBRzs0QkFBQzZCOzRCQUFvQkU7eUJBQW1CLEVBQUU7NEJBQUNILGNBQWN0QixLQUFLOzRCQUFFd0IsY0FBY3hCLEtBQUs7eUJBQUM7b0JBQUM7b0JBQUdTLFdBQVdyQiwwRUFBYTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUs7R0EvQmdCaUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JpemF0aW9uL0F1dGhvcml6YXRpb24udHN4P2NjOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2F1dGhvcml6YXRpb24ubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElBY2NvdW50IHtcclxuICAgIGxvZ2luOiBzdHJpbmcsXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFDQ09VTlRTOiBJQWNjb3VudFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxvZ2luOiBcImtuaWxwdDIwMDdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTJkMmNhMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvZ2luOiBcImJldGVwb2tcIixcclxuICAgICAgICBwYXNzd29yZDogXCIxMjM0NVwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmludGVyZmFjZSBJU2V0dGluZ3Mge1xyXG4gICAgZXJyb3I6IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBURnVuYyA9IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHtcclxuICAgIGVycm9yOiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn0+PlxyXG5cclxuY29uc3QgY2hlY2tJbnB1dExvZyA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQsIEVsZW1lbnQ+IHwgSFRNTElucHV0RWxlbWVudCwgZnVuYzogVEZ1bmMpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCA/IGUudmFsdWUgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgY29uc3QgZGF0YTogSUFjY291bnRbXSA9IEFDQ09VTlRTXHJcblxyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J/QvtC70LUg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvFwiLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGVsLmxvZ2luID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZnVuYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC70L7Qs9C40L1cIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrSW5wdXRQYXMgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50LCBFbGVtZW50PiB8IEhUTUxJbnB1dEVsZW1lbnQsIGZ1bmM6IFRGdW5jKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgPyBlLnZhbHVlIDogZS50YXJnZXQudmFsdWVcclxuICAgIGNvbnN0IGRhdGE6IElBY2NvdW50W10gPSBBQ0NPVU5UU1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIixcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmdW5jKHtcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5wYXNzd29yZCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCLQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0L/QsNGA0L7Qu9GMXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVFcnJvciA9IChzZXR0aW5nczogSVNldHRpbmdzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57c2V0dGluZ3MuZXJyb3JNZXNzYWdlfTwvc3Bhbj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4gLCBmdW5jczogVEZ1bmNbXSwgW2NvcnJlY3QxLCBjb3JyZWN0Ml06IGJvb2xlYW5bXSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIilcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKVxyXG5cclxuICAgIGlmIChsb2dpbiBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBjaGVja0lucHV0TG9nKGxvZ2luLCBmdW5jc1swXSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFzc3dvcmQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgY2hlY2tJbnB1dFBhcyhwYXNzd29yZCwgZnVuY3NbMV0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb3JyZWN0MSAmJiAhY29ycmVjdDIpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vcnN0b3JlXCJcclxuICAgICAgICB9XHJcbiAgICB9LCAxKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aG9yaXphdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbY2hlY2tFcnJvckxvZywgc2V0Q2hlY2tlZEVycm9yTG9nXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbY2hlY2tFcnJvclBhcywgc2V0Q2hlY2tlZEVycm9yUGFzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IGFjdGlvbj1cIkdFVFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PtCS0KXQntCUPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja0Vycm9yTG9nLmVycm9yID8gY3JlYXRlRXJyb3IoY2hlY2tFcnJvckxvZykgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsb2dpblwiIG9uQmx1cj17KGUpID0+IHtjaGVja0lucHV0TG9nKGUsIHNldENoZWNrZWRFcnJvckxvZyl9fSBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCb0L7Qs9C40L1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsyfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrRXJyb3JQYXMuZXJyb3IgPyBjcmVhdGVFcnJvcihjaGVja0Vycm9yUGFzKSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgb25CbHVyPXsoZSkgPT4ge2NoZWNrSW5wdXRQYXMoZSwgc2V0Q2hlY2tlZEVycm9yUGFzKX19IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtidXR0b25DbGljayhlLCBbc2V0Q2hlY2tlZEVycm9yTG9nLCBzZXRDaGVja2VkRXJyb3JQYXNdLCBbY2hlY2tFcnJvckxvZy5lcnJvciwgY2hlY2tFcnJvclBhcy5lcnJvcl0pfX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsInVzZVN0YXRlIiwiQUNDT1VOVFMiLCJsb2dpbiIsInBhc3N3b3JkIiwiY2hlY2tJbnB1dExvZyIsImUiLCJmdW5jIiwidmFsdWUiLCJIVE1MSW5wdXRFbGVtZW50IiwidGFyZ2V0IiwiZGF0YSIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiZWwiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tJbnB1dFBhcyIsImNyZWF0ZUVycm9yIiwic2V0dGluZ3MiLCJzcGFuIiwiY2xhc3NOYW1lIiwiYnV0dG9uQ2xpY2siLCJmdW5jcyIsImNvcnJlY3QxIiwiY29ycmVjdDIiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiQXV0aG9yaXphdGlvbiIsImNoZWNrRXJyb3JMb2ciLCJzZXRDaGVja2VkRXJyb3JMb2ciLCJjaGVja0Vycm9yUGFzIiwic2V0Q2hlY2tlZEVycm9yUGFzIiwiZGl2IiwiY29udGVudCIsImZvcm0iLCJhY3Rpb24iLCJoMiIsImhlYWRpbmciLCJ1bCIsImxpc3QiLCJsaSIsIml0ZW0iLCJpbnB1dCIsImlkIiwib25CbHVyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Authorization/Authorization.tsx\n"));

/***/ })

});