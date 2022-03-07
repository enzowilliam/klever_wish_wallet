import styles from './TokenCard.module.css'
import { FiEdit} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function TokenCard({ id, name, balanceValue, handleRemove }) {

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

//apenas usarei name e balance e o handleRemove é para remover que terá que ser adiconado na pagina editToken*/




/*<Link onClick={toggleTokenForm} to ={`/edittoken/${id}`} className={styles.edit}>
                <FiEdit/>
              </Link>*/
