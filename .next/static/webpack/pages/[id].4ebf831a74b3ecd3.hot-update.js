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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_figure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/figure */ \"./components/figure/index.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.tsx\");\n/* harmony import */ var _components_moves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/moves */ \"./components/moves/index.tsx\");\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/profile */ \"./components/profile/index.tsx\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/[id].module.css */ \"./styles/[id].module.css\");\n/* harmony import */ var _styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function(param) {\n    var pokemon = param.pokemon;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), dataMyCatchPokemon = ref[0], setDataMyCatchPokemon = ref[1];\n    var handleCatchMe = function(catchPokemon) {\n        var res = localStorage.getItem(\"myListPokemon\");\n        var resParse = JSON.parse(res);\n        var tempDataArray = [];\n        tempDataArray = Object.keys(resParse || {}).map(function(data) {\n            return resParse[data];\n        });\n        localStorage.setItem(\"myListPokemon\", JSON.stringify(_toConsumableArray(tempDataArray).concat([\n            catchPokemon\n        ])));\n        router.back();\n    };\n    var fetchMyCatchPokemon = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function() {\n        var res = localStorage.getItem(\"myListPokemon\");\n        var resParse = JSON.parse(res);\n        setDataMyCatchPokemon(resParse);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchMyCatchPokemon();\n    }, [\n        fetchMyCatchPokemon\n    ]);\n    console.log(router.query.fromPage);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pokemon.formattedName\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: pokemon.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"\".concat(router.query.fromPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().back),\n                    children: \"←\"\n                }, void 0, false, {\n                    fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().number),\n                        children: [\n                            \"#\",\n                            pokemon.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figure__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        handleCatchMe: handleCatchMe,\n                        dataMyCatchPokemon: dataMyCatchPokemon,\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().figure),\n                        pokemon: pokemon\n                    }, void 0, false, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                        className: (_styles_id_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),\n                        initial: {\n                            y: -8,\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 0.4\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_moves__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                pokemon: pokemon\n                            }, void 0, false, {\n                                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/engineering/Documents/React Js/tru-trip-wahyu-fatur-rizki/pages/[id].tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"+jfTMUzNF2kG8hK/y61q1P3Us28=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUVWO0FBQ0E7QUFDVztBQUNpQjtBQUNmO0FBQ0E7QUFDQTtBQUNGO0FBQ0k7QUFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCOUMsR0FBSyxDQUFDYSxJQUFJLEdBQUcsUUFBUSxRQUFnQixDQUFDO1FBQXRCQyxPQUFPLFNBQVBBLE9BQU87O0lBQ3JCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHWixzREFBUztJQUN4QixHQUFLLENBQStDRyxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBN0RVLGtCQUFrQixHQUEyQlYsR0FBaUIsS0FBMUNXLHFCQUFxQixHQUFJWCxHQUFpQjtJQUVyRSxHQUFLLENBQUNZLGFBQWEsR0FBRyxRQUFRLENBQVBDLFlBQWlCLEVBQUssQ0FBQztRQUM1QyxHQUFLLENBQUNDLEdBQUcsR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBZTtRQUNoRCxHQUFLLENBQUNDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUc7UUFFL0IsR0FBRyxDQUFDTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCQSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUVNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7WUFBS1AsTUFBTSxDQUFOQSxRQUFRLENBQUNPLElBQUk7O1FBRXZFVCxZQUFZLENBQUNVLE9BQU8sQ0FDbEIsQ0FBZSxnQkFDZlAsSUFBSSxDQUFDUSxTQUFTLG9CQUFLTixhQUFhLFNBQWpCLENBQUM7WUFBa0JQLFlBQVk7UUFBQSxDQUFDO1FBRWpESixNQUFNLENBQUNrQixJQUFJO0lBQ2IsQ0FBQztJQUVELEdBQUssQ0FBQ0MsbUJBQW1CLEdBQUc5QixrREFBVyxDQUFDLFFBQzFDLEdBRGdELENBQUM7UUFDN0MsR0FBSyxDQUFDZ0IsR0FBRyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFlO1FBQ2hELEdBQUssQ0FBQ0MsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsR0FBRztRQUMvQkgscUJBQXFCLENBQUNNLFFBQVE7SUFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMbEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZjZCLG1CQUFtQjtJQUNyQixDQUFDLEVBQUUsQ0FBQ0E7UUFBQUEsbUJBQW1CO0lBQUEsQ0FBQztJQUV4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNyQixNQUFNLENBQUNzQixLQUFLLENBQUNDLFFBQVE7SUFFakMsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0R0QyxrREFBSTs7Z0dBQ0Z1QyxDQUFLO2tDQUFFMUIsT0FBTyxDQUFDMkIsYUFBYTs7Ozs7O2dHQUM1QkMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBRTlCLE9BQU8sQ0FBQytCLE9BQU8sQ0FBQ0MsYUFBYTs7Ozs7Ozs7Ozs7O3dGQUdyRDVDLGtEQUFJO2dCQUFDMEMsSUFBSSxFQUFHLEdBQXdCLE9BQXRCN0IsTUFBTSxDQUFDc0IsS0FBSyxDQUFDQyxRQUFRO3NHQUNqQ1MsQ0FBQztvQkFBQ0MsU0FBUyxFQUFFcEMsb0VBQVc7OEJBQUUsQ0FBQzs7Ozs7Ozs7Ozs7d0ZBRzdCMkIsQ0FBRztnQkFBQ1MsU0FBUyxFQUFFcEMsb0VBQVc7O2dHQUN4QnNDLENBQUk7d0JBQUNGLFNBQVMsRUFBRXBDLHNFQUFhOzs0QkFBRSxDQUFDOzRCQUFDRSxPQUFPLENBQUNzQyxFQUFFOzs7Ozs7O2dHQUMzQzNDLDBEQUFNO3dCQUFDdUMsU0FBUyxFQUFFcEMsc0VBQWE7d0JBQUVFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7O2dHQUNqRFAsMERBQU07d0JBQ0xXLGFBQWEsRUFBRUEsYUFBYTt3QkFDNUJGLGtCQUFrQixFQUFFQSxrQkFBa0I7d0JBQ3RDZ0MsU0FBUyxFQUFFcEMsc0VBQWE7d0JBQ3hCRSxPQUFPLEVBQUVBLE9BQU87Ozs7OztnR0FFakJkLHNEQUFVO3dCQUNUZ0QsU0FBUyxFQUFFcEMsdUVBQWM7d0JBQ3pCNEMsT0FBTyxFQUFFLENBQUM7NEJBQUNDLENBQUMsR0FBRyxDQUFDOzRCQUFFQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQyxDQUFDO3dCQUM5QkMsT0FBTyxFQUFFLENBQUM7NEJBQUNGLENBQUMsRUFBRSxDQUFDOzRCQUFFQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQyxDQUFDO3dCQUM3QkUsVUFBVSxFQUFFLENBQUM7NEJBQUNDLEtBQUssRUFBRSxHQUFHO3dCQUFDLENBQUM7O3dHQUV6QmxELDJEQUFPO2dDQUFDRyxPQUFPLEVBQUVBLE9BQU87Ozs7Ozt3R0FDeEJKLHlEQUFLO2dDQUFDSSxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJMUJOLDBEQUFNOzs7Ozs7Ozs7OztBQUdiLENBQUM7R0FoRUtLLElBQUk7O1FBQ09WLGtEQUFTOzs7S0FEcEJVLElBQUk7O0FBa0VWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS50c3g/YzM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWd1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlndXJlXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBNb3ZlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3Zlc1wiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZmlsZVwiO1xuaW1wb3J0IHsgZ2V0UG9rZW1vbiwgUE9LRU1PTl9DT1VOVCB9IGZyb20gXCIuLi9saWIvcG9rZW1vbnNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9baWRdLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFBva2Vtb25JdGVtIH0gZnJvbSBcIi4uL3R5cGVzL3Bva2Vtb25cIjtcblxudHlwZSBQYXJhbXMgPSB7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwb2tlbW9uOiBQb2tlbW9uSXRlbTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8UGFyYW1zPiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaWRzID0gWy4uLkFycmF5KFBPS0VNT05fQ09VTlQpLmtleXMoKV0ubWFwKChpKSA9PiBpICsgMSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogYCR7aWR9YCB9IH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFByb3BzLCBQYXJhbXM+ID0gYXN5bmMgKHtcbiAgcGFyYW1zLFxufSkgPT4ge1xuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZ2V0UG9rZW1vbihwYXJhbXMhLmlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBva2Vtb24gfSxcbiAgfTtcbn07XG5cbmNvbnN0IFBhZ2UgPSAoeyBwb2tlbW9uIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGF0YU15Q2F0Y2hQb2tlbW9uLCBzZXREYXRhTXlDYXRjaFBva2Vtb25dID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2F0Y2hNZSA9IChjYXRjaFBva2Vtb246IGFueSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlMaXN0UG9rZW1vblwiKTtcbiAgICBjb25zdCByZXNQYXJzZSA9IEpTT04ucGFyc2UocmVzKTtcblxuICAgIGxldCB0ZW1wRGF0YUFycmF5ID0gW107XG4gICAgdGVtcERhdGFBcnJheSA9IE9iamVjdC5rZXlzKHJlc1BhcnNlIHx8IHt9KS5tYXAoKGRhdGEpID0+IHJlc1BhcnNlW2RhdGFdKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJteUxpc3RQb2tlbW9uXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShbLi4udGVtcERhdGFBcnJheSwgY2F0Y2hQb2tlbW9uXSlcbiAgICApO1xuICAgIHJvdXRlci5iYWNrKCk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hNeUNhdGNoUG9rZW1vbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlzdFBva2Vtb25cIik7XG4gICAgY29uc3QgcmVzUGFyc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgc2V0RGF0YU15Q2F0Y2hQb2tlbW9uKHJlc1BhcnNlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hNeUNhdGNoUG9rZW1vbigpO1xuICB9LCBbZmV0Y2hNeUNhdGNoUG9rZW1vbl0pO1xuXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5mcm9tUGFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9rZW1vbi5mb3JtYXR0ZWROYW1lfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPExpbmsgaHJlZj17YCR7cm91dGVyLnF1ZXJ5LmZyb21QYWdlfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrfT7ihpA8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+I3twb2tlbW9uLmlkfTwvc3Bhbj5cbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IHBva2Vtb249e3Bva2Vtb259IC8+XG4gICAgICAgIDxGaWd1cmVcbiAgICAgICAgICBoYW5kbGVDYXRjaE1lPXtoYW5kbGVDYXRjaE1lfVxuICAgICAgICAgIGRhdGFNeUNhdGNoUG9rZW1vbj17ZGF0YU15Q2F0Y2hQb2tlbW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpZ3VyZX1cbiAgICAgICAgICBwb2tlbW9uPXtwb2tlbW9ufVxuICAgICAgICAvPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XG4gICAgICAgICAgaW5pdGlhbD17eyB5OiAtOCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFByb2ZpbGUgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgICA8TW92ZXMgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlndXJlIiwiRm9vdGVyIiwiSGVhZGVyIiwiTW92ZXMiLCJQcm9maWxlIiwic3R5bGVzIiwiUGFnZSIsInBva2Vtb24iLCJyb3V0ZXIiLCJkYXRhTXlDYXRjaFBva2Vtb24iLCJzZXREYXRhTXlDYXRjaFBva2Vtb24iLCJoYW5kbGVDYXRjaE1lIiwiY2F0Y2hQb2tlbW9uIiwicmVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc1BhcnNlIiwiSlNPTiIsInBhcnNlIiwidGVtcERhdGFBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImJhY2siLCJmZXRjaE15Q2F0Y2hQb2tlbW9uIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZnJvbVBhZ2UiLCJkaXYiLCJ0aXRsZSIsImZvcm1hdHRlZE5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiYSIsImNsYXNzTmFtZSIsImdyaWQiLCJzcGFuIiwibnVtYmVyIiwiaWQiLCJoZWFkZXIiLCJmaWd1cmUiLCJjb250ZW50IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

/***/ })

});