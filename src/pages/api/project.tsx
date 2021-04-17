import connect from "../../../utils/database";

export default async function AddProject( req, res) {
    if (req.method === 'POST') {
        const { name, origin, description, githubLink, webLink } = req.body

        if (!name || !origin || !description || !githubLink) {
            res.status(400).json({ message: "Missing body parameters" })
            return
        }

        const { db } = await connect()
        
        const response = await db.collection('Projects').insertOne({
            name,
            origin,
            description,
            githubLink,
            webLink
        })
        res.status(200).json(response.ops[0])
    } else {
        res.status(400).json({ message: 'Wrong request method' })
    }
}