import Image from "next/image"
import Link from "next/link"
import singIn from '../../icons/logout.png'
import styles from './style.module.scss'

export function Header() {


    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Logo do App</h1>
            </div>


            <Link className={styles.ContainerLink} href="/">
                <div className={styles.link}>
                    <Image className={styles.icon}
                        src={singIn}
                        alt="logout"
                    />
                    Login
                </div>
            </Link>

        </header>
    )
}