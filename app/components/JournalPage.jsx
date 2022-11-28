"use client";
import Journal from "./Journal";

export default function JournalPage({ journal, setDate, user, date }) {
    return (
        <>
            <button onClick={() => setDate(undefined)}>Back to Calendar</button>
            <Journal journal={journal} user={user} date={date} />
        </>
    );
}
