"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Call)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@daily-co/daily-js"
const daily_js_namespaceObject = require("@daily-co/daily-js");
var daily_js_default = /*#__PURE__*/__webpack_require__.n(daily_js_namespaceObject);
;// CONCATENATED MODULE: ./components/webinar.js



const CALL_OPTIONS = {
    iframeStyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999999,
        margin: 0,
        width: "100%",
        height: "100%"
    },
    showLeaveButton: false,
    showFullscreenButton: true
};
const DEFAULT_HEIGHT = 400;
const WebinarCall = ()=>{
    const videoRef = (0,external_react_.useRef)(null);
    const { 0: height , 1: setHeight  } = (0,external_react_.useState)(DEFAULT_HEIGHT);
    const { 0: callframe , 1: setCallframe  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (!videoRef || !(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) || callframe) return;
        // CALL_OPTIONS.url = "https://[DOMAIN].daily.co/[ROOM-NAME]";
        CALL_OPTIONS.url = "https://kustomer.daily.co/Hoang-Manager";
        const newCallframe = daily_js_default().createFrame(videoRef.current, CALL_OPTIONS);
        newCallframe.join().then(()=>{
            // setHeight((videoRef?.current?.clientWidth || 500) * 0.75);
            setCallframe(newCallframe);
        });
    }, [
        videoRef
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex-1 relative",
        ref: videoRef
    }));
};
/* harmony default export */ const webinar = (WebinarCall);

;// CONCATENATED MODULE: ./pages/support/call.js


function Call() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(webinar, {
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(269));
module.exports = __webpack_exports__;

})();