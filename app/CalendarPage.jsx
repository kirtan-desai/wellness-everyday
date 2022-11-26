"use client";

import { signOut } from "next-auth/react";
import { differenceInCalendarDays } from "date-fns";
import Calendar from "react-calendar";
import styles from "./page.module.css";
import React, { useState } from "react";
import "./Calendar.css"; //overriding default react-calendar css
import { useRouter } from "next/navigation";


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

function handleChange(value, isChecked) {
  console.log(value);
  console.log(isChecked);

  //fetch all dates for user in the start and then filter through those dates?
  //get users->email->journals=>dates=>{mood, entry}
  //journals page entry
  
}

function tileClassName({ date, view }) {
  if (tileDisabled({ date, view })) {
    return "filtered";
  }
}

export default function CalendarPage() {
  const router = useRouter();
  function onChange(value) {
    const dateRoute = JSON.stringify(new Date(value)).slice(1, 11);
    router.push(`/journal/${dateRoute}`);
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
                type="checkbox"
                name="mood"
                value={mood}
                id={mood}
                onChange={(event) =>
                  handleChange({ mood }, event.target.checked)
                }
              ></input>
            </div>
          ))}
        </div>
        <Calendar
          onClickDay={onChange}
          tileDisabled={tileDisabled}
          tileContent={() => <div className={styles.mood}>emoji</div>}
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
}
