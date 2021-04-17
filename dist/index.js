var _dompurify = require("dompurify");
var _propTypes = require("prop-types");
var _react = require("react");
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    $0cbe533d0a8e727c22fd9bc06f10a52c$var$_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    $0cbe533d0a8e727c22fd9bc06f10a52c$var$_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return $0cbe533d0a8e727c22fd9bc06f10a52c$var$_typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var $0cbe533d0a8e727c22fd9bc06f10a52c$export$default = void 0;
exports["default"] = $0cbe533d0a8e727c22fd9bc06f10a52c$export$default;
var $0cbe533d0a8e727c22fd9bc06f10a52c$var$_react = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_interopRequireWildcard(_react);
var $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_interopRequireDefault(_propTypes);
var $0cbe533d0a8e727c22fd9bc06f10a52c$var$_dompurify = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_interopRequireDefault(_dompurify);
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  $0cbe533d0a8e727c22fd9bc06f10a52c$var$_getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || $0cbe533d0a8e727c22fd9bc06f10a52c$var$_typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      $0cbe533d0a8e727c22fd9bc06f10a52c$var$ownKeys(Object(source), true).forEach(function (key) {
        $0cbe533d0a8e727c22fd9bc06f10a52c$var$_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      $0cbe533d0a8e727c22fd9bc06f10a52c$var$ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_defineProperty(obj, key, value) {
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_slicedToArray(arr, i) {
  return $0cbe533d0a8e727c22fd9bc06f10a52c$var$_arrayWithHoles(arr) || $0cbe533d0a8e727c22fd9bc06f10a52c$var$_iterableToArrayLimit(arr, i) || $0cbe533d0a8e727c22fd9bc06f10a52c$var$_unsupportedIterableToArray(arr, i) || $0cbe533d0a8e727c22fd9bc06f10a52c$var$_nonIterableRest();
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return $0cbe533d0a8e727c22fd9bc06f10a52c$var$_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return $0cbe533d0a8e727c22fd9bc06f10a52c$var$_arrayLikeToArray(o, minLen);
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !((Symbol.iterator in Object(arr)))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function $0cbe533d0a8e727c22fd9bc06f10a52c$var$_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var $0cbe533d0a8e727c22fd9bc06f10a52c$var$baseConfig = {
  showMathMenu: true,
  tex2jax: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]]
  },
  skipStartupTypeset: true
};
var $0cbe533d0a8e727c22fd9bc06f10a52c$var$MathJaxPreview = /*#__PURE__*/$0cbe533d0a8e727c22fd9bc06f10a52c$var$_react["default"].forwardRef(function (_ref, ref) {
  var script = _ref.script, config = _ref.config, className = _ref.className, math = _ref.math, id = _ref.id, style = _ref.style, wrapperTag = _ref.wrapperTag, msDelayDisplay = _ref.msDelayDisplay, onDisplay = _ref.onDisplay, onLoad = _ref.onLoad, onError = _ref.onError;
  var previewRef = (0, $0cbe533d0a8e727c22fd9bc06f10a52c$var$_react.useRef)();
  var _useState = (0, $0cbe533d0a8e727c22fd9bc06f10a52c$var$_react.useState)("none"), _useState2 = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_slicedToArray(_useState, 2), display = _useState2[0], setDisplay = _useState2[1];
  // prevent display during processing
  var _useState3 = (0, $0cbe533d0a8e727c22fd9bc06f10a52c$var$_react.useState)(window.MathJax ? "loaded" : "loading"), _useState4 = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_slicedToArray(_useState3, 2), loadingState = _useState4[0], setLoadingState = _useState4[1];
  (0, $0cbe533d0a8e727c22fd9bc06f10a52c$var$_react.useEffect)(function () {
    var mathjaxScriptTag = document.querySelector(("script[src=\"").concat(script, "\"]"));
    if (!mathjaxScriptTag) {
      mathjaxScriptTag = document.createElement("script");
      mathjaxScriptTag.async = true;
      mathjaxScriptTag.src = script;
      for (var _i2 = 0, _Object$entries = Object.entries(config || ({})); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_slicedToArray(_Object$entries[_i2], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
        mathjaxScriptTag.setAttribute(k, v);
      }
      var node = document.head || document.getElementsByTagName("head")[0];
      node.appendChild(mathjaxScriptTag);
    }
    var onloadHandler = function onloadHandler() {
      setLoadingState("loaded");
      window.MathJax.Hub.Config($0cbe533d0a8e727c22fd9bc06f10a52c$var$_objectSpread($0cbe533d0a8e727c22fd9bc06f10a52c$var$_objectSpread({}, $0cbe533d0a8e727c22fd9bc06f10a52c$var$baseConfig), config));
      onLoad && onLoad();
    };
    var onerrorHandler = function onerrorHandler() {
      setLoadingState("failed");
      onError && onError();
    };
    mathjaxScriptTag.addEventListener("load", onloadHandler);
    mathjaxScriptTag.addEventListener("error", onerrorHandler);
    return function () {
      mathjaxScriptTag.removeEventListener("load", onloadHandler);
      mathjaxScriptTag.removeEventListener("error", onloadHandler);
    };
  }, [setLoadingState, config, $0cbe533d0a8e727c22fd9bc06f10a52c$var$baseConfig]);
  (0, $0cbe533d0a8e727c22fd9bc06f10a52c$var$_react.useEffect)(function () {
    if (loadingState !== "loaded") {
      return;
    }
    previewRef.current.innerHTML = math;
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, previewRef.current]);
    // delay display of div
    var msDelay;
    if (// msDelayDisplay prop is a reasonable number of ms
    msDelayDisplay !== null && !isNaN(+msDelayDisplay) && +msDelayDisplay >= 0 && +msDelayDisplay < 10000) {
      msDelay = +msDelayDisplay;
    } else {
      msDelay = 300;
    }
    var timeout = setTimeout(function () {
      setDisplay("inline");
      // display div after delay, hopefully typeset has finished
      onDisplay && onDisplay();
    }, msDelay);
    return function () {
      setDisplay("none");
      clearTimeout(timeout);
    };
  }, [math, loadingState, previewRef]);
  return (
    /*#__PURE__*/$0cbe533d0a8e727c22fd9bc06f10a52c$var$_react["default"].createElement(wrapperTag, {
      className: className,
      id: id,
      style: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_objectSpread({
        display: display
      }, style),
      ref: ref
    }, /*#__PURE__*/$0cbe533d0a8e727c22fd9bc06f10a52c$var$_react["default"].createElement($0cbe533d0a8e727c22fd9bc06f10a52c$var$_react["default"].Fragment, null, loadingState === "failed" && /*#__PURE__*/$0cbe533d0a8e727c22fd9bc06f10a52c$var$_react["default"].createElement("span", null, "fail loading mathjax lib"), /*#__PURE__*/$0cbe533d0a8e727c22fd9bc06f10a52c$var$_react["default"].createElement(wrapperTag, {
      className: "react-mathjax-preview-result",
      ref: previewRef
    })))
  );
});
$0cbe533d0a8e727c22fd9bc06f10a52c$var$MathJaxPreview.displayName = 'MathJaxPreview';
$0cbe533d0a8e727c22fd9bc06f10a52c$var$MathJaxPreview.propTypes = {
  script: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].string,
  config: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].object,
  className: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].string,
  math: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].string,
  style: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].object,
  wrapperTag: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].string,
  id: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].string,
  onLoad: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].func,
  onError: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].func,
  onDisplay: $0cbe533d0a8e727c22fd9bc06f10a52c$var$_propTypes["default"].func
};
$0cbe533d0a8e727c22fd9bc06f10a52c$var$MathJaxPreview.defaultProps = {
  script: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_HTMLorMML",
  id: "react-mathjax-preview",
  wrapperTag: "div"
};
var $0cbe533d0a8e727c22fd9bc06f10a52c$var$_default = $0cbe533d0a8e727c22fd9bc06f10a52c$var$MathJaxPreview;
$0cbe533d0a8e727c22fd9bc06f10a52c$export$default = $0cbe533d0a8e727c22fd9bc06f10a52c$var$_default;
exports["default"] = $0cbe533d0a8e727c22fd9bc06f10a52c$export$default;

//# sourceMappingURL=index.js.map
