"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_figure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/figure */ \"./components/figure/index.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.tsx\");\n/* harmony import */ var _components_moves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/moves */ \"./components/moves/index.tsx\");\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/profile */ \"./components/profile/index.tsx\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/[id].module.css */ \"./styles/[id].module.css\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function(param) {\n    var pokemon = param.pokemon;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), dataMyCatchPokemon = ref[0], setDataMyCatchPokemon = ref[1];\n    var handleCatchMe = function(catchPokemon) {\n        var res = localStorage.getItem(\"myListPokemon\");\n        var resParse = JSON.parse(res);\n        var tempDataArray = [];\n        tempDataArray = Object.keys(resParse || {}).map(function(data) {\n            return resParse[data];\n        });\n        localStorage.setItem(\"myListPokemon\", JSON.stringify(_toConsumableArray(tempDataArray).concat([\n            catchPokemon\n        ])));\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().back();\n    };\n    var fetchMyCatchPokemon = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function() {\n        var res = localStorage.getItem(\"myListPokemon\");\n        var resParse = JSON.parse(res);\n        setDataMyCatchPokemon(resParse);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchMyCatchPokemon();\n    }, [\n        fetchMyCatchPokemon\n    ]);\n    console.log((next_router__WEBPACK_IMPORTED_MODULE_3___default().query));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pokemon.formattedName\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: pokemon.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().back),\n                    children: \"←\"\n                }, void 0, false, {\n                    fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().number),\n                        children: [\n                            \"#\",\n                            pokemon.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figure__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        handleCatchMe: handleCatchMe,\n                        dataMyCatchPokemon: dataMyCatchPokemon,\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().figure),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),\n                        initial: {\n                            y: -8,\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 0.4\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_moves__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"lLtwZ3Mba1q1KaC0X0d4VEKqctU=\");\n_c = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs0QkFBRUMsT0FBTyxFQUFFLENBQUM7d0JBQUMsQ0FBQzt3QkFDOUJDLE9BQU8sRUFBRSxDQUFDOzRCQUFDRixDQUFDLEVBQUUsQ0FBQzs0QkFBRUMsT0FBTyxFQUFFLENBQUM7d0JBQUMsQ0FBQzt3QkFDN0JFLFVBQVUsRUFBRSxDQUFDOzRCQUFDQyxLQUFLLEVBQUUsR0FBRzt3QkFBQyxDQUFDOzt3R0FFekJoRCwyREFBTztnQ0FBQ0csT0FBTyxFQUFFQSxPQUFPOzs7Ozs7d0dBQ3hCSix5REFBSztnQ0FBQ0ksT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSTFCTiwwREFBTTs7Ozs7Ozs7Ozs7QUFHYixDQUFDO0dBL0RLSyxJQUFJO0tBQUpBLElBQUk7O0FBaUVWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS50c3g/YzM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpZ3VyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWd1cmVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IE1vdmVzIGZyb20gXCIuLi9jb21wb25lbnRzL21vdmVzXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlXCI7XG5pbXBvcnQgeyBnZXRQb2tlbW9uLCBQT0tFTU9OX0NPVU5UIH0gZnJvbSBcIi4uL2xpYi9wb2tlbW9uc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1tpZF0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUG9rZW1vbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvcG9rZW1vblwiO1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgaWQ6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBva2Vtb246IFBva2Vtb25JdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRoczxQYXJhbXM+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpZHMgPSBbLi4uQXJyYXkoUE9LRU1PTl9DT1VOVCkua2V5cygpXS5tYXAoKGkpID0+IGkgKyAxKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IGlkOiBgJHtpZH1gIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8UHJvcHMsIFBhcmFtcz4gPSBhc3luYyAoe1xuICBwYXJhbXMsXG59KSA9PiB7XG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBnZXRQb2tlbW9uKHBhcmFtcyEuaWQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9rZW1vbiB9LFxuICB9O1xufTtcblxuY29uc3QgUGFnZSA9ICh7IHBva2Vtb24gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2RhdGFNeUNhdGNoUG9rZW1vbiwgc2V0RGF0YU15Q2F0Y2hQb2tlbW9uXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGNoTWUgPSAoY2F0Y2hQb2tlbW9uOiBhbnkpID0+IHtcbiAgICBjb25zdCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlzdFBva2Vtb25cIik7XG4gICAgY29uc3QgcmVzUGFyc2UgPSBKU09OLnBhcnNlKHJlcyk7XG5cbiAgICBsZXQgdGVtcERhdGFBcnJheSA9IFtdO1xuICAgIHRlbXBEYXRhQXJyYXkgPSBPYmplY3Qua2V5cyhyZXNQYXJzZSB8fCB7fSkubWFwKChkYXRhKSA9PiByZXNQYXJzZVtkYXRhXSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwibXlMaXN0UG9rZW1vblwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLnRlbXBEYXRhQXJyYXksIGNhdGNoUG9rZW1vbl0pXG4gICAgKTtcbiAgICBSb3V0ZXIuYmFjaygpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoTXlDYXRjaFBva2Vtb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUxpc3RQb2tlbW9uXCIpO1xuICAgIGNvbnN0IHJlc1BhcnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgIHNldERhdGFNeUNhdGNoUG9rZW1vbihyZXNQYXJzZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTXlDYXRjaFBva2Vtb24oKTtcbiAgfSwgW2ZldGNoTXlDYXRjaFBva2Vtb25dKTtcblxuICBjb25zb2xlLmxvZyhSb3V0ZXIucXVlcnkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bva2Vtb24uZm9ybWF0dGVkTmFtZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhY2t9PuKGkDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4je3Bva2Vtb24uaWR9PC9zcGFuPlxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgPEZpZ3VyZVxuICAgICAgICAgIGhhbmRsZUNhdGNoTWU9e2hhbmRsZUNhdGNoTWV9XG4gICAgICAgICAgZGF0YU15Q2F0Y2hQb2tlbW9uPXtkYXRhTXlDYXRjaFBva2Vtb259XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlndXJlfVxuICAgICAgICAgIHBva2Vtb249e3Bva2Vtb259XG4gICAgICAgIC8+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH1cbiAgICAgICAgICBpbml0aWFsPXt7IHk6IC04LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40IH19XG4gICAgICAgID5cbiAgICAgICAgICA8UHJvZmlsZSBwb2tlbW9uPXtwb2tlbW9ufSAvPlxuICAgICAgICAgIDxNb3ZlcyBwb2tlbW9uPXtwb2tlbW9ufSAvPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkIiwiTGluayIsIlJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaWd1cmUiLCJGb290ZXIiLCJIZWFkZXIiLCJNb3ZlcyIsIlByb2ZpbGUiLCJzdHlsZXMiLCJQYWdlIiwicG9rZW1vbiIsImRhdGFNeUNhdGNoUG9rZW1vbiIsInNldERhdGFNeUNhdGNoUG9rZW1vbiIsImhhbmRsZUNhdGNoTWUiLCJjYXRjaFBva2Vtb24iLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzUGFyc2UiLCJKU09OIiwicGFyc2UiLCJ0ZW1wRGF0YUFycmF5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImRhdGEiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYmFjayIsImZldGNoTXlDYXRjaFBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJkaXYiLCJ0aXRsZSIsImZvcm1hdHRlZE5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiYSIsImNsYXNzTmFtZSIsImdyaWQiLCJzcGFuIiwibnVtYmVyIiwiaWQiLCJoZWFkZXIiLCJmaWd1cmUiLCJjb250ZW50IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

/***/ })

});