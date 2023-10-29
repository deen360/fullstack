import { useState } from 'react'

const Header = ({text}) => {return(<h1> {text}</h1> )};

const StatisticLine = ({text, value}) => { return( <tr> {text}  <td> {value} </td> </tr>  )}

const Statistics = ({good,neutral,bad}) => {
  let total = good + neutral + bad;
  let avg = (good * 1 + neutral * 0 + bad * -1) / total;
  let pos = (good * 100) / (total) + " %"  ;
  
  if(total === 0){
    return(<> <p> No feedback given </p></>)}

  return (<table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={avg} />
      <StatisticLine text='positve' value={pos} />
      </table>)
}
const Button = ({text,counter,setCounter}) => {

  const handleClick= () => {return( setCounter(counter + 1))}
  
  return(<> <button onClick={handleClick}>{text} </button></>)};

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
      
      <Header text='statistics'/> 
      <Statistics good={good}  neutral={neutral} bad={bad} />

    </div>
  )
}

export default App