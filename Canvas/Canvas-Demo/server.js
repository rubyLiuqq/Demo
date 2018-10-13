const express=require('express')
const open=require('opn')

const app = express();
app.use("/",express.static(__dirname + "/demo"));
app.listen(8090);

open("http://localhost:8090");
