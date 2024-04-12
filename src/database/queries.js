export const queries = {
    getAllData: "SELECT * FROM dbo.beneficiario",
    getSolicitud: "SELECT * FROM dbo.EstadoSolicitud",
    getByMunicipio: "SELECT * FROM dbo.beneficiario WHERE MUNICIPIO = @municipio",
    getByArea: "SELECT * FROM dbo.EstadoSolicitud WHERE Area = @area",
    getByPrograma: "SELECT * FROM dbo.EstadoSolicitud WHERE Programa = @programa",
    getByApoyo: "SELECT * FROM dbo.EstadoSolicitud WHERE NOMBRE_APOYO = @apoyo"
}