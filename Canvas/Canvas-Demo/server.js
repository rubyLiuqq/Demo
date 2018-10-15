const express=require('express')
const open=require('opn')

const app = express();
console.log(__dirname);
app.use("/", express.static(__dirname));
app.listen(8090);

open("http://localhost:8090");
