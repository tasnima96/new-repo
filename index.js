const express = require('express');
const app = express();

// function rootCall(req, res) {
//     res.send('Thank you so much!');
// }    OR
// const rootCall = (req, res) => {
//     res.send('Thank you so much!');
// }
// app.get('/', rootCall)

app.get('/', (req, res) => {
    res.send('I know how to open Node!');
})

app.listen(3000, () => console.log('Listening to port 3000'));