"use client";

import { differenceInCalendarDays } from "date-fns";
import Calendar from "react-calendar";
import styles from "./page.module.css";
import React, { useState } from "react";
import "./Calendar.css"; //overriding default react-calendar css

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) !== 0;
}

const disabledDates = [];

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
  const [value, setValue] = useState(new Date());

  function onChange(value) {
    setValue(value);
    console.log(JSON.stringify(new Date(value)).slice(1, 11));
  }
  return (
    <div>
      <div className={styles["calendar-container"]}>
        <div className={styles.navbar}>
          <p>Filter days by mood</p>
        </div>
        <Calendar
          onClickDay={onChange}
          value={value}
          tileDisabled={tileDisabled}
          tileContent={() => <div className={styles.mood}>emoji</div>}
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
}
