import { useNavigate } from 'react-router-dom'

import TokenForm from '../token/TokenForm'
import ReturnButton from '../layout/ReturnButton'

import styles from './NewToken.module.css'
import logo from '../../assets/logo.png'
import shooting_star from '../../assets/shooting-star.svg'

function NewToken() {
  const history = useNavigate()

  function createToken(cripto) {

    cripto.token = []
    cripto.balance = 0

    fetch('http://localhost:5000/criptos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cripto)
    })
      .then((resp) => resp.json())
      .then((data) => {
          console.log(data)

          
          history('/',{state:{message: 'token adicionada com sucesso'}}) 
        })
      .catch((err) => console.log(err))
  }

  return (
    <section className={styles.home_container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.wishWallet}>
        <img src={shooting_star} alt="star" className={styles.star} />
        Wish Wallet{' '}
      </h1>
      <h3 className={styles.pageType}>Add Token</h3>
      <ReturnButton className={styles.butt} to="/" text="Voltar" />
      <TokenForm className={styles.form}  handleSubmit={createToken} btnText="Salvar"/>
    </section>
  )
}

export default NewToken
