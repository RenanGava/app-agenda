import { ChangeEvent, use, useState } from 'react';
import styles from './styles.module.scss'



export function RegisterClient() {

    // gera os 60 minusto em array
    const minutes = Array.from({ length: 60 }, (_, i) => i)
    // gera a quantidade de horas em array
    const hours = Array.from({ length: 24 }, (_, i) => i)

    function handleHouricker(e: ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value);

    }
    function handleMinutePicker(e: ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value);

    }

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
                        <input className={styles.inputValue} type="text" placeholder='Valor R$' />
                    </div>
                </div>
                <div className={styles.serviceHourWraper}>
                    <div className={styles.service_data}>
                        <input type="text" placeholder='Serviço' />
                    </div>
                    <div className={styles.selectHour}>
                        <input type="datetime-local" />
                    </div>
                </div>

                <button className={styles.button}>
                    Agendar
                </button>
            </form>
        </div>
    )
}