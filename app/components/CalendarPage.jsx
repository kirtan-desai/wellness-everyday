"use client";

import { signOut } from "next-auth/react";
import { differenceInCalendarDays } from "date-fns";
import Calendar from "react-calendar";
import styles from "./CalendarPage.module.css";
import "./Calendar.css"; //overriding default react-calendar css
import { setDate } from "date-fns/esm";

function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) !== 0;
}

const moods = {
    happy: "😊",
    sad: "🙁",
    stressed: "😥",
    neutral: "👍",
    hopeful: "🤩",
};

const disabledDates = [];

function tileDisabled({ date, view }) {
    if (view === "month") {
        return disabledDates.find((dDate) => isSameDay(dDate, date));
    }
}

function onMoodSelect(value, isChecked) {
    console.log(value);
    console.log(isChecked);
}

function tileClassName({ date, view }) {
    if (tileDisabled({ date, view })) {
        return "filtered";
    }
}

export default function CalendarPage({ entries, setDate }) {
    function onClickDay(value) {
        const date = JSON.stringify(new Date(value)).slice(1, 11);
        setDate(date);
    }

    return (
        <div>
            <button onClick={() => signOut()} className={styles.start}>
                Logout
            </button>

            <div className={styles["calendar-container"]}>
                <div className={styles.navbar}>
                    <p>Filter days by mood</p>
                    {Object.keys(moods).map((mood) => (
                        <div key={mood}>
                            <label htmlFor={mood}>{moods[mood]}</label>
                            <input
                                type="radio"
                                name="mood"
                                value={mood}
                                id={mood}
                                onChange={(event) =>
                                    onMoodSelect({ mood }, event.target.checked)
                                }
                            ></input>
                        </div>
                    ))}
                </div>
                <Calendar
                    onClickDay={onClickDay}
                    tileDisabled={tileDisabled}
                    tileContent={() => <div className={styles.mood}>emoji</div>}
                    tileClassName={tileClassName}
                />
            </div>
        </div>
    );
}
