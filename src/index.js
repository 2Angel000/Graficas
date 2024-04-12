import express from "express";
import cors from "cors"; // Importa el paquete CORS
import config from "./config";
import router from './routes/data.routes';

const app = express();
const PORT = config.PORT || 3000;

// const allowedOrigins = ['https://your-allowed-origin.com', 'http://localhost:3000']; 
// const corsOptions = {
//   origin: allowedOrigins,
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use(cors());
app.set('port', config.PORT || 3000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
//rutas
app.use('/',router);

//servidor
app.listen(app.get('port'), (req, res) => {
    console.log(`API -> http://localhost:${app.get('port')}/datos`);
});