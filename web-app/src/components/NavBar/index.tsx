import singIn from '../../icons/logout.png'
import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.scss'
import iconLogOut from '../../icons/logout.png'



interface NavBarProps {
    isLogin: boolean
}

export function Navbar({ isLogin }: NavBarProps) {


    return (
        <div className={styles.container}>
            {isLogin && (
                <Link className={styles.containerLink} href="/">
                    <div className={styles.link}>
                        <Image className={styles.icon}
                            src={singIn}
                            alt="logout"
                        />
                        Login
                    </div>
                </Link>
            )}

            {!isLogin && (
                <div className={styles.navBar}>

                    <div className={styles.signOut}>
                        <button>
                            <Image
                                alt=''
                                src={iconLogOut}
                                className={styles.img}
                            />
                        </button>
                    </div>
                    <div>
                        <Link
                            className={styles.link}
                            href={'/dash'}
                        >
                            Dash
                        </Link>
                        <Link
                            className={styles.link}
                            href='/contact'
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}