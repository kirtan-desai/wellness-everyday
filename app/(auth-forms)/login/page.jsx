import styles from "../authforms.module.css";

export default function LoginPage() {
    return (
        <form className={styles.form}>
            <div>
                <p className={styles.heading}>
                    Sign in to <br></br> Wellness Everyday
                </p>
                <div className={styles.subtext}>
                    <span>{"Don't have an account? "}</span>
                    <span className={styles.register}>Register</span>
                </div>
            </div>
            <div className={styles.inputSection}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" id="password" name="password" />
                </div>
            </div>
            <div>
                <button className={styles.primaryButton}>Sign In</button>
                <p>Forgot password?</p>
            </div>
        </form>
    );
}
