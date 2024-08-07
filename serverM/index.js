const mongoose = require('mongoose')
const express = require('express');
const cors = require('./src/middlewares/cors');
const eventController = require('./src/controllers/eventController')
const userController= require('./src/controllers/userController');
const auth = require('./src/middlewares/auth');

async function start() {
    try {
        const db = await mongoose.connect('mongodb+srv://majapetkova11:sE78tE66wvtFn1ZB@cluster0.4hkslpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('DB ready')
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1)
    }

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(auth())

    app.use('/data/events', eventController )
    app.use('/users', userController)

    app.listen(3030, () => console.log('REST service started on port 3030'))
}


start()