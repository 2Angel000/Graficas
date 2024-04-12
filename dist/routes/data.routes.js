"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _data = require("../controllers/data.controller");
var router = (0, _express.Router)();
router.get("/datos", _data.getDatos);
router.get("/solicitud", _data.getSolicitud);
router.get("/datos/:municipio", _data.getDataByMunicipio);
router.get("/datos/apoyo/:apoyo", _data.getDataByApoyo);
router.get("/datos/programa/:programa", _data.getDataByPrograma);
router.get("/datos/area/:area", _data.getDataByArea);
var _default = exports["default"] = router;