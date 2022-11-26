import { unstable_getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import styles from "./journal.module.css";
import db from "../../config/db";
import Link from "next/link";

const moods = {
  happy: "😊",
  sad: "🙁",
  stressed: "😥",
  neutral: "👍",
  hopeful: "🤩",
};

export default async function Journal({ params }) {
  const session = await unstable_getServerSession();

  !session && redirect("/");

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  // console.log(session)
  //TODO: Make GET req to get journal entry using session.user.email and params.data

  return (
    <>
      <Link href="/">
        <button>Back to Calendar</button>
      </Link>
      <form className={styles.modal}>
        <div>
          <p className={styles.heading}>
            {"Welcome to your private space name :)"}
          </p>
        </div>
        <div className={styles.textwrapper}>
          <p>Notable memories of today</p>
          <textarea
            defaultValue={params.date}
            className={styles.textarea}
          ></textarea>
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
