import logo from '../../assets/logo.png'
import shooting_star from '../../assets/shooting-star.svg'
import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import TokenCard from '../token/TokenCard'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from '../layout/Row'

import styles from './Home.module.css'

function Home() {
  const [criptos, setCriptos] = useState([])

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/criptos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCriptos(data)
      })
      .catch(err => console.log(err))
  }, [])

  


  return (
    <section className={styles.home_container}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.subname}>
        <h1 className={styles.wishWallet}>
          <img src={shooting_star} alt="star" className={styles.star} />
          Wish Wallet{' '}
        </h1>
        </div>
        <div className={styles.butt} >
        <LinkButton to="/newtoken" text="Add Token" />
        </div>
       
        <h3 className={styles.token}>Token</h3>
        <h3 className={styles.balance}>Balance</h3>
      </div>
      <Row customClass="start">
        {criptos.length > 0 &&
          criptos.map((cripto) => (
            <TokenCard className={styles.criptos}
              id={cripto.id}
              name={cripto.name} 
              balanceValue={cripto.balanceValue}
            />
          ))}
      </Row>

      {message && <Message type="success" msg={message} />}
    </section>
  )
}
export default Home
