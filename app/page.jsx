import { unstable_getServerSession } from "next-auth/next";
import LandingPage from "./LandingPage";
import CalendarPage from "./CalendarPage";

export default async function Home() {
    const session = await unstable_getServerSession();
    return session ? <CalendarPage /> : <LandingPage />;
}

// make calendar responsive below 555 px
