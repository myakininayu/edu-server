const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index');
const bodyParser = require('body-parser');

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(bodyParser.json());

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {console.log(`Server started at port ${PORT}`)});
    }catch (e){
        console.log(e);
    }
}


start();
