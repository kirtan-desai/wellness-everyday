import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import db from "../config/db"

export default async function postData(data) {
    try {

        //maybe add this line to code which handles when user joins for first time
        await setDoc(doc(db, "users", data.email), {})
        await setDoc(doc(db, "users", data.email, "journals", data.date), {
            mood: data.mood,
            entry: data.entry,
        });
        return "success"
    } catch (e) {
        console.log(e);
        return "error"
    }
};