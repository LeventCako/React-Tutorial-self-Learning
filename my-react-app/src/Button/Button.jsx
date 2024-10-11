import styles from './Button.module.css'
function Button() {
  /* we can also use inline STyling:
  const Styles = {
  
  backgroundcolor......,
  padding,
  }
  
  
  */
  return(<button className={styles.button}>Click me!</button>)
}
export default Button