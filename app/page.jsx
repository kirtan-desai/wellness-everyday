import CalendarPage from "./CalendarPage";
import LandingPage from "./LandingPage";

export default function Home() {
  //   const landingPage = (
  //     <main className={styles.container}>
  //       <section className={styles.section}>
  //         <div className={styles.welcome}>
  //           <div>
  //             <div className={styles.title}>Wellness Everyday</div>
  //             <div className={styles.subtitle}>
  //               We help you journal and track how you feel everyday to help you
  //               increase your well being and give you a single space to keep your
  //               daily memeories
  //             </div>
  //           </div>
  //           <div>
  //             <button className={styles.start}>Get Started</button>
  //           </div>
  //         </div>
  //       </section>
  //       <footer className={styles.footer}></footer>
  //     </main>
  //   );

  //   function isSameDay(a, b) {
  //     return differenceInCalendarDays(a, b) !== 0;
  //   }

  //   const disabledDates = [new Date(2017, 0, 1)];

  //   function tileDisabled({ date, view }) {
  //     // Disable tiles in month view only
  //     if (view === "month") {
  //       // Check if a date React-Calendar wants to check is on the list of disabled dates
  //       return disabledDates.find((dDate) => isSameDay(dDate, date));
  //     }
  //   }

  //   function tileClassName({ date, view }) {
  //     // Disable tiles in month view only
  //     if (tileDisabled(date, view)) {
  //       // Check if a date React-Calendar wants to check is on the list of disabled dates
  //       return "filtered";
  //     }
  //   }

  //   const [value, setValue] = useState(new Date());
  //   function onChange(nextValue) {
  //     setValue(nextValue);
  //   }

  //   const calendarPage = (
  //     <div className={styles.modal}>
  //       <div className={styles["calendar-container"]}>
  //         <div className={styles.navbar}>test</div>
  //         <Calendar
  //           value={value}
  //           onChange={onChange}
  //           tileDisabled={tileDisabled}
  //           tileContent={() => <div className={styles.mood}>emoji</div>}
  //           tileClassName={tileClassName}
  //         />
  //       </div>
  //     </div>
  //   );

  return false ? <LandingPage /> : <CalendarPage />;
}

// make calendar responsive below 555 px
