import styles from './Row.module.css'

function Row(props){
  return <div className= {` ${styles[props.customClass]}`}>{props.children}</div> 
  
}

export default Row