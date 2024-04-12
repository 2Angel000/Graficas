import "../database/queries.js";
import {getConnection} from "../database/connection";
import { sql } from "../database/connection.js";
import { queries } from "../database/queries.js";

export const getDatos = async (req, res) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(queries.getAllData);
      res.json(result.recordset);
  } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
  }
};

export const getSolicitud = async (req, res) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(queries.getSolicitud);
      res.json(result.recordset);
  } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
  }
};

export const getDataByMunicipio = async (req, res) => {
  const { municipio } = req.params;
  try {
      const pool = await getConnection();
      const result = await pool.request()
      .input('municipio',municipio)
      .query(queries.getByMunicipio);
      console.log(result.recordset);
      res.json(result.recordset);
  } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
  }
};

export const getDataByArea = async (req, res) => {
  const { area } = req.params;
  try {
      const pool = await getConnection();
      const result = await pool.request()
      .input('area',area)
      .query(queries.getByArea);
      console.log(result.recordset);
      res.json(result.recordset);
  } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
  }
};

export const getDataByPrograma = async (req, res) => {
  const { programa } = req.params;
  try {
      const pool = await getConnection();
      const result = await pool.request()
      .input('programa',programa)
      .query(queries.getByPrograma);
      console.log(result.recordset);
      res.json(result.recordset);
  } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
  }
};

export const getDataByApoyo = async (req, res) => {
  const { apoyo } = req.params;
  try {
      const pool = await getConnection();
      const result = await pool.request()
      .input('apoyo',apoyo)
      .query(queries.getByApoyo);
      console.log(result.recordset);
      res.json(result.recordset);
  } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
  }
};



