import { unstable_getServerSession } from "next-auth/next";
import LandingPage from "./components/LandingPage";
import LoggedIn from "./components/LoggedIn";
import db from "./config/db";
import { collection, getDocs } from "firebase/firestore";

const getData = async (email) => {
    let entries = {};
    const snapShot = await getDocs(collection(db, "users", email, "journals"));

    //serialize data when passing data from server component to client component
    snapShot.forEach((doc) => (entries[doc.id] = doc.data()));

    return entries;
};

export default async function Home() {
    const session = await unstable_getServerSession();
    if (!session) {
        return <LandingPage />;
    } else {
        return <LoggedIn entries={await getData(session.user.email)} />;
    }
}
