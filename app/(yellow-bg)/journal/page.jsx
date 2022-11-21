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
                    <div>mood buttons</div>
                    <button className={styles.save}>Save</button>
                </div>
            </div>
        </form>
    );
}
