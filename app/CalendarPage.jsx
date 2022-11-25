"use client";

import { signOut } from "next-auth/react";
import { differenceInCalendarDays } from "date-fns";
import Calendar from "react-calendar";
import styles from "./page.module.css";
import "./Calendar.css"; //overriding default react-calendar css

function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) !== 0;
}

const disabledDates = [new Date(2022, 0, 1)];

function tileDisabled({ date, view }) {
    if (view === "month") {
        return disabledDates.find((dDate) => isSameDay(dDate, date));
    }
}

function tileClassName({ date, view }) {
    if (tileDisabled({ date, view })) {
        return "filtered";
    }
}

export default function CalendarPage() {
    return (
        <div>
            <button onClick={() => signOut()} className={styles.start}>
                Logout
            </button>

            <div className={styles["calendar-container"]}>
                <div className={styles.navbar}>test</div>
                <Calendar
                    tileDisabled={tileDisabled}
                    tileContent={() => <div className={styles.mood}>emoji</div>}
                    tileClassName={tileClassName}
                />
            </div>
        </div>
    );
}
