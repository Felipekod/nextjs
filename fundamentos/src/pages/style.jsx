import styles from './Style.module.css'
import Link from 'next/link'

export default function Style() {
    return (
        <div className={styles.blueviolet}>
            <Link href="/">Retourner</Link>
            <h1>Style using CSS modules</h1>
        </div>
    )
}