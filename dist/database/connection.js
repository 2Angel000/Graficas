"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
var _config = _interopRequireDefault(require("../config"));
var dbSettings = {
  server: _config["default"].SERVER,
  database: _config["default"].DB,
  user: _config["default"].USER,
  password: _config["default"].PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};
var getConnection = exports.getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mssql["default"].connect(dbSettings);
        case 3:
          pool = _context.sent;
          return _context.abrupt("return", pool);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error al conectar:', _context.t0.message);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getConnection() {
    return _ref.apply(this, arguments);
  };
}();