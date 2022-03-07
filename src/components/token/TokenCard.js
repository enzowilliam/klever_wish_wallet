import styles from './TokenCard.module.css'
import { FiEdit} from 'react-icons/fi'
import {useState} from 'react'

function TokenCard({ id, name, balanceValue, }) {

  const [showTokenForm, setShowTokenForm] = useState(false)

function toggleTokenForm() {
  setShowTokenForm(!showTokenForm)
}
  
  return (
    <div className={styles.app_container}>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.button}>
              <button onClick={toggleTokenForm} className={styles.editbt}>
              <a href={`/edittoken/${id}`}><FiEdit size={26}/></a>
              </button>
            </td>
            <td>
              <h3 className={styles.token}>{name}</h3>
            </td>
            <td>
              <h3 className={styles.balance}>{balanceValue}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TokenCard
