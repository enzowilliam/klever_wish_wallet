import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
  return (
    <div>
      <button to="/" className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton
