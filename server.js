const express = require('express');
const bodyParser = require('body-parser');
const whatShouldIDo = require('./whatShouldIDo.js');
var cors = require('cors')
const PORT = process.env.PORT || 4000

const app = express();
const myActivity = new whatShouldIDo();

app.use(bodyParser.json());
app.use(cors())

app.get('/sentence',(req, res) => {
    return res.json(myActivity.activity);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));