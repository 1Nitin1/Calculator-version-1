import styles from './Button.module.css'
const Button = ({button,setnewdisp,disp})=>{
   return <button className={styles.button} onClick={()=>
            
            {if(button==='C'){
               setnewdisp("");
            }else if(button==='='){
               let ans=eval(disp);
               setnewdisp(ans);
            }else{
               console.log(button);
               let d=disp+button;
               setnewdisp(d);
            }}}>{button}</button>
}
export default Button;