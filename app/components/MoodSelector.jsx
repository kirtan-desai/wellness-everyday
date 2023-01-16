import styles from "./MoodSelector.module.css";

const moods = {
  happy: "😊",
  sad: "🙁",
  stressed: "😥",
  neutral: "👍",
  hopeful: "🤩",
};
// class emoji1 for mood1
export default function MoodSelector({ onMoodSelect, isCalendar, moodState }) {
  return Object.keys(moods).map((mood) => (
    <div className={styles.moodBar} key={mood}>
      <input
        className={styles.moodInput}
        type="radio"
        name="mood"
        value={mood}
        id={mood}
        checked={mood == moodState}
        onChange={(event) => onMoodSelect(event.target.value)}
      ></input>
      <label
        className={isCalendar ? styles.emojiCal : styles.emoji}
        htmlFor={mood}
      >
        {moods[mood]}
      </label>
    </div>
  ));
}
// https://www.youtube.com/watch?v=KOci5GrL1pw
// .radio-button input[type="radio"]:checked+label {
//   background-color: #76cf9f;
// }
