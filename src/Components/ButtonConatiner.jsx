import Button from "./Button";
import styles from './ButtonContainer.module.css'
const ButtonContainer = ({list,setnewdisp,disp})=>{
   return <div className={styles.butCon}>
      {list.map((button)=>(
         <Button button={button} key={button} 
         setnewdisp={setnewdisp} disp={disp}></Button>
      ))};
   </div> 
};
export default ButtonContainer;