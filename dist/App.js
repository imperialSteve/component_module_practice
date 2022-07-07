"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Buttons = _interopRequireDefault(require("./components/Buttons"));

require("./App.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "App",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
      value: "Press Me!"
    })
  });
}

var _default = App;
exports.default = _default;