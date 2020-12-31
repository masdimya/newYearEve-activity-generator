const express = require('express');
const bodyParser = require('body-parser');
const whatShouldIDo = require('./whatShouldIDo.js');
const PORT = process.env.PORT || 4000

const app = express();
const myActivity = new whatShouldIDo();

let db = [
    {
        id: 1,
        name: 'Warior',
        attack: 100,
        defence: 50,
        agility: 30,
        magic: 0,
    },
    {
        id: 2,
        name: 'Mage',
        attack: 10,
        defence: 20,
        agility: 50,
        magic: 100,
    },
];

app.use(bodyParser.json());
app.get('/sentence',(req, res) => {
    return res.json({activity:myActivity.activity });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));