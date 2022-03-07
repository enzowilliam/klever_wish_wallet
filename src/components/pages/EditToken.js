import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TokenForm from '../token/TokenForm'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'

import styles from './EditToken.module.css'
import logo from '../../assets/logo.png'
import shooting_star from '../../assets/shooting-star.svg'

function EditToken() {
  let { id } = useParams()

  const [criptos, setCriptos] = useState([])
  const history = useNavigate()

  const [showTokenForm, setShowTokenForm] = useState(false)

  function toggleTokenForm() {
    setShowTokenForm(!showTokenForm)
  }

  const remove = e => {
    e.preventDefault()
    removeToken(id)
  }

  useEffect(() => {
    fetch(`http://localhost:5000/criptos/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setCriptos(data)
      })
      .catch(err => console.log(err))
  }, [id])

  function removeToken(id) {
    fetch(`http://localhost:5000/criptos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setCriptos(Object.values(criptos).filter(cripto => cripto.id !== id))
        history('/', { state: { message: 'token removido com sucesso' } })
      })
      .catch(err => console.log(err))
  }

  function editCripto(cripto) {
    fetch(`http://localhost:5000/criptos/${cripto.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cripto)
    })
      .then(resp => resp.json())
      .then(data => {
        setCriptos(data)
        history('/', { state: { message: 'token editado com sucesso' } })
      })
      .catch(err => console.log(err))
  }

  return (
    <section className={styles.home_container}>
      <img className={styles.logo} src={logo} alt="logo" />

      <h1 className={styles.wishWallet}>
        <img src={shooting_star} alt="star" className={styles.star} />
        Wish Wallet{' '}
      </h1>
      <h3 className={styles.pageType}>Edit Token</h3>
      <LinkButton className={styles.butt} to="/" text="Voltar" />

      <>
        {criptos.name ? (
          <div>
            <Container customClass="columm">
              <div className={styles.form}>
                {!showTokenForm ? (
                  <div className={styles.TokenForm}>
                    <TokenForm
                      handleSubmit={editCripto}
                      btnText="Save"
                      criptoData={criptos}
                    />
                    <button className={styles.deletb} to="/" onClick={remove}>
                      <a href="/">Remove</a>
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </Container>
          </div>
        ) : (
          <p></p>
        )}
      </>
    </section>
  )
}

export default EditToken
/*
  this.removeToken = (index) => {
      const criptos = this.state.criptos.slice();
      criptos.splice(index, 1);
      this.setState({criptos});
  }


onClick={removeToken} 

*/
