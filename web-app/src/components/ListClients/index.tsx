import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'


export function ListClients() {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tr className={styles.tableHeader}>
                    <th>Nome</th>
                    <th>Serviço</th>
                    <th>horário</th>
                    <th>Editar</th>
                </tr>
                <tr className={styles.tableContent}>
                    <td>Gabrieli</td>
                    <td>Sombrancelha</td>
                    <td>10/07/2023</td>
                    <td>
                        <button><FontAwesomeIcon icon={faPen} /></button>
                        <button><FontAwesomeIcon icon={faPen} /></button>
                    </td>
                </tr>
            </table>
        </div>
    )
}