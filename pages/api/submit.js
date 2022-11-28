import postData from "../../app/utils/postData";

export default async function handler(req, res) {
    //add authentication
    //https://next-auth.js.org/configuration/nextjs
    if (req.method === "POST") {
        console.log(req.body)
        if (await postData(req.body) == "success") {
            console.log("data posted")
            res.send(200)
        } else {
            res.send(500)
        }
    }
}