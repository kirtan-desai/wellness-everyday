"use client";

import { useState } from "react";
import CalendarPage from "./CalendarPage";
import Journal from "./Journal";

export default function LoggedIn() {
    const [date, setDate] = useState();

    console.log("state changed", date);

    if (date) {
        // const entry = entries[date];
        // return <Journal date=date entry=entry />;
        return <Journal setDate={setDate} />;
    } else {
        // return <CalendarPage entries=entries setDate=setDate/>;
        return <CalendarPage setDate={setDate} />;
    }
}
