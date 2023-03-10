const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser');
const cors = require('cors');
const doctorRouter = require("./doctor/routes");
const patientRouter = require('./patient/routes');
const perscriptionRouter = require('./perscription/routes');

const port = process.env.port || process.env.PORT || 5000;

const app = express();
//making it easier to work with data so we can use JSON as well
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

//Routers
app.use("/api/v1/doctors",doctorRouter);
app.use("/api/v1/patients",patientRouter);
app.use("/api/v1/perscriptions",perscriptionRouter);

// setting up the cors so we know from where the requests can come from
app.use(cors({origin: /http:\/\/localhost/}));
app.options('*',cors());
app.listen(port,()=>{
    console.log('server up!!');
});