import sql from 'mssql';
import config from '../config';

const dbSettings = {
    server: config.SERVER,
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Error al conectar:', error.message);
  }
}

export {sql};