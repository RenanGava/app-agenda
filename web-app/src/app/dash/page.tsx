'use client'
import { Header } from '@/components/Header'
import { RegisterClient } from '@/components/RegisterClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'
import { ListClients } from '@/components/ListClients'


export default function Dash() {


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <RegisterClient />
                <ListClients />
            </div>
        </div>
    )
}