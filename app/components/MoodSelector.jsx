const moods = {
    happy: "😊",
    sad: "🙁",
    stressed: "😥",
    neutral: "👍",
    hopeful: "🤩",
};

export default function MoodSelector({ onMoodSelect }) {
    return Object.keys(moods).map((mood) => (
        <div key={mood}>
            <label htmlFor={mood}>{moods[mood]}</label>
            <input
                type="radio"
                name="mood"
                value={mood}
                id={mood}
                onChange={(event) => onMoodSelect(event.target.value)}
            ></input>
        </div>
    ));
}
// https://www.youtube.com/watch?v=KOci5GrL1pw
