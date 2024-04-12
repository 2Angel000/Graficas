"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("./config"));
var _data = _interopRequireDefault(require("./routes/data.routes"));
// Importa el paquete CORS

var app = (0, _express["default"])();
var PORT = _config["default"].PORT || 3000;

// const allowedOrigins = ['https://your-allowed-origin.com', 'http://localhost:3000']; 
// const corsOptions = {
//   origin: allowedOrigins,
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use((0, _cors["default"])());
app.set('port', _config["default"].PORT || 3000);
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
//rutas
app.use('/', _data["default"]);

//servidor
app.listen(app.get('port'), function (req, res) {
  console.log("API -> http://localhost:".concat(app.get('port'), "/datos"));
});