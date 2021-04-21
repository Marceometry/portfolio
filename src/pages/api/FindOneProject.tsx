import { ObjectID } from 'mongodb'
import connect from "../../../utils/database";

export default async function FindOneProject(req, res) {
    if (req.method === 'GET') {        
        const { id } = req.body

        if (!id) {
            res.status(400).json({ message: "Missing body parameters" })
            return
        }

        const { db } = await connect()
        const response = await db.collection('Projects').findOne({ "_id": new ObjectID(id) })
        res.status(200).json(response)
    } else {
        res.status(400).json({ message: 'Wrong request method' })
    }
}