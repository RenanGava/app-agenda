import Image from "next/image"
import Link from "next/link"
import styles from './style.module.scss'
import { Navbar } from "../NavBar"

export function Header() {

    const isLogin = false


    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Logo do App</h1>
            </div>


            <Navbar
                isLogin={isLogin}
            />

        </header>
    )
}