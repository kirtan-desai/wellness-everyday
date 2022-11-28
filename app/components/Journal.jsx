"use client";

import MoodSelector from "./MoodSelector";
import { useState } from "react";
import styles from "./Journal.module.css";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function Journal({ journal, user, date }) {
    const [mood, setMood] = useState(journal?.mood);
    const [entry, setEntry] = useState(journal?.entry);

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch("api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mood, entry, date, email: user.email }),
        });
        router.refresh();
        //setdate state to undefined
    };

    return (
        <form
            className={styles.modal}
            action="/api/submit"
            method="POST"
            onSubmit={handleSubmit}
        >
            <p className={styles.heading}>
                {`Welcome to your private space ${user.name} :)`}
            </p>
            <div className={styles.textwrapper}>
                <p>Notable memories of today</p>
                <textarea
                    onChange={(event) => setEntry(event.target.value)}
                    className={styles.textarea}
                    name="entry"
                ></textarea>
            </div>
            <div>
                <p>How I felt today</p>
                <div className={styles.bottom}>
                    <div className={styles.moods}>
                        <MoodSelector onMoodSelect={(mood) => setMood(mood)} />
                    </div>
                    <button
                        disabled={!(mood && entry)}
                        className={clsx(
                            styles.save,
                            mood && entry && styles.saveActive
                        )}
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
