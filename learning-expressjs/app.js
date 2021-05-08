const express = require('express');
const path =  require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/ex', (req, res) => {
    res.send('hitting example route');
});

app.get('/ex/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.name} : ${req.params.age}`);
});

app.listen(3000);