import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './TokenForm.module.css'

function TokenForm({ handleSubmit, btnText, criptoData,criptoEdited,balanceEdited }) {
  const [cripto, setCripto] = useState(criptoData || {})

  const submit = (e) => {
    e.preventDefault()
    //console.log(cripto)
    handleSubmit(cripto)
  }

  function handleChange(e) {
    setCripto({ ...cripto, [e.target.name]: e.target.value})
  }


  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Token"
        name="name"
        placeholder={criptoEdited}
        handleOnChange={handleChange}
        value = {cripto.name ? cripto.name : ''}
      />

      <Input
        type="text"
        text="Balance"
        name="balanceValue"
        placeholder= {balanceEdited}
        handleOnChange={handleChange}
        value ={cripto.balanceValue ? cripto.balanceValue : ''}
      />
      <SubmitButton className={styles.button} text={btnText} />
    </form>
  )
}

export default TokenForm

