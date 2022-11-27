import { collection, getDocs } from "firebase/firestore";
import db from "../config/db"

export default async function getData(email) {
    let entries = {};
    const snapShot = await getDocs(collection(db, "users", email, "journals"));

    //serialize data when passing data from server component to client component
    snapShot.forEach((doc) => (entries[doc.id] = doc.data()));

    return entries;
}