import {MongoClient} from 'mongodb';
import 'dotenv/config'

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('overview')
export const posts = database.collection('reviews')

client.connect()
console.log('connected to MongoDB')

