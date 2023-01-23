"use client";

import { signOut } from "next-auth/react";
import Calendar from "react-calendar";
import styles from "./CalendarPage.module.css";
import { useEffect, useState } from "react";
import "./Calendar.css"; //overriding default react-calendar css
import MoodSelector from "./MoodSelector";

export default function CalendarPage({ entries, setDate }) {
    const [mood, setMood] = useState();
    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : null
    );

    useEffect(() => {
        window.addEventListener("resize", () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    useEffect(() => {
        setIsMobile(windowWidth <= 600);
    }, [windowWidth]);

    const enabledDates = Object.keys(entries).filter(
        (date) => entries[date]["mood"] === mood
    );

    function dateToString(date) {
        return JSON.stringify(new Date(date)).slice(1, 11);
    }

    function onClickDay(date) {
        setDate(dateToString(date));
    }

    function tileDisabled({ date, view }) {
        if (!mood) {
            return false;
        }

        if (view === "month") {
            return !enabledDates.includes(dateToString(date));
        }
    }

    function tileClassName({ date, view }) {
        if (tileDisabled({ date, view })) {
            return "disabled";
        }
    }

    const clearButton = (
        <button onClick={() => setMood(null)} className={styles.clear}>
            Clear
        </button>
    );

    return (
        <div className={styles.modal}>
            <button onClick={() => signOut()} className={styles.logout}>
                Logout
            </button>
            <div className={styles["calendar-container"]}>
                <div className={styles.navbar}>
                    <div className={styles.mobileMoodbarTop}>
                        <p>Filter days by mood</p>
                        {isMobile && clearButton}
                    </div>
                    <div className={styles.emojibar}>
                        <MoodSelector
                            setMood={setMood}
                            moodState={mood}
                            isCalendar={true}
                        />
                    </div>
                    {!isMobile && clearButton}
                </div>
                <Calendar
                    onClickDay={onClickDay}
                    tileDisabled={tileDisabled}
                    tileClassName={tileClassName}
                />
            </div>
        </div>
    );
}
