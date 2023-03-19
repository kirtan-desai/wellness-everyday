import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import postData from "../../app/utils/postData";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    !session && res.status(401).json({ message: "You must be logged in." });
    
    req.method === "POST" && await postData(req.body) === "success" ? res.send(200) : res.send(500)
}