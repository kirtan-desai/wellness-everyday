import { unstable_getServerSession } from "next-auth/next";
import LandingPage from "./components/LandingPage";
import db from "./config/db";
import Test from "./Test";
import LoggedIn from "./components/LoggedIn";

export default async function Home() {
    const session = await unstable_getServerSession();

    console.log("reloaded");

    if (!session) {
        return <LandingPage />;
    } else {
        // const entries = await db.getDocs(...)
        return <LoggedIn />;
    }
}

// make calendar responsive below 555 px
