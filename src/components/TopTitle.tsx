import styles from '../styles/pages/Home.module.css'

export default function TopTitle() {
    return (
        <div className={styles.topTitleContaier}>
            <h1 className={styles.title}>VRGo</h1>
            <h1 className={styles.description}>Realidade Virtual</h1>
        </div>
    )
}