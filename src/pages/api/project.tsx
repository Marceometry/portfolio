import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/database";


export default async function AddProject( req: NextApiRequest, res: NextApiResponse ) {
    if (req.method === 'POST') {
        const db = await connect()
        const response = await db.collection('Projects').insertOne({
            name: 'Meu projeto',
            description: 'projeto que eu fiz'
        })
        res.status(200).json(response.ops[0])
    } else {
        res.status(400).json({ message: 'Wrong request method' })
    }
}