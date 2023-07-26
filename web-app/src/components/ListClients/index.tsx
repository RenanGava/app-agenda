import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSheetPlastic, faPen } from '@fortawesome/free-solid-svg-icons'

interface ListClientProps {
    onRequestOpenModal: (ars: boolean) => void
    onRequestOpenEditClientModal: (ars: boolean) => void
}


export function ListClients({ 
    onRequestOpenModal, 
    onRequestOpenEditClientModal 
}: ListClientProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <table className={styles.table}>
                    <thead className={styles.tableHeader}>
                        <tr >
                            <th>Nome</th>
                            <th>Serviço</th>
                            <th>horário</th>
                            <th className={styles.icon}><FontAwesomeIcon icon={faPen} /></th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableContent}>
                        <tr>
                            <td>Gabrieli</td>
                            <td>Sombrancelha</td>
                            <td>10/07/2023</td>
                            <td className={styles.edit}>
                                <button
                                    onClick={() => onRequestOpenEditClientModal(true)}
                                >
                                    <FontAwesomeIcon icon={faSheetPlastic} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    className={styles.OpenModal}
                    onClick={() => onRequestOpenModal(true) }
                >
                    Novo Cliente
                </button>
            </div>
        </div>
    )
}