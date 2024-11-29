/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/Emotion/index.js":
/*!******************************!*\
  !*** ./src/Emotion/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createEmotionCache() {\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: 'css',\n        prepend: true\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRW1vdGlvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFHekIsUUFBUSxDQUFDQyxrQkFBa0IsR0FBRyxDQUFDO0lBQzFDLE1BQU0sQ0FBQ0QscURBQVcsQ0FBQyxDQUFDO1FBQUNFLEdBQUcsRUFBRSxDQUFLO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZXN0YXRpb24tcG9ydGZvbGlvLy4vc3JjL0Vtb3Rpb24vaW5kZXguanM/MTY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnLCBwcmVwZW5kOiB0cnVlIH0pO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImtleSIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Emotion/index.js\n");

/***/ }),

/***/ "./src/Theme/index.js":
/*!****************************!*\
  !*** ./src/Theme/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    typography: {\n        fontFamily: \"Inter\"\n    },\n    palette: {\n        text: {\n            primary: \"#121315\",\n            secondary: \"#FF4F3E\" // Secondary Text Color\n        },\n        background: {\n            default: \"#FFFFFF\" // Default Background Color\n        },\n        primary: {\n            main: \"#003161\",\n            light: \"#227B94\",\n            box_shadow_black: \" #0000001c\",\n            success: \"#37B7C3\",\n            box_shadow_client: \"#0000001c\",\n            box_show_blog: \"#FF4F3E21\",\n            box_shadow_blog_2: \"#0000001a\",\n            divider: \"#37B7C3\",\n            social_bg: \"#37B7C3\",\n            social_color: \"#415674\",\n            inputBorder: \"#0000001f\",\n            HeroGradient: \"linear-gradient(to right, #FFF , #37B7C3)\",\n            WorkGradient: \"linear-gradient(to right, #37B7C3, #FFF)\",\n            ContactGradient: \"linear-gradient(to right, #37B7C3, #FFFFFF4A)\"\n        }\n    },\n    breakpoints: {\n        values: {\n            xxs: 0,\n            xs: 360,\n            sm: 480,\n            msm: 576,\n            lsm: 640,\n            smd: 768,\n            md: 992,\n            lg: 1200,\n            xl: 1536,\n            xxl: 1980 // Double Extra Devices\n        }\n    },\n    components: {\n        MuiContainer: {\n            styleOverrides: {\n                root: {\n                    '@media (min-width: 0px)': {\n                        paddingLeft: '3%',\n                        paddingRight: '3%'\n                    },\n                    '@media (min-width: 480px)': {\n                        paddingLeft: '3%',\n                        paddingRight: '3%'\n                    },\n                    '@media (min-width: 992px)': {\n                        paddingLeft: '3%',\n                        paddingRight: '3%'\n                    },\n                    '@media (min-width: 1200px)': {\n                        paddingLeft: '5%',\n                        paddingRight: '5%'\n                    }\n                }\n            }\n        },\n        MuiButtonBase: {\n            styleOverrides: {\n                root: {\n                    fontFamily: \"Inter\"\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVGhlbWUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELEVBQTJCO0FBQzNCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCxpRUFBVyxDQUFDLENBQUM7SUFDdkJFLFVBQVUsRUFBRSxDQUFDO1FBQ1RDLFVBQVUsRUFBRSxDQUFPO0lBTXZCLENBQUM7SUFDREMsT0FBTyxFQUFFLENBQUM7UUFDTkMsSUFBSSxFQUFFLENBQUM7WUFDSEMsT0FBTyxFQUFFLENBQVM7WUFDbEJDLFNBQVMsRUFBRSxDQUFTLFFBQUMsQ0FBdUI7UUFDaEQsQ0FBQztRQUNEQyxVQUFVLEVBQUUsQ0FBQztZQUNUQyxPQUFPLEVBQUUsQ0FBUyxRQUFDLENBQTJCO1FBQ2xELENBQUM7UUFDREgsT0FBTyxFQUFFLENBQUM7WUFDTkksSUFBSSxFQUFFLENBQVM7WUFDZkMsS0FBSyxFQUFFLENBQVM7WUFDaEJDLGdCQUFnQixFQUFFLENBQVk7WUFDOUJDLE9BQU8sRUFBRSxDQUFTO1lBQ2xCQyxpQkFBaUIsRUFBRSxDQUFXO1lBQzlCQyxhQUFhLEVBQUUsQ0FBVztZQUMxQkMsaUJBQWlCLEVBQUUsQ0FBVztZQUM5QkMsT0FBTyxFQUFFLENBQVM7WUFDbEJDLFNBQVMsRUFBRSxDQUFTO1lBQ3BCQyxZQUFZLEVBQUUsQ0FBUztZQUN2QkMsV0FBVyxFQUFFLENBQVc7WUFDeEJDLFlBQVksRUFBRSxDQUEyQztZQUN6REMsWUFBWSxFQUFFLENBQTBDO1lBQ3hEQyxlQUFlLEVBQUUsQ0FBK0M7UUFDcEUsQ0FBQztJQUNMLENBQUM7SUFDREMsV0FBVyxFQUFFLENBQUM7UUFDVkMsTUFBTSxFQUFFLENBQUM7WUFDTEMsR0FBRyxFQUFFLENBQUM7WUFDTkMsRUFBRSxFQUFFLEdBQUc7WUFDUEMsRUFBRSxFQUFFLEdBQUc7WUFDUEMsR0FBRyxFQUFFLEdBQUc7WUFDUkMsR0FBRyxFQUFFLEdBQUc7WUFDUkMsR0FBRyxFQUFFLEdBQUc7WUFDUkMsRUFBRSxFQUFFLEdBQUc7WUFDUEMsRUFBRSxFQUFFLElBQUk7WUFDUkMsRUFBRSxFQUFFLElBQUk7WUFDUkMsR0FBRyxFQUFFLElBQUksQ0FBd0I7UUFDckMsQ0FBQztJQUNMLENBQUM7SUFDREMsVUFBVSxFQUFFLENBQUM7UUFDVEMsWUFBWSxFQUFFLENBQUM7WUFDWEMsY0FBYyxFQUFFLENBQUM7Z0JBQ2JDLElBQUksRUFBRSxDQUFDO29CQUNILENBQXlCLDBCQUFFLENBQUM7d0JBQ3hCQyxXQUFXLEVBQUUsQ0FBSTt3QkFDakJDLFlBQVksRUFBRSxDQUFJO29CQUN0QixDQUFDO29CQUNELENBQTJCLDRCQUFFLENBQUM7d0JBQzFCRCxXQUFXLEVBQUUsQ0FBSTt3QkFDakJDLFlBQVksRUFBRSxDQUFJO29CQUN0QixDQUFDO29CQUNELENBQTJCLDRCQUFFLENBQUM7d0JBQzFCRCxXQUFXLEVBQUUsQ0FBSTt3QkFDakJDLFlBQVksRUFBRSxDQUFJO29CQUN0QixDQUFDO29CQUNELENBQTRCLDZCQUFFLENBQUM7d0JBQzNCRCxXQUFXLEVBQUUsQ0FBSTt3QkFDakJDLFlBQVksRUFBRSxDQUFJO29CQUN0QixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNEQyxhQUFhLEVBQUUsQ0FBQztZQUNaSixjQUFjLEVBQUUsQ0FBQztnQkFDYkMsSUFBSSxFQUFFLENBQUM7b0JBQ0hwQyxVQUFVLEVBQUUsQ0FBTztnQkFDdkIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZXN0YXRpb24tcG9ydGZvbGlvLy4vc3JjL1RoZW1lL2luZGV4LmpzPzI5MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkludGVyXCJcbiAgICAgICAgLy8gNDAwIFJlZ3VsYXJcbiAgICAgICAgLy8gNTAwIE1lZGl1bVxuICAgICAgICAvLyA2MDAgU2VtaS1Cb2xkXG4gICAgICAgIC8vIDcwMCBCb2xkXG4gICAgICAgIC8vIDgwMCBFeHRyYS1Cb2xkXG4gICAgfSxcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IFwiIzEyMTMxNVwiLCAvLyBEZWZhdWx0IFRleHQgQ29sb3JcbiAgICAgICAgICAgIHNlY29uZGFyeTogXCIjRkY0RjNFXCIgLy8gU2Vjb25kYXJ5IFRleHQgQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogXCIjRkZGRkZGXCIgLy8gRGVmYXVsdCBCYWNrZ3JvdW5kIENvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46IFwiIzAwMzE2MVwiLCAvLyBEb2N1bWVudCBNYWluIFByaW1hcnkgQ29sb3JcbiAgICAgICAgICAgIGxpZ2h0OiBcIiMyMjdCOTRcIiwgLy8gRG9jdW1lbnQgTGlnaHQgQ29sb3IgKEJ1dHRvbiBCYWNrZ3JvdW5kKVxuICAgICAgICAgICAgYm94X3NoYWRvd19ibGFjazogXCIgIzAwMDAwMDFjXCIsIC8vIEJveCBTaGFkb3cgQmxhY2sgKEhlYWRlciBTdGlja3kpXG4gICAgICAgICAgICBzdWNjZXNzOiBcIiMzN0I3QzNcIiwgLy8gU3VjY2Vzc01lc3NhZ2UgQ29sb3JcbiAgICAgICAgICAgIGJveF9zaGFkb3dfY2xpZW50OiBcIiMwMDAwMDAxY1wiLCAvLy8gQm94IFNoYWRvdyBDbGluZXQgU2xpZGVyXG4gICAgICAgICAgICBib3hfc2hvd19ibG9nOiBcIiNGRjRGM0UyMVwiLCAvL0JveCBTaGFkb3cgQmxvZyBTZWN0aW9uXG4gICAgICAgICAgICBib3hfc2hhZG93X2Jsb2dfMjogXCIjMDAwMDAwMWFcIiwgLy8gQm94IFNoYWRvdyBCbG9nIENhdGVnb3J5XG4gICAgICAgICAgICBkaXZpZGVyOiBcIiMzN0I3QzNcIiwgLy8gRGl2aWRlciBDb2xvciAoQWxsIFNlY3Rpb24gRGl2aWRlcilcbiAgICAgICAgICAgIHNvY2lhbF9iZzogXCIjMzdCN0MzXCIsIC8vIFNvY2lhbCBCYWNrZ3JvdW5kIENvbG9yXG4gICAgICAgICAgICBzb2NpYWxfY29sb3I6IFwiIzQxNTY3NFwiLCAvLyBTb2NpYWwgSWNvbiBDb2xvclxuICAgICAgICAgICAgaW5wdXRCb3JkZXI6IFwiIzAwMDAwMDFmXCIsIC8vRm9yIE5ld3NMZXR0ZXIgSW5wdXQgQm9yZGVyIENvbG9yXG4gICAgICAgICAgICBIZXJvR3JhZGllbnQ6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZGICwgIzM3QjdDMylcIiwgLy8gR3JhZGllbnQgKEhlcm8gU2VjdGlvbilcbiAgICAgICAgICAgIFdvcmtHcmFkaWVudDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzN0I3QzMsICNGRkYpXCIsIC8vIEdyYWRpZW50IChQb3J0Zm9saW8gU2VjdGlvbilcbiAgICAgICAgICAgIENvbnRhY3RHcmFkaWVudDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzN0I3QzMsICNGRkZGRkY0QSlcIiwgLy8gR3JhZGllbnQgKENvbnRhY3QgU2VjdGlvbilcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICB4eHM6IDAsIC8vIERvdWJsZSBFeHRyYSBTbWFsbCBEZXZpY2VzXG4gICAgICAgICAgICB4czogMzYwLCAvLyBFeHRyYSBTbWFsbCBEZXZpY2VzXG4gICAgICAgICAgICBzbTogNDgwLCAvLyBTbWFsbCBEZXZpY2VzXG4gICAgICAgICAgICBtc206IDU3NiwgLy8gTWVkaXVtIFNtYWxsIERldmljZXNcbiAgICAgICAgICAgIGxzbTogNjQwLCAvLyBMYXJnZSBTbWFsbCBEZXZpY2VzXG4gICAgICAgICAgICBzbWQ6IDc2OCwgLy8gU21hbGwgTWVkaXVtIERldmljZXNcbiAgICAgICAgICAgIG1kOiA5OTIsIC8vIE1lZGl1bSBEZXZpY2VzXG4gICAgICAgICAgICBsZzogMTIwMCwgLy8gTGFyZ2UgRGV2aWNlc1xuICAgICAgICAgICAgeGw6IDE1MzYsIC8vIEV4dHJhIFNtYWxsIERldmljZXNcbiAgICAgICAgICAgIHh4bDogMTk4MCAvLyBEb3VibGUgRXh0cmEgRGV2aWNlc1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNdWlDb250YWluZXI6IHtcbiAgICAgICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDBweCknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA0ODBweCknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA5OTJweCknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc1JScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1JScsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkludGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJ0ZXh0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwibWFpbiIsImxpZ2h0IiwiYm94X3NoYWRvd19ibGFjayIsInN1Y2Nlc3MiLCJib3hfc2hhZG93X2NsaWVudCIsImJveF9zaG93X2Jsb2ciLCJib3hfc2hhZG93X2Jsb2dfMiIsImRpdmlkZXIiLCJzb2NpYWxfYmciLCJzb2NpYWxfY29sb3IiLCJpbnB1dEJvcmRlciIsIkhlcm9HcmFkaWVudCIsIldvcmtHcmFkaWVudCIsIkNvbnRhY3RHcmFkaWVudCIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwieHhzIiwieHMiLCJzbSIsIm1zbSIsImxzbSIsInNtZCIsIm1kIiwibGciLCJ4bCIsInh4bCIsImNvbXBvbmVudHMiLCJNdWlDb250YWluZXIiLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIk11aUJ1dHRvbkJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Theme/index.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Theme */ \"./src/Theme/index.js\");\n/* harmony import */ var Emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Emotion */ \"./src/Emotion/index.js\");\n/* harmony import */ var _fontsource_inter_400_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/inter/400.css */ \"./node_modules/@fontsource/inter/400.css\");\n/* harmony import */ var _fontsource_inter_400_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_400_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fontsource_inter_500_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/inter/500.css */ \"./node_modules/@fontsource/inter/500.css\");\n/* harmony import */ var _fontsource_inter_500_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_500_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fontsource_inter_600_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fontsource/inter/600.css */ \"./node_modules/@fontsource/inter/600.css\");\n/* harmony import */ var _fontsource_inter_600_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_600_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _fontsource_inter_700_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fontsource/inter/700.css */ \"./node_modules/@fontsource/inter/700.css\");\n/* harmony import */ var _fontsource_inter_700_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_700_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _fontsource_inter_800_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fontsource/inter/800.css */ \"./node_modules/@fontsource/inter/800.css\");\n/* harmony import */ var _fontsource_inter_800_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_800_css__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n// Fonts\n\n\n\n\n\nconst clientSideEmotionCache = (0,Emotion__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nfunction MyApp(props) {\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.CacheProvider, {\n        value: emotionCache,\n        __source: {\n            fileName: \"D:\\\\InternShip\\\\Codified Labs\\\\Code\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"D:\\\\InternShip\\\\Codified Labs\\\\Code\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"initial-scale=1, width=device-width\",\n                    __source: {\n                        fileName: \"D:\\\\InternShip\\\\Codified Labs\\\\Code\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: Theme__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                __source: {\n                    fileName: \"D:\\\\InternShip\\\\Codified Labs\\\\Code\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        __source: {\n                            fileName: \"D:\\\\InternShip\\\\Codified Labs\\\\Code\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                        ...pageProps,\n                        __source: {\n                            fileName: \"D:\\\\InternShip\\\\Codified Labs\\\\Code\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired),\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0k7QUFDTjtBQUN3QjtBQUNEO0FBQ0w7QUFDckI7QUFDZTtBQUd4QyxFQUFRO0FBQzBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQbEMsS0FBSyxDQUFDUSxzQkFBc0IsR0FBR0QsbURBQWtCO0FBU2xDLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFlBQVksRUFBR0osc0JBQXNCLEdBQUVLLFNBQVMsRUFBQyxDQUFDLEdBQUdILEtBQUs7SUFFN0UsTUFBTSx1RUFDSEwseURBQWE7UUFBQ1MsS0FBSyxFQUFFRixZQUFZOzs7Ozs7OztpRkFDL0JWLGtEQUFJOzs7Ozs7OytGQUVGYSxDQUFJO29CQUFDQyxJQUFJLEVBQUMsQ0FBVTtvQkFBQ0MsT0FBTyxFQUFDLENBQXFDOzs7Ozs7Ozs7a0ZBRXBFZCwrREFBYTtnQkFBQ0csS0FBSyxFQUFFQSw2Q0FBSzs7Ozs7Ozs7eUZBQ3hCRixrRUFBVzs7Ozs7Ozs7eUZBQ1hPLFNBQVM7MkJBQUtFLFNBQVM7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRURKLEtBQUssQ0FBQ1MsU0FBUyxHQUFHLENBQUM7SUFDakJQLFNBQVMsRUFBRVYsMEVBQWdDO0lBQzNDVyxZQUFZLEVBQUVYLDBEQUFnQjtJQUM5QlksU0FBUyxFQUFFWixxRUFBMkI7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVzdGF0aW9uLXBvcnRmb2xpby8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB0aGVtZSBmcm9tICdUaGVtZSc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJ0Vtb3Rpb24nO1xuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuXG4vLyBGb250c1xuaW1wb3J0ICdAZm9udHNvdXJjZS9pbnRlci80MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXIvNTAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2ludGVyLzYwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9pbnRlci83MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXIvODAwLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBlbW90aW9uQ2FjaGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiQ2FjaGVQcm92aWRlciIsInRoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@fontsource/inter/400.css":
/*!************************************************!*\
  !*** ./node_modules/@fontsource/inter/400.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/inter/500.css":
/*!************************************************!*\
  !*** ./node_modules/@fontsource/inter/500.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/inter/600.css":
/*!************************************************!*\
  !*** ./node_modules/@fontsource/inter/600.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/inter/700.css":
/*!************************************************!*\
  !*** ./node_modules/@fontsource/inter/700.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/inter/800.css":
/*!************************************************!*\
  !*** ./node_modules/@fontsource/inter/800.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();