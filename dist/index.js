"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Buttons.default;
  }
});

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _Buttons = _interopRequireDefault(require("./components/Buttons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = _client.default.createRoot(document.getElementById('root'));

root.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.StrictMode, {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {})
})); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals