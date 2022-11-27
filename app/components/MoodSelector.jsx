const moods = {
    happy: "😊",
    sad: "🙁",
    stressed: "😥",
    neutral: "👍",
    hopeful: "🤩",
};

export default function MoodSelector({ onMoodSelect }) {
    const onChange = (event) =>
        onMoodSelect(event.target.value, event.target.checked);

    return Object.keys(moods).map((mood) => (
        <div key={mood}>
            <label htmlFor={mood}>{moods[mood]}</label>
            <input
                type="radio"
                name="mood"
                value={mood}
                id={mood}
                onChange={onMoodSelect && onChange}
            ></input>
        </div>
    ));
}
// https://www.youtube.com/watch?v=KOci5GrL1pw
