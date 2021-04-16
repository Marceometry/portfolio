import { Db, MongoClient } from 'mongodb'

interface ConnectType {
    db: Db
    client: MongoClient
}

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default async function connectDB(): Promise<ConnectType> {
    if (!client.isConnected()) await client.connect()

    const db = client.db("Portfolio")
    return { db, client }
}