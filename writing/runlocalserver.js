const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
var corsOptions = {
    origin: 'http://localhost:2020',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.get('*', cors(), (req, res) => {
    let name = req.params['0'];
    //console.log(name)
    //res.type = 'text/javascript';
    if (name.charAt(0) == '.' || name.charAt(name.length - 1) != 's') return;
    res.setHeader('Content-Type', 'text/javascript');
    res.setHeader('Origin', 'localhost:2020');
    //res.send({message: fs.readFileSync('..' + name, 'utf8')});
    res.send(fs.readFileSync(`../${name}`));
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});