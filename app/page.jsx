import { getServerSession } from "next-auth/next";
import LandingPage from "./components/LandingPage";
import LoggedIn from "./components/LoggedIn";
import getData from "./utils/getData";

export default async function Home() {
    const session = await getServerSession();
    return session ? (
        <LoggedIn entries={await getData(session.user.email)} user={session.user} />
    ) : (
        <LandingPage />
    );
}
