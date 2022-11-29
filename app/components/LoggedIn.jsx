"use client";

import { useState } from "react";
import CalendarPage from "./CalendarPage";
import JournalPage from "./Journal";

export default function LoggedIn({ entries, user }) {
    /*
        date is used as state so when user selects a date in CalendarPage,
        using setDate, the component of the date state which is LoggedIn,
        is reloaded and since date is not undefined now, the component will
        return Journal. In Journal, when user presses back button, setDate
        sets the date to undefined so LoggedIn component reloads and returns
        CalendarPage.
    */
    const [date, setDate] = useState();

    return date ? (
        <JournalPage
            journal={entries[date]}
            setDate={setDate}
            user={user}
            date={date}
        />
    ) : (
        <CalendarPage entries={entries} setDate={setDate} />
    );
}
