const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../public/')));
console.log("dirname is " , (path.join(__dirname, '../public/')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname,'../public/index.html'));
//     console.log("request dir is " , (path.join(__dirname,'../public/index.html')));
// });

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);