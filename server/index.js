import express, { Router } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/post.js'

const app = express()

//set prefix ex: http://localhost:5000/posts/

app.use(bodyParser.json({limit: "30mb"}))
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}))
app.use(cors())
app.use('/posts', postRoutes)


/* Create Mongo DB on Cloud http://mongodb.com/cloud/atlas */
const CONNECTION_URL="mongodb://127.0.0.1:27017"
// const CONNECTION_URL = "mongodb+srv://mernfullstack:mernfullstack@cluster0.hraslco.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(CONNECTION_URL)
.then(()=>{app.listen(PORT,() => {console.log(`App listening on ${PORT}`)})})
.catch((error)=>{console.log(error.message)})

// mongoose.set('useFindAndModify', false)