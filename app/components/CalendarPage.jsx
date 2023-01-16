"use client";

import { signOut } from "next-auth/react";
import { differenceInCalendarDays } from "date-fns";
import Calendar from "react-calendar";
import styles from "./CalendarPage.module.css";
import { useEffect, useState } from "react";
import "./Calendar.css"; //overriding default react-calendar css
import MoodSelector from "./MoodSelector";

export default function CalendarPage({ entries, setDate }) {
  // date : {mood, entry}

  const [mood, setMood] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  const isMobile = windowWidth <= 600;

  function onMoodSelect(selectedMood) {
    setMood(selectedMood);
  }

  function onClickDay(value) {
    const date = JSON.stringify(new Date(value)).slice(1, 11);
    setDate(date);
  }

  const enabledDates = Object.keys(entries).filter(
    (date) => entries[date]["mood"] === mood
  );

  function tileDisabled({ date, view }) {
    if (!mood) {
      return false;
    }

    if (view === "month") {
      return !enabledDates.includes(
        JSON.stringify(new Date(date)).slice(1, 11)
      );
      return !enabledDates.find(
        (dDate) => differenceInCalendarDays(dDate, date) === 0
      );
    }
  }

  function tileClassName({ date, view }) {
    if (tileDisabled({ date, view })) {
      return "disabled";
    }
  }

  return (
    <div className={styles.modal}>
      <button onClick={() => signOut()} className={styles.logout}>
        Logout
      </button>
      <div className={styles["calendar-container"]}>
        <div className={styles.navbar}>
          <div className={styles.mobileMoodbarTop}>
            <p>Filter days by mood</p>
            {isMobile && (
              <button onClick={() => setMood(null)} className={styles.clear}>
                Clear
              </button>
            )}
          </div>
          <div className={styles.emojibar}>
            <MoodSelector
              onMoodSelect={onMoodSelect}
              moodState={mood}
              isCalendar={true}
            />
          </div>
          {!isMobile && (
            <button onClick={() => setMood(null)} className={styles.clear}>
              Clear
            </button>
          )}
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
