"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = exports.queries = {
  getAllData: "SELECT * FROM dbo.beneficiario",
  getSolicitud: "SELECT * FROM dbo.EstadoSolicitud",
  getByMunicipio: "SELECT * FROM dbo.beneficiario WHERE MUNICIPIO = @municipio",
  getByArea: "SELECT * FROM dbo.EstadoSolicitud WHERE Area = @area",
  getByPrograma: "SELECT * FROM dbo.EstadoSolicitud WHERE Programa = @programa",
  getByApoyo: "SELECT * FROM dbo.EstadoSolicitud WHERE NOMBRE_APOYO = @apoyo"
};