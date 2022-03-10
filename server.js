const ejs = require('ejs')
const db = require('./firebase')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
    const docRef = db.collection('users').doc('roland');
    docRef.set({
    first: 'Roland',
    last: 'Saavedra',
    born: 1213
    });
})

app.get('/tasks', (req, res) => {
    res.send("Tasks probably idk")
})

app.listen(3000)