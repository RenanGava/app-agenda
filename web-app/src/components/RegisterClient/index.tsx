import { ChangeEvent } from 'react';
import styles from './styles.module.scss'



export function RegisterClient() {

    function handleDatePickerEvent(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    return (
        <div className={styles.container}>
            <form>
                <div className={styles.client_data}>
                    <input type="text" placeholder='Nome do Cliente'/>
                    <input type="text" placeholder='Serviço'/>
                </div>
            </form>
        </div>
    )
}