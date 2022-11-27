"use client";

import styles from "./Journal.module.css";
import MoodSelector from "./MoodSelector";

export default function Journal({ entry, setDate }) {
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
                            <MoodSelector />
                        </div>
                        <button className={styles.save}>Save</button>
                    </div>
                </div>
            </form>
        </>
    );
}
