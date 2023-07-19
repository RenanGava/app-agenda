import { ChangeEvent, useCallback, useState } from 'react';
import dayjs from 'dayjs';
import styles from './styles.module.scss'



export function RegisterClient() {

    const [selectedDate, setSelectedDate] = useState<boolean>(false)
    const [date, setDate] = useState<string>()

    // gera os 60 minusto em array
    const minutes = Array.from({ length: 60 }, (_, i) => i)
    // gera a quantidade de horas em array
    const hours = Array.from({ length: 24 }, (_, i) => i)


    const handleDatePicker  = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setDate(dayjs(e.target.value).format('DD/MM/YYYY HH:mm'))
        setSelectedDate(!!e.target.value)
        console.log(e.target.value);
    }, [])

    console.log(date);
    return (
        <div className={styles.container}>

            <form className={styles.formContainer}>
                <div>
                    <h1>Agendar Horário</h1>
                </div>
                <div className={styles.client_data}>
                    <input className={styles.inputName} type="text" placeholder='Nome do Cliente' />
                    <div className={styles.wrap}>
                        <input className={styles.inputTel} type="text" placeholder='Ex: (99)999..' />
                        <input className={styles.inputValue} type="number" placeholder='Valor R$' />
                    </div>
                </div>
                <div className={styles.serviceHourWraper}>
                    <div className={styles.service_data}>
                        <input type="text" placeholder='Serviço' />
                    </div>
                    <div className={styles.selectHour}>
                        {!selectedDate && <span>Data/Hora</span>}
                        {selectedDate && <span>{date}</span>}
                        <input 
                            type="datetime-local" 
                            onChange={handleDatePicker}
                        />
                    </div>
                </div>

                <button className={styles.button}>
                    Agendar
                </button>
            </form>
        </div>
    )
}