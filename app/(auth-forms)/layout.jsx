import styles from './authforms.module.css'

export default function AuthForm({ children }) {
    return <div className={styles.modal}>{children}</div>;
}
