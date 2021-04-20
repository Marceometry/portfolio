import connect from "../../../utils/database";

type FindProjectProps = {
    _id: string
}

export default async function FindProject(req, res) {
    if (req.method === 'GET') {        
        const { _id }: FindProjectProps = req.body

        if (!_id) {
            res.status(400).json({ message: "Missing body parameters" })
            return
        }

        const { db } = await connect()
        const response = await db.collection('Projects').findOne({ _id })
        res.status(200).json(response)
    } else {
        res.status(400).json({ message: 'Wrong request method' })
    }
}