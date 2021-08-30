const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send({hi:'there'});
});

const PORT = process.env.PORT || 5000;   //this feature is dynamic binding as it either listens to any production port(heroku) or 5000

//app.listen(5000);
app.listen(PORT);


