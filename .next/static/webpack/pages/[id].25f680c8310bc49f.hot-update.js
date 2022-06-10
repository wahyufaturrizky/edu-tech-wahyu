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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_figure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/figure */ \"./components/figure/index.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.tsx\");\n/* harmony import */ var _components_moves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/moves */ \"./components/moves/index.tsx\");\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/profile */ \"./components/profile/index.tsx\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/[id].module.css */ \"./styles/[id].module.css\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function(param) {\n    var pokemon = param.pokemon;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), dataMyCatchPokemon = ref[0], setDataMyCatchPokemon = ref[1];\n    var handleCatchMe = function(catchPokemon) {\n        if (router.query.fromPage === \"/\") {\n            var res = localStorage.getItem(\"myListPokemon\");\n            var resParse = JSON.parse(res);\n            var tempDataArray = [];\n            tempDataArray = Object.keys(resParse || {}).map(function(data) {\n                return resParse[data];\n            });\n            localStorage.setItem(\"myListPokemon\", JSON.stringify(_toConsumableArray(tempDataArray).concat([\n                catchPokemon\n            ])));\n            router.back();\n        } else {\n            var res1 = localStorage.getItem(\"myListPokemon\");\n            var resParse1 = JSON.parse(res1);\n            var tempDataArray1 = [];\n            tempDataArray1 = Object.keys(resParse1 || {}).map(function(data) {\n                return resParse1[data];\n            });\n            console.log(\"@tempDataArray\", tempDataArray1);\n        // localStorage.setItem(\"myListPokemon\", JSON.stringify(tempDataArray));\n        // router.back();\n        }\n    };\n    var fetchMyCatchPokemon = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function() {\n        var res = localStorage.getItem(\"myListPokemon\");\n        var resParse = JSON.parse(res);\n        setDataMyCatchPokemon(resParse);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchMyCatchPokemon();\n    }, [\n        fetchMyCatchPokemon\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pokemon.formattedName\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: pokemon.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"\".concat(router.query.fromPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().back),\n                    children: \"←\"\n                }, void 0, false, {\n                    fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().number),\n                        children: [\n                            \"#\",\n                            pokemon.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figure__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        router: router,\n                        handleCatchMe: handleCatchMe,\n                        dataMyCatchPokemon: dataMyCatchPokemon,\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().figure),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),\n                        initial: {\n                            y: -8,\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 0.4\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_moves__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"+jfTMUzNF2kG8hK/y61q1P3Us28=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9wYWdlcy9baWRdLnRzeD9jMzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpZ3VyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWd1cmVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IE1vdmVzIGZyb20gXCIuLi9jb21wb25lbnRzL21vdmVzXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlXCI7XG5pbXBvcnQgeyBnZXRQb2tlbW9uLCBQT0tFTU9OX0NPVU5UIH0gZnJvbSBcIi4uL2xpYi9wb2tlbW9uc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1tpZF0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUG9rZW1vbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvcG9rZW1vblwiO1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgaWQ6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBva2Vtb246IFBva2Vtb25JdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRoczxQYXJhbXM+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpZHMgPSBbLi4uQXJyYXkoUE9LRU1PTl9DT1VOVCkua2V5cygpXS5tYXAoKGkpID0+IGkgKyAxKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IGlkOiBgJHtpZH1gIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8UHJvcHMsIFBhcmFtcz4gPSBhc3luYyAoe1xuICBwYXJhbXMsXG59KSA9PiB7XG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBnZXRQb2tlbW9uKHBhcmFtcyEuaWQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9rZW1vbiB9LFxuICB9O1xufTtcblxuY29uc3QgUGFnZSA9ICh7IHBva2Vtb24gfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtkYXRhTXlDYXRjaFBva2Vtb24sIHNldERhdGFNeUNhdGNoUG9rZW1vbl0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICBjb25zdCBoYW5kbGVDYXRjaE1lID0gKGNhdGNoUG9rZW1vbjogYW55KSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeS5mcm9tUGFnZSA9PT0gXCIvXCIpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlMaXN0UG9rZW1vblwiKTtcbiAgICAgIGNvbnN0IHJlc1BhcnNlID0gSlNPTi5wYXJzZShyZXMpO1xuXG4gICAgICBsZXQgdGVtcERhdGFBcnJheSA9IFtdO1xuICAgICAgdGVtcERhdGFBcnJheSA9IE9iamVjdC5rZXlzKHJlc1BhcnNlIHx8IHt9KS5tYXAoKGRhdGEpID0+IHJlc1BhcnNlW2RhdGFdKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibXlMaXN0UG9rZW1vblwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShbLi4udGVtcERhdGFBcnJheSwgY2F0Y2hQb2tlbW9uXSlcbiAgICAgICk7XG4gICAgICByb3V0ZXIuYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlzdFBva2Vtb25cIik7XG4gICAgICBjb25zdCByZXNQYXJzZSA9IEpTT04ucGFyc2UocmVzKTtcblxuICAgICAgbGV0IHRlbXBEYXRhQXJyYXkgPSBbXTtcbiAgICAgIHRlbXBEYXRhQXJyYXkgPSBPYmplY3Qua2V5cyhyZXNQYXJzZSB8fCB7fSkubWFwKChkYXRhKSA9PiByZXNQYXJzZVtkYXRhXSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQHRlbXBEYXRhQXJyYXlcIiwgdGVtcERhdGFBcnJheSk7XG5cbiAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlMaXN0UG9rZW1vblwiLCBKU09OLnN0cmluZ2lmeSh0ZW1wRGF0YUFycmF5KSk7XG4gICAgICAvLyByb3V0ZXIuYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaE15Q2F0Y2hQb2tlbW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlMaXN0UG9rZW1vblwiKTtcbiAgICBjb25zdCByZXNQYXJzZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICBzZXREYXRhTXlDYXRjaFBva2Vtb24ocmVzUGFyc2UpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaE15Q2F0Y2hQb2tlbW9uKCk7XG4gIH0sIFtmZXRjaE15Q2F0Y2hQb2tlbW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9rZW1vbi5mb3JtYXR0ZWROYW1lfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPExpbmsgaHJlZj17YCR7cm91dGVyLnF1ZXJ5LmZyb21QYWdlfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrfT7ihpA8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+I3twb2tlbW9uLmlkfTwvc3Bhbj5cbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IHBva2Vtb249e3Bva2Vtb259IC8+XG4gICAgICAgIDxGaWd1cmVcbiAgICAgICAgICByb3V0ZXI9e3JvdXRlcn1cbiAgICAgICAgICBoYW5kbGVDYXRjaE1lPXtoYW5kbGVDYXRjaE1lfVxuICAgICAgICAgIGRhdGFNeUNhdGNoUG9rZW1vbj17ZGF0YU15Q2F0Y2hQb2tlbW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpZ3VyZX1cbiAgICAgICAgICBwb2tlbW9uPXtwb2tlbW9ufVxuICAgICAgICAvPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XG4gICAgICAgICAgaW5pdGlhbD17eyB5OiAtOCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFByb2ZpbGUgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgICA8TW92ZXMgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlndXJlIiwiRm9vdGVyIiwiSGVhZGVyIiwiTW92ZXMiLCJQcm9maWxlIiwic3R5bGVzIiwiUGFnZSIsInBva2Vtb24iLCJyb3V0ZXIiLCJkYXRhTXlDYXRjaFBva2Vtb24iLCJzZXREYXRhTXlDYXRjaFBva2Vtb24iLCJoYW5kbGVDYXRjaE1lIiwiY2F0Y2hQb2tlbW9uIiwicXVlcnkiLCJmcm9tUGFnZSIsInJlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNQYXJzZSIsIkpTT04iLCJwYXJzZSIsInRlbXBEYXRhQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJiYWNrIiwiY29uc29sZSIsImxvZyIsImZldGNoTXlDYXRjaFBva2Vtb24iLCJkaXYiLCJ0aXRsZSIsImZvcm1hdHRlZE5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiYSIsImNsYXNzTmFtZSIsImdyaWQiLCJzcGFuIiwibnVtYmVyIiwiaWQiLCJoZWFkZXIiLCJmaWd1cmUiLCJjb250ZW50IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

/***/ })

});