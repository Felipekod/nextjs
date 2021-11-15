import Link from "next/link"
import styles from '../styles/Layout.module.css'


export default function Layout(props){
    return(
            <div className={styles.layout}>
                <div className={styles.header}>
                    <h1>{props.title ?? "Une autre example"}</h1>
                    <Link href="/">
                        <a>Retourner</a>
                    </Link>
                </div>

                <div className={styles.main}>
                   {props.children}
                </div>
             </div>
    )
}