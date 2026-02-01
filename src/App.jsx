import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './Components/Container';
import Display from './Components/Display';
import ButtonContainer from './Components/ButtonConatiner';

function App() {
  let [disp,setnewdisp] = useState("");
  let buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
  
  return (<Container>
    <Display text={disp} ></Display>
    <ButtonContainer list={buttons} disp={disp} setnewdisp={setnewdisp}></ButtonContainer>
    
  </Container>);
}

export default App
