const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');
const path = require("path")


const app = express();
const server = http.createServer(app);

app.use('/', express.static(`${__dirname}/../client/dist`));

const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1,"/client/dist")));
app.get("*" , (req , res) =>{
  res.sendFile(path.resolve(__dirname1,"client" , "dist" , "index.html"))
})

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});
