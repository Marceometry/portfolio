import connect from "../../../utils/database";

export default async function FindManyProjects(req, res) {
    if (req.method === 'GET') {        
        const { origin } = req.body

        if (!origin) {
            res.status(400).json({ message: "Missing body parameters" })
            return
        }

        const { db } = await connect()
        const response = await db.collection('Projects').find({ origin }).toArray()
        res.status(200).json(response)
    } else {
        res.status(400).json({ message: 'Wrong request method' })
    }
}