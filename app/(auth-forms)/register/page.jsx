import styles from "../authforms.module.css";

export default function LoginPage() {
    return (
        <form className={styles.form}>
            <div>
                <p className={styles.heading}>
                    Register to <br></br> Wellness Everyday
                </p>
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
                <div>
                    <label htmlFor="verify-password">Verify Password</label>
                    <br></br>
                    <input type="password" id="verify-password" name="verify-password" />
                </div>
            </div>
            <div>
                <button className={styles.primaryButton}>Register</button>
            </div>
        </form>
    );
}
