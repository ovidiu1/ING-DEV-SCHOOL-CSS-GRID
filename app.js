const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('*', function(req, res) {
    res.sendFile('index.html', { root: __dirname});
  });


app.use(function(err, req, res,next){
    console.log(err);
    res.status(422).send({error: err.message});
});


 const PORT = process.env.PORT
 app.listen(PORT);