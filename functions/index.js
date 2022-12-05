import functions from "firebase-functions"
import express from 'express';
import cors from 'cors'
import { MongoClient } from 'mongodb'
import { uri } from "./secret.js"

const app = express();
app.use(cors())
app.use(express.json())

const client = new MongoClient(uri)
const db = client.db('overView')
const posts = db.collection('reviews')



// CREATE MY ROUTES HERE 

app.get('/allreviews', async (req, res) => {
    client.connect()
    console.log('connected to MongoDB')
    const allReviews = await posts.find().toArray()
    res.send(allReviews);
})

// ADD REVIEW 
app.post('/addreview', async (req, res) => {
    // const newReviews = { author: 'Fanessa', date: '12-1-2022', program: 'test bootcamp', curriculum: 'lorem lorem', instruction: 'lorem lorem', jobAssist: 'lorem lorem', overallExp: 'lorem lorem lorem lorem lorem lorem' }
    console.log('req.body ->', req.body)
    await posts.insertOne(req.body)
    res.send('item was added')
});

export const api = functions.https.onRequest(app);