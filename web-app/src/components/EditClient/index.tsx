import { useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


export function EditClient() {

    const [date, setDate] = useState<Date>()
    const [selectedDate, setSelectedDate] = useState<boolean>(false)


    return (
        <div
            className={styles.container}
        >
            <button className={styles.Close}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            <form className={styles.clientData}>
                <h1>Editar Dados</h1>
                <input type="text" placeholder='Nome do Cliente' value={'test'}/>
                <input type="text" placeholder='Serviço' value={'test'}/>
                <input type="text" placeholder='Preço' value={'test'}/>
                <input type="text" placeholder='Número de Telefone' value={'test'}/>
                <div className={styles.datetime}>
                    {!selectedDate && <span>Data/Horário</span>}
                    {selectedDate && <span>Data/Horário</span>}
                    <input type="datetime-local" placeholder='Data' />
                </div>
                <textarea placeholder='Descrição' />
                <button
                    type='submit'
                    className={styles.submit}
                >
                    Editar
                </button>
            </form>
        </div>
    )
}