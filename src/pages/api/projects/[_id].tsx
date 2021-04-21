import { ObjectID } from 'mongodb'
import connect from "../../../../utils/database";

export default async function FindOneProject(req, res) {
    if (req.method === 'GET') {        
        const { _id } = req.query

        if (!_id) {
            res.status(400).json({ error: "Missing body parameters" })
            return
        }

        const { db } = await connect()
        const response = await db.collection('Projects').findOne({ "_id": new ObjectID(_id) })

        if (!response) {
            res.status(400).json({ error: "Project not found" })
        } else {
            res.status(200).json(response)
        }
    } else {
        res.status(400).json({ error: 'Wrong request method' })
    }
}