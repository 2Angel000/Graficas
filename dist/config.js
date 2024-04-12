"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = exports["default"] = {
  PORT: process.env.PORT || 3000,
  USER: process.env.USER || 'graficas',
  PASSWORD: process.env.PASSWORD,
  SERVER: process.env.SERVER || 'localhost',
  DB: process.env.DB
};