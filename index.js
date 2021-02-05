const express = require("express");

const app = express();

app.get("/",(req,res) =>{
	res.send("<h1>Hello_world<h1>");
});

app.listen(5000, () =>{
	console.log('App listening ob port 5000');
});
