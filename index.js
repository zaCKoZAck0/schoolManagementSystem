require('dotenv/config')

const userRoute = require('./routes/user');
const studentRoute = require('./routes/student');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");

app.options("*", cors({ origin: 'http://localhost:4000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:4000", optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/student",studentRoute)
app.use("/api/user",userRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`server Running on PORT ${process.env.PORT}`)
});


