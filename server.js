// imports 
import express from "express";
import crudRoute from './routes/crud.route.js'
import errorHandler from './middleware/errors.middleware.js'
import logger from './middleware/logger.middleware.js'
import path from 'node:path';
// variables
const port = process.env.PORT || 5000;

// app instance
const app = express();

// static files
app.use(express.static(path.join(path.resolve(), 'public')))

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(logger)

// routes
app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api', crudRoute)

// errors
app.use(errorHandler)

// run server
app.listen(port, () => { console.log(`The server is running port: ${port}`) })