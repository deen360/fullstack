import { useState } from 'react'


const Button = ({onClick,counter}) => {
  
  return(
    <div>
      <button onClick={onClick}> {counter} </button>
    </div>
    
  )
} 

const App = () => {
  let Counter, setCounter;
  [Counter, setCounter] = useState(0);
  const handleClick = () => {setCounter(Counter + 1)}
  


  return (
    <div>

     <Button  onClick={handleClick} counter={Counter} /> 
     <Button  onClick={handleClick} counter={Counter} />
     <Button  onClick={handleClick} counter={Counter} />
     
     </div>
 
  )
}
export default App
