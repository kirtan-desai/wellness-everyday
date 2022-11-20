import styles from './yellowbg.module.css'

export default function YellowBg({ children }) {
    return <section className={styles.section}>{children}</section>;
}
