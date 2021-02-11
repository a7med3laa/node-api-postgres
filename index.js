const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js API connected to Postgres DB of WSN list of APIS: /ConnectedNodes -> to get number of connected nodes,'
+ '/node/id -> to get readings from specific node, /latest -> get latest 10 readings'
+ '/list/id -> to list all readings of specific node, /clear -> clear all table'});
});

app.get('/latest', db.getNodesData);
app.get('/node/:id', db.getNodeById);
app.get('/list/:id', db.getListById);
app.get('/ConnectedNodes', db.getConnectedNode);
app.get('/clear', db.Clear);

app.listen(port, () => {
  console.log('App running on port 3000.')
});
