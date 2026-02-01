import styles from "./Display.module.css"
function Display({text}){
   return <div className={styles.disp}>{text}</div>
}
export default Display;