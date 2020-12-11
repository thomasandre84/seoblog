const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cookieparser= require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
// bring routes
const blogRoutes = require('./routes/blog');

// app
const app = express()

// db
mongoose
.connect(process.env.DATABASE, {useNewUrlParser: true, useCreateIndex: true ,useFindAndModify: false, useUnifiedTopology: true })
.then(() => console.log('Database Connected'));

// middleware
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cookieparser())
// cors
if(process.env.NODE_ENV == 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

// routes middleware
app.use('/api', blogRoutes);


// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})