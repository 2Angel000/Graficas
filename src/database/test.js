import {getConnection} from "./connection";

const testConnection = async () => {
    try {
        const pool = await getConnection();
        console.log("Conexión exitosa a la base de datos");
        await pool.close();
    } catch (error) {
        console.error("Error al conectar: ", error.message);
    }
};

testConnection();
