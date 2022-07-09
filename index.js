const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json())

// function rootCall(req, res) {
//     res.send('Thank you so much!');
// }    OR
// const rootCall = (req, res) => {
//     res.send('Thank you so much!');
// }
// app.get('/', rootCall)


// GET

app.get('/', (req, res) => {
    const fruit = {
        product: 'Lemon',
        price: 10
    }
    res.send(fruit);
});

app.get('/fruits/apple', (req, res) => {
    res.send({fruit: 'apple', quantity: 10, price: 30});
})

const users = ["Allen", "Robert", "Sarah", "Shwan", "Alex", "Jenny"]

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});
})


// POST

app.post('/addUser', (req, res) => {
    // console.log('Data recieved', req.body);

    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));