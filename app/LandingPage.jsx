import Link from "next/link";
import styles from "./page.module.css";

export default function LandingPage() {
    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <div className={styles.welcome}>
                    <div>
                        <div className={styles.title}>Wellness Everyday</div>
                        <div className={styles.subtitle}>
                            We help you journal and track how you feel everyday
                            to help you increase your well being and give you a
                            single space to keep your daily memeories
                        </div>
                    </div>
                    <div>
                        <Link href="/signin">
                            <button className={styles.start}>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}></footer>
        </main>
    );
}
