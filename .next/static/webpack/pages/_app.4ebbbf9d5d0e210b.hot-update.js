"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/logo.png */ \"./public/logo.png\");\n/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/NavBar.module.css */ \"./styles/NavBar.module.css\");\n/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_contexts_CurrentUserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/contexts/CurrentUserContext */ \"./src/contexts/CurrentUserContext.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var _src_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/hooks/useClickOutside */ \"./src/hooks/useClickOutside.js\");\n/* harmony import */ var _src_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils/utils */ \"./src/utils/utils.js\");\n// Next\n\nvar _s = $RefreshSig$();\n\n\n// External\n\n\n\n\n// Internal\n\n\n\n\n\n\nfunction NavBar() {\n    _s();\n    const currentUser = (0,_src_contexts_CurrentUserContext__WEBPACK_IMPORTED_MODULE_4__.useCurrentUser)();\n    const setCurrentUser = (0,_src_contexts_CurrentUserContext__WEBPACK_IMPORTED_MODULE_4__.useSetCurrentUser)();\n    const { expanded , setExpanded , ref  } = (0,_src_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const handleLogout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"dj-rest-auth/logout/\");\n            setCurrentUser(null);\n            (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_7__.removeTokenTimestamp)();\n        } catch (err) {\n        // console.log(err);\n        }\n    };\n    const addPostIcon = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/posts/create\",\n        className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavLink),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fas fa-plus-square\"\n            }, void 0, false, {\n                fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this),\n            \" Create\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, this);\n    const loggedInIcons = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavLink),\n                onClick: handleLogout,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-sign-out-alt\"\n                    }, void 0, false, {\n                        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, this),\n                    \" Logout\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: `/profiles/${currentUser?.profile_id}`,\n                className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavLink),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    src: currentUser?.profile_image,\n                    height: 40,\n                    text: currentUser?.username\n                }, void 0, false, {\n                    fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                    lineNumber: 58,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n    const loggedOutIcons = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/login\",\n                className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavLink),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-sign-in-alt\"\n                    }, void 0, false, {\n                        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, this),\n                    \" Log In\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/signup\",\n                className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavLink),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-user-plus\"\n                    }, void 0, false, {\n                        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, this),\n                    \" Sign Up\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        expanded: expanded,\n        className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavBar),\n        expand: \"md\",\n        fixed: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Brand, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _public_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"logo\",\n                            height: \"25\"\n                        }, void 0, false, {\n                            fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                            lineNumber: 87,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                        lineNumber: 86,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                    lineNumber: 85,\n                    columnNumber: 5\n                }, this),\n                currentUser && addPostIcon,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Toggle, {\n                    ref: ref,\n                    onClick: ()=>setExpanded(!expanded),\n                    \"aria-controls\": \"basic-navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Collapse, {\n                    id: \"basic-navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        className: \"text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().NavLink),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fas fa-home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 8\n                                    }, this),\n                                    \" Home\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, this),\n                            currentUser ? loggedInIcons : loggedOutIcons\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                        lineNumber: 97,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n                    lineNumber: 96,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n            lineNumber: 84,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/TomAinsworth/Code/crepchat-frontend/components/NavBar.js\",\n        lineNumber: 78,\n        columnNumber: 3\n    }, this);\n}\n_s(NavBar, \"A+RxSi3UQ+0wSlsX7+tflqhNwnE=\", false, function() {\n    return [\n        _src_contexts_CurrentUserContext__WEBPACK_IMPORTED_MODULE_4__.useCurrentUser,\n        _src_contexts_CurrentUserContext__WEBPACK_IMPORTED_MODULE_4__.useSetCurrentUser,\n        _src_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOzs7QUFDc0I7QUFDRTtBQUUvQixXQUFXO0FBQ3VDO0FBQ1o7QUFDTTtBQUNsQjtBQUUxQixXQUFXO0FBQzJCO0FBQ1c7QUFJTDtBQUNkO0FBQzZCO0FBQ0Q7QUFFM0MsU0FBU2EsU0FBUzs7SUFDaEMsTUFBTUMsY0FBY04sZ0ZBQWNBO0lBQ2xDLE1BQU1PLGlCQUFpQk4sbUZBQWlCQTtJQUV4QyxNQUFNLEVBQUVPLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxJQUFHLEVBQUUsR0FBR1Asc0VBQWVBO0lBRXRELE1BQU1RLGVBQWUsVUFBWTtRQUNoQyxJQUFJO1lBQ0gsTUFBTWQsa0RBQVUsQ0FBQztZQUNqQlUsZUFBZSxJQUFJO1lBQ25CSCxzRUFBb0JBO1FBQ3JCLEVBQUUsT0FBT1MsS0FBSztRQUNiLG9CQUFvQjtRQUNyQjtJQUNEO0lBQ0EsTUFBTUMsNEJBQ0wsOERBQUN0QixrREFBSUE7UUFBQ3VCLE1BQUs7UUFBZ0JDLFdBQVdqQiwwRUFBYzs7MEJBQ25ELDhEQUFDbUI7Z0JBQUVGLFdBQVU7Ozs7OztZQUF5Qjs7Ozs7OztJQUl4QyxNQUFNRyw4QkFDTDs7MEJBT0MsOERBQUMzQixrREFBSUE7Z0JBQUN1QixNQUFLO2dCQUFJQyxXQUFXakIsMEVBQWM7Z0JBQUVxQixTQUFTVDs7a0NBQ2xELDhEQUFDTzt3QkFBRUYsV0FBVTs7Ozs7O29CQUEwQjs7Ozs7OzswQkFFeEMsOERBQUN4QixrREFBSUE7Z0JBQ0p1QixNQUFNLENBQUMsVUFBVSxFQUFFVCxhQUFhZSxXQUFXLENBQUM7Z0JBQzVDTCxXQUFXakIsMEVBQWM7MEJBRXpCLDRFQUFDRywrQ0FBTUE7b0JBQ05vQixLQUFLaEIsYUFBYWlCO29CQUNsQkMsUUFBUTtvQkFDUkMsTUFBTW5CLGFBQWFvQjs7Ozs7Ozs7Ozs7OztJQUt2QixNQUFNQywrQkFDTDs7MEJBQ0MsOERBQUNuQyxrREFBSUE7Z0JBQUN1QixNQUFLO2dCQUFTQyxXQUFXakIsMEVBQWM7O2tDQUM1Qyw4REFBQ21CO3dCQUFFRixXQUFVOzs7Ozs7b0JBQXlCOzs7Ozs7OzBCQUV2Qyw4REFBQ3hCLGtEQUFJQTtnQkFBQ3VCLE1BQUs7Z0JBQVVDLFdBQVdqQiwwRUFBYzs7a0NBQzdDLDhEQUFDbUI7d0JBQUVGLFdBQVU7Ozs7OztvQkFBdUI7Ozs7Ozs7OztJQUt2QyxxQkFDQyw4REFBQ3BCLCtEQUFNQTtRQUNOWSxVQUFVQTtRQUNWUSxXQUFXakIseUVBQWE7UUFDeEI2QixRQUFPO1FBQ1BDLE9BQU07a0JBRU4sNEVBQUNuQyxrRUFBU0E7WUFBQ3NCLFdBQVdqQiw0RUFBZ0I7OzhCQUNyQyw4REFBQ1Asa0RBQUlBO29CQUFDdUIsTUFBSzs4QkFDViw0RUFBQ25CLHFFQUFZO2tDQUNaLDRFQUFDSCxtREFBS0E7NEJBQUM2QixLQUFLeEIsd0RBQUlBOzRCQUFFaUMsS0FBSTs0QkFBT1AsUUFBTzs7Ozs7Ozs7Ozs7Ozs7OztnQkFHckNsQixlQUFlUTs4QkFDaEIsOERBQUNsQixzRUFBYTtvQkFDYmMsS0FBS0E7b0JBQ0xVLFNBQVMsSUFBTVgsWUFBWSxDQUFDRDtvQkFDNUJ5QixpQkFBYzs7Ozs7OzhCQUVmLDhEQUFDckMsd0VBQWU7b0JBQUN1QyxJQUFHOzhCQUNuQiw0RUFBQ3hDLDREQUFHQTt3QkFBQ3FCLFdBQVU7OzBDQUNkLDhEQUFDeEIsa0RBQUlBO2dDQUFDdUIsTUFBSztnQ0FBSUMsV0FBV2pCLDBFQUFjOztrREFDdkMsOERBQUNtQjt3Q0FBRUYsV0FBVTs7Ozs7O29DQUFrQjs7Ozs7Ozs0QkFFL0JWLGNBQWNhLGdCQUFnQlEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkQsQ0FBQztHQXJGdUJ0Qjs7UUFDSEwsNEVBQWNBO1FBQ1hDLCtFQUFpQkE7UUFFREUsa0VBQWVBOzs7S0FKL0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzP2ViOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dFxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbi8vIEV4dGVybmFsXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIEludGVybmFsXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vcHVibGljL2xvZ28ucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTmF2QmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7XG5cdHVzZUN1cnJlbnRVc2VyLFxuXHR1c2VTZXRDdXJyZW50VXNlcixcbn0gZnJvbSBcIi4uL3NyYy9jb250ZXh0cy9DdXJyZW50VXNlckNvbnRleHRcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4vQXZhdGFyXCI7XG5pbXBvcnQgdXNlQ2xpY2tPdXRzaWRlIGZyb20gXCIuLi9zcmMvaG9va3MvdXNlQ2xpY2tPdXRzaWRlXCI7XG5pbXBvcnQgeyByZW1vdmVUb2tlblRpbWVzdGFtcCB9IGZyb20gXCIuLi9zcmMvdXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuXHRjb25zdCBjdXJyZW50VXNlciA9IHVzZUN1cnJlbnRVc2VyKCk7XG5cdGNvbnN0IHNldEN1cnJlbnRVc2VyID0gdXNlU2V0Q3VycmVudFVzZXIoKTtcblxuXHRjb25zdCB7IGV4cGFuZGVkLCBzZXRFeHBhbmRlZCwgcmVmIH0gPSB1c2VDbGlja091dHNpZGUoKTtcblxuXHRjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGF4aW9zLnBvc3QoXCJkai1yZXN0LWF1dGgvbG9nb3V0L1wiKTtcblx0XHRcdHNldEN1cnJlbnRVc2VyKG51bGwpO1xuXHRcdFx0cmVtb3ZlVG9rZW5UaW1lc3RhbXAoKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhZGRQb3N0SWNvbiA9IChcblx0XHQ8TGluayBocmVmPVwiL3Bvc3RzL2NyZWF0ZVwiIGNsYXNzTmFtZT17c3R5bGVzLk5hdkxpbmt9PlxuXHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtc3F1YXJlXCI+PC9pPiBDcmVhdGVcblx0XHQ8L0xpbms+XG5cdCk7XG5cblx0Y29uc3QgbG9nZ2VkSW5JY29ucyA9IChcblx0XHQ8PlxuXHRcdFx0ey8qIDxMaW5rIGhyZWY9XCIvZmVlZFwiIGNsYXNzTmFtZT17c3R5bGVzLk5hdkxpbmt9PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RyZWFtXCI+PC9pPiBGZWVkXG5cdFx0XHQ8L0xpbms+ICovfVxuXHRcdFx0ey8qIDxMaW5rIGhyZWY9XCIvbGlrZWRcIiBjbGFzc05hbWU9e3N0eWxlcy5OYXZMaW5rfT5cblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPiBMaWtlZFxuXHRcdFx0PC9MaW5rPiAqL31cblx0XHRcdDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2TGlua30gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT4gTG9nb3V0XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8TGlua1xuXHRcdFx0XHRocmVmPXtgL3Byb2ZpbGVzLyR7Y3VycmVudFVzZXI/LnByb2ZpbGVfaWR9YH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuTmF2TGlua31cblx0XHRcdD5cblx0XHRcdFx0PEF2YXRhclxuXHRcdFx0XHRcdHNyYz17Y3VycmVudFVzZXI/LnByb2ZpbGVfaW1hZ2V9XG5cdFx0XHRcdFx0aGVpZ2h0PXs0MH1cblx0XHRcdFx0XHR0ZXh0PXtjdXJyZW50VXNlcj8udXNlcm5hbWV9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PC8+XG5cdCk7XG5cdGNvbnN0IGxvZ2dlZE91dEljb25zID0gKFxuXHRcdDw+XG5cdFx0XHQ8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2TGlua30+XG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT4gTG9nIEluXG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT17c3R5bGVzLk5hdkxpbmt9PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1wbHVzXCI+PC9pPiBTaWduIFVwXG5cdFx0XHQ8L0xpbms+XG5cdFx0PC8+XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8TmF2YmFyXG5cdFx0XHRleHBhbmRlZD17ZXhwYW5kZWR9XG5cdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5OYXZCYXJ9XG5cdFx0XHRleHBhbmQ9XCJtZFwiXG5cdFx0XHRmaXhlZD1cInRvcFwiXG5cdFx0PlxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxOYXZiYXIuQnJhbmQ+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgaGVpZ2h0PVwiMjVcIiAvPlxuXHRcdFx0XHRcdDwvTmF2YmFyLkJyYW5kPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdHtjdXJyZW50VXNlciAmJiBhZGRQb3N0SWNvbn1cblx0XHRcdFx0PE5hdmJhci5Ub2dnbGVcblx0XHRcdFx0XHRyZWY9e3JlZn1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuXHRcdFx0XHRcdGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cblx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5OYXZMaW5rfT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIj48L2k+IEhvbWVcblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdHtjdXJyZW50VXNlciA/IGxvZ2dlZEluSWNvbnMgOiBsb2dnZWRPdXRJY29uc31cblx0XHRcdFx0XHQ8L05hdj5cblx0XHRcdFx0PC9OYXZiYXIuQ29sbGFwc2U+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L05hdmJhcj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJDb250YWluZXIiLCJOYXYiLCJOYXZiYXIiLCJheGlvcyIsImxvZ28iLCJzdHlsZXMiLCJ1c2VDdXJyZW50VXNlciIsInVzZVNldEN1cnJlbnRVc2VyIiwiQXZhdGFyIiwidXNlQ2xpY2tPdXRzaWRlIiwicmVtb3ZlVG9rZW5UaW1lc3RhbXAiLCJOYXZCYXIiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsInJlZiIsImhhbmRsZUxvZ291dCIsInBvc3QiLCJlcnIiLCJhZGRQb3N0SWNvbiIsImhyZWYiLCJjbGFzc05hbWUiLCJOYXZMaW5rIiwiaSIsImxvZ2dlZEluSWNvbnMiLCJvbkNsaWNrIiwicHJvZmlsZV9pZCIsInNyYyIsInByb2ZpbGVfaW1hZ2UiLCJoZWlnaHQiLCJ0ZXh0IiwidXNlcm5hbWUiLCJsb2dnZWRPdXRJY29ucyIsImV4cGFuZCIsImZpeGVkIiwiQnJhbmQiLCJhbHQiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n"));

/***/ })

});