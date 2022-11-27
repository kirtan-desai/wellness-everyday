import { unstable_getServerSession } from "next-auth/next";
import LandingPage from "./components/LandingPage";
import LoggedIn from "./components/LoggedIn";
import getData from "./utils/getData";

export default async function Home() {
    const session = await unstable_getServerSession();
    return session ? (
        <LoggedIn entries={await getData(session.user.email)} />
    ) : (
        <LandingPage />
    );
}
