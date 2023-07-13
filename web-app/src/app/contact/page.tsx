import { Header } from '@/components/Header'
import styles from './styles.module.scss'
import Image from 'next/image'
import iconInstagram from '../../icons/instagram.png'
import iconPhone from '../../icons/phone.png'
import Link from 'next/link'

export default function Contact() {

    return (
        <main className={styles.container}>
            <Header />

            <div className={styles.contentContainer}>
                <div className={styles.cardContent}>
                    {/* <Image
                        src=''
                        alt=''
                    /> */}
                    <div className={styles.perfil}>
                        Foto
                    </div>

                    <div className={styles.descriptionCard}>
                        <h2>Gabrieli Dellecrode</h2>
                        <p>Lash Designer</p>
                    </div>
                    <div className={styles.contactIcons}>
                        <Link
                            href={''}
                            className={styles.div}
                        >
                            <Image
                                className={styles.img}
                                src={iconInstagram}
                                alt='link instagram'
                            />
                        </Link>
                        <Link
                            href={''}
                            className={styles.div}
                        >
                            <Image
                                className={styles.img}
                                src={iconPhone}
                                alt='numero telefone'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}