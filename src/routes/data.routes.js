import { Router } from "express";
import { getDataByApoyo, getDataByArea, getDataByMunicipio, getDataByPrograma, getDatos, getSolicitud }  from "../controllers/data.controller";

const router = Router();

router.get("/datos", getDatos);

router.get("/solicitud", getSolicitud);

router.get("/datos/:municipio", getDataByMunicipio);

router.get("/datos/apoyo/:apoyo", getDataByApoyo);

router.get("/datos/programa/:programa", getDataByPrograma);

router.get("/datos/area/:area", getDataByArea);

export default router;
