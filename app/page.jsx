import styles from "./page.module.css";

export default function Home() {
    const landingPage = (
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
                        <button className={styles.start}>Get Started</button>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}></footer>
        </main>
    );

    const calendarPage = <div>Calender</div>;

    return false ? landingPage : calendarPage;
}
