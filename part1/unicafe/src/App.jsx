import { useState } from 'react'

const Header = ({text}) => {return(<h1> {text}</h1> )};

const All = ({text, A,B,C}) => {

  return(
     <p> {text} {A + B + C} </p>
     )};


const Statistics = ({text, A,B,C}) => {
  if(A === 0 &&  B === 0 && C === 0){
    return(<>
    <h1> statistics </h1>
    <p> No feedback given </p> 
  </>)
  }
  return(<> <h1> statistics </h1>
   <p> {text} {(A * 1 + B * 0 + C * -1) / (A + B + C) } </p> 
<p> positive {(A * 100) / (A + B + C) } % </p> 
</> )};


const Result = ({text, value}) => { return(
  <> <p> {text}  {value} </p> </>
)}

const Button = ({text,counter,setCounter}) => {

  const handleclick= () => {return( setCounter(counter + 1))}
  return(
    <> 
    <button onClick={handleclick}>
      {text} 
    </button>
    
    </>
  )}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button text='good'   counter={good} setCounter={setGood}/>
      <Button text='neutral'  counter={neutral} setCounter={setNeutral}   />
      <Button  text='bad' counter={bad} setCounter={setBad}/>
      

      
      <Result text='good' value={good} />
      <Result text='neutral' value={neutral} />
      <Result text='bad' value={bad} />
      <All text="all" A={good}  B={neutral} C={bad} />

      <Statistics text="average" A={good}  B={neutral} C={bad} />

    </div>
  )
}

export default App