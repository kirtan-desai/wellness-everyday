import styles from "./journal.module.css";

export default function LoginPage() {
    return (
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
                        <label for="happy">😊</label>
                        <input
                            type="radio"
                            name="mood"
                            value="happy"
                            id="happy"
                        ></input>
                        <label for="sad">🙁</label>
                        <input
                            type="radio"
                            name="mood"
                            value="sad"
                            id="sad"
                        ></input>
                        <label for="stressed">😥</label>
                        <input
                            type="radio"
                            name="mood"
                            value="stressed"
                            id="stressed"
                        ></input>
                        <label for="neutral">👍</label>
                        <input
                            type="radio"
                            name="mood"
                            value="neutral"
                            id="neutral"
                        ></input>
                        <label for="hopeful">🤩</label>
                        <input
                            type="radio"
                            name="mood"
                            value="hopeful"
                            id="hopeful"
                        ></input>
                        {/* https://www.youtube.com/watch?v=KOci5GrL1pw */}
                    </div>
                    <button className={styles.save}>Save</button>
                </div>
            </div>
        </form>
    );
}
