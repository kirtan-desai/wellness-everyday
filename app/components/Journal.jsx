"use client";

import { redirect } from "next/navigation";
import styles from "./Journal.module.css";
import Link from "next/link";

const moods = {
    happy: "😊",
    sad: "🙁",
    stressed: "😥",
    neutral: "👍",
    hopeful: "🤩",
};

export default function Journal({ setDate }) {
    //TODO: Make GET req to get journal entry using session.user.email and params.date
    // const docSnap = await getDoc(
    //     doc(db, "users", "kirtands44@gmail.com", "journals", "2022-08-23")
    // );
    // const data = docSnap.data();

    return (
        <>
            <button onClick={() => setDate(undefined)}>Back to Calendar</button>

            <form className={styles.modal}>
                <div>
                    <p className={styles.heading}>
                        {"Welcome to your private space name :)"}
                    </p>
                </div>
                <div className={styles.textwrapper}>
                    <p>Notable memories of today</p>
                    <textarea className={styles.textarea}></textarea>
                </div>
                <div>
                    <p>How I felt today</p>
                    <div className={styles.bottom}>
                        <div className={styles.moods}>
                            {Object.keys(moods).map((mood) => (
                                <div key={mood}>
                                    <label htmlFor={mood}>{moods[mood]}</label>
                                    <input
                                        type="radio"
                                        name="mood"
                                        value={mood}
                                        id={mood}
                                    ></input>
                                </div>
                            ))}
                            {/* https://www.youtube.com/watch?v=KOci5GrL1pw */}
                        </div>
                        <button className={styles.save}>Save</button>
                    </div>
                </div>
            </form>
        </>
    );
}
