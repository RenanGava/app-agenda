'use client'
import { Header } from '@/components/Header'
import { RegisterClient } from '@/components/RegisterClient'
import styles from './styles.module.scss'
import { ListClients } from '@/components/ListClients'
import { CalendarComponent } from '@/components/Calendar'
import Modal from 'react-modal'
import { RegisterModal } from '@/components/ModalRegisterClient'
import { useCallback, useState } from 'react'
import { monthsLabel, weekDaysLabel } from '@/components/Calendar/CalendarLabels'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export default function Dash() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const array = [new Date(2023, 6, 30), new Date(2023, 7, 1), new Date(2023, 7, 20)]



    function handleRegisterClient(e: Date | Date[]) {
        console.log(e);
    }

    const isDateRegisted = useCallback((calendarDate: Date): boolean => {
        for (let data of array){
            if(data.getDate() === calendarDate.getDate() && data.getMonth() === calendarDate.getMonth()){
                return true
            }
        }
    }, [])

    console.log(typeof(array[0]));
    
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.div}>
                    <CalendarComponent
                        isMultiSelector={true}
                        size={300}
                        weekDaysLabel={weekDaysLabel}
                        monthsLabel={monthsLabel}
                        value={array[0]}
                        isHighlight={isDateRegisted}
                        onChange={e => { handleRegisterClient(e) }}
                    />
                    <ListClients 
                        onRequestOpenModal={() => setIsOpen(true)}
                    />
                </div>
                <RegisterModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                >
                    <RegisterClient setIsOpen={setIsOpen} />
                </RegisterModal>
            </div>
        </div>
    )
}

Modal.setAppElement('#root')