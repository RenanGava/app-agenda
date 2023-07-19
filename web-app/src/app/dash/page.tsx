'use client'
import { Header } from '@/components/Header'
import { RegisterClient } from '@/components/RegisterClient'
import styles from './styles.module.scss'
import { ListClients } from '@/components/ListClients'
import { CalendarComponent } from '@/components/Calendar'
import Modal from 'react-modal'
import { RegisterModal } from '@/components/ModalRegisterClient'



export default function Dash() {


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>

                <CalendarComponent />
                <ListClients />

                
                <RegisterModal children={<RegisterClient/>}/>
            </div>
        </div>
    )
}

Modal.setAppElement('#root')