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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_figure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/figure */ \"./components/figure/index.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.tsx\");\n/* harmony import */ var _components_moves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/moves */ \"./components/moves/index.tsx\");\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/profile */ \"./components/profile/index.tsx\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/[id].module.css */ \"./styles/[id].module.css\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function(param) {\n    var pokemon = param.pokemon;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), dataMyCatchPokemon = ref[0], setDataMyCatchPokemon = ref[1];\n    var handleCatchMe = function(catchPokemon) {\n        if (router.query.fromPage === \"/\") {\n            var res = localStorage.getItem(\"myListPokemon\");\n            var resParse = JSON.parse(res);\n            var tempDataArray = [];\n            tempDataArray = Object.keys(resParse || {}).map(function(data) {\n                return resParse[data];\n            });\n            localStorage.setItem(\"myListPokemon\", JSON.stringify(_toConsumableArray(tempDataArray).concat([\n                catchPokemon\n            ])));\n            router.back();\n        } else {\n            var res1 = localStorage.getItem(\"myListPokemon\");\n            var resParse1 = JSON.parse(res1);\n            var tempDataArray1 = [];\n            tempDataArray1 = dataMyCatchPokemon.filter(function(filtering) {\n                return filtering.id !== catchPokemon.id;\n            });\n            localStorage.setItem(\"myListPokemon\", JSON.stringify(tempDataArray1));\n            router.back();\n        }\n    };\n    var fetchMyCatchPokemon = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function() {\n        var res = localStorage.getItem(\"myListPokemon\");\n        var resParse = JSON.parse(res);\n        setDataMyCatchPokemon(resParse);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchMyCatchPokemon();\n    }, [\n        fetchMyCatchPokemon\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pokemon.formattedName\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: pokemon.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"\".concat(router.query.fromPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().back),\n                    children: \"←\"\n                }, void 0, false, {\n                    fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().number),\n                        children: [\n                            \"#\",\n                            pokemon.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figure__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        router: router,\n                        handleCatchMe: handleCatchMe,\n                        dataMyCatchPokemon: dataMyCatchPokemon,\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().figure),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),\n                        initial: {\n                            y: -8,\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 0.4\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_moves__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"+jfTMUzNF2kG8hK/y61q1P3Us28=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0udHN4P2MzNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlndXJlIGZyb20gXCIuLi9jb21wb25lbnRzL2ZpZ3VyZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgTW92ZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW92ZXNcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2ZpbGVcIjtcbmltcG9ydCB7IGdldFBva2Vtb24sIFBPS0VNT05fQ09VTlQgfSBmcm9tIFwiLi4vbGliL3Bva2Vtb25zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvW2lkXS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBQb2tlbW9uSXRlbSB9IGZyb20gXCIuLi90eXBlcy9wb2tlbW9uXCI7XG5cbnR5cGUgUGFyYW1zID0ge1xuICBpZDogc3RyaW5nO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9rZW1vbjogUG9rZW1vbkl0ZW07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPFBhcmFtcz4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGlkcyA9IFsuLi5BcnJheShQT0tFTU9OX0NPVU5UKS5rZXlzKCldLm1hcCgoaSkgPT4gaSArIDEpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGlkcy5tYXAoKGlkKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IGAke2lkfWAgfSB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQcm9wcywgUGFyYW1zPiA9IGFzeW5jICh7XG4gIHBhcmFtcyxcbn0pID0+IHtcbiAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGdldFBva2Vtb24ocGFyYW1zIS5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb2tlbW9uIH0sXG4gIH07XG59O1xuXG5jb25zdCBQYWdlID0gKHsgcG9rZW1vbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2RhdGFNeUNhdGNoUG9rZW1vbiwgc2V0RGF0YU15Q2F0Y2hQb2tlbW9uXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGNoTWUgPSAoY2F0Y2hQb2tlbW9uOiBhbnkpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmZyb21QYWdlID09PSBcIi9cIikge1xuICAgICAgY29uc3QgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUxpc3RQb2tlbW9uXCIpO1xuICAgICAgY29uc3QgcmVzUGFyc2UgPSBKU09OLnBhcnNlKHJlcyk7XG5cbiAgICAgIGxldCB0ZW1wRGF0YUFycmF5ID0gW107XG4gICAgICB0ZW1wRGF0YUFycmF5ID0gT2JqZWN0LmtleXMocmVzUGFyc2UgfHwge30pLm1hcCgoZGF0YSkgPT4gcmVzUGFyc2VbZGF0YV0pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJteUxpc3RQb2tlbW9uXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFsuLi50ZW1wRGF0YUFycmF5LCBjYXRjaFBva2Vtb25dKVxuICAgICAgKTtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlMaXN0UG9rZW1vblwiKTtcbiAgICAgIGNvbnN0IHJlc1BhcnNlID0gSlNPTi5wYXJzZShyZXMgYXMgc3RyaW5nKTtcblxuICAgICAgbGV0IHRlbXBEYXRhQXJyYXkgPSBbXTtcbiAgICAgIHRlbXBEYXRhQXJyYXkgPSBkYXRhTXlDYXRjaFBva2Vtb24uZmlsdGVyKFxuICAgICAgICAoZmlsdGVyaW5nKSA9PiBmaWx0ZXJpbmcuaWQgIT09IGNhdGNoUG9rZW1vbi5pZFxuICAgICAgKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteUxpc3RQb2tlbW9uXCIsIEpTT04uc3RyaW5naWZ5KHRlbXBEYXRhQXJyYXkpKTtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoTXlDYXRjaFBva2Vtb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUxpc3RQb2tlbW9uXCIpO1xuICAgIGNvbnN0IHJlc1BhcnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgIHNldERhdGFNeUNhdGNoUG9rZW1vbihyZXNQYXJzZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTXlDYXRjaFBva2Vtb24oKTtcbiAgfSwgW2ZldGNoTXlDYXRjaFBva2Vtb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb2tlbW9uLmZvcm1hdHRlZE5hbWV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TGluayBocmVmPXtgJHtyb3V0ZXIucXVlcnkuZnJvbVBhZ2V9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhY2t9PuKGkDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT4je3Bva2Vtb24uaWR9PC9zcGFuPlxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgPEZpZ3VyZVxuICAgICAgICAgIHJvdXRlcj17cm91dGVyfVxuICAgICAgICAgIGhhbmRsZUNhdGNoTWU9e2hhbmRsZUNhdGNoTWV9XG4gICAgICAgICAgZGF0YU15Q2F0Y2hQb2tlbW9uPXtkYXRhTXlDYXRjaFBva2Vtb259XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlndXJlfVxuICAgICAgICAgIHBva2Vtb249e3Bva2Vtb259XG4gICAgICAgIC8+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH1cbiAgICAgICAgICBpbml0aWFsPXt7IHk6IC04LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40IH19XG4gICAgICAgID5cbiAgICAgICAgICA8UHJvZmlsZSBwb2tlbW9uPXtwb2tlbW9ufSAvPlxuICAgICAgICAgIDxNb3ZlcyBwb2tlbW9uPXtwb2tlbW9ufSAvPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkIiwiTGluayIsInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaWd1cmUiLCJGb290ZXIiLCJIZWFkZXIiLCJNb3ZlcyIsIlByb2ZpbGUiLCJzdHlsZXMiLCJQYWdlIiwicG9rZW1vbiIsInJvdXRlciIsImRhdGFNeUNhdGNoUG9rZW1vbiIsInNldERhdGFNeUNhdGNoUG9rZW1vbiIsImhhbmRsZUNhdGNoTWUiLCJjYXRjaFBva2Vtb24iLCJxdWVyeSIsImZyb21QYWdlIiwicmVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc1BhcnNlIiwiSlNPTiIsInBhcnNlIiwidGVtcERhdGFBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImJhY2siLCJmaWx0ZXIiLCJmaWx0ZXJpbmciLCJpZCIsImZldGNoTXlDYXRjaFBva2Vtb24iLCJkaXYiLCJ0aXRsZSIsImZvcm1hdHRlZE5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiYSIsImNsYXNzTmFtZSIsImdyaWQiLCJzcGFuIiwibnVtYmVyIiwiaGVhZGVyIiwiZmlndXJlIiwiY29udGVudCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

/***/ })

});