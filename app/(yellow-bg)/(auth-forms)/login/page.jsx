import styles from "../authforms.module.css";

export default function LoginPage() {
    return (
        <>
            <p className={styles.heading}>
                Sign in to <br></br> Wellness Everyday
            </p>
            <div className={styles.subtext}>
                <span>{"Don't have an account? "}</span>
                <span className={styles.register}>Register</span>
            </div>
            <p className={styles.label}>Email</p>
            <input className={styles.input} type="text" />
            <p className={styles.label}>Password</p>
            <input className={styles.input} type="text" />
            <button className={styles.primaryButton}>Sign In</button>
            <p>Forgot password?</p>
        </>
    );
}
