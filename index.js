
import express from 'express';
import cors from 'cors'
import {MongoClient} from 'mongodb'
import {uri} from "./secret.js"



const app = express();
const PORT = 3030;
app.use(cors())
app.use(express.json())


const client = new MongoClient(uri)
const db = client.db('overView')
const posts = db.collection('reviews')


client.connect()
console.log('connected to MongoDB')

// listen to the server on the specified port
app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`);
});


// CREATE MY ROUTES HERE 

app.get('/',(req,res) => {
    res.status(200).send("Hello World");
})

// ADD REVIEW 
app.post('/',async (req,res) => {
    const newReview = {author: 'Fanessa',date:'12-1-2022',program:'test bootcamp',review:[{overallExp:5},{curriculum:5},{instruction:5},{jobAssist:5}]}
    console.log('req.body ->',req.body)

    await postsnode.insertOne(newReview)
    res.send('item was added')
});