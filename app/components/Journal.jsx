"use client";

import { useState } from "react";
import styles from "./Journal.module.css";
import MoodSelector from "./MoodSelector";

export default function Journal({ journal, setDate }) {
    const [mood, setMood] = useState(journal?.mood);
    const [entry, setEntry] = useState(journal?.entry)

    const onMoodSelect = (selectedMood) => {
        setMood(selectedMood);
    };

    return (
        <>
            <button onClick={() => setDate(undefined)}>Back to Calendar</button>
            <form className={styles.modal}>
                <p className={styles.heading}>
                    {"Welcome to your private space name :)"}
                </p>
                <div className={styles.textwrapper}>
                    <p>Notable memories of today</p>
                    <textarea className={styles.textarea}></textarea>
                </div>
                <div>
                    <p>How I felt today</p>
                    <div className={styles.bottom}>
                        <div className={styles.moods}>
                            <MoodSelector onMoodSelect={onMoodSelect} />
                        </div>
                        <button disabled={true} className={styles.save}>Save</button>
                    </div>
                </div>
            </form>
        </>
    );
}
