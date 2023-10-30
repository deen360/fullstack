import { useState } from 'react'

const Button = ({text, onClick}) => { return(<><button onClick={onClick}> {text}</button></>)}

const Rend = ({text}) => { return <> <p> has {text} votes </p></>};

const Header = ({text}) => {return(<h1> {text} </h1>)}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   // state declariton for eleemts to be used 
  const [selected, setSelected] = useState(0) //to update anecdote state
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)) //to create an empty array for vote state 
  const copy = [...votes]  //copy of votes to be used for updating state 
  const [maxi, setMaxi] = useState(0) //used to update the index of the quote with maximum votes 
  
  // function changes the anecdotes quotes randomly
  const random = () => {
    return (setSelected( Math.floor(anecdotes.length * Math.random())))}

    //function add 1 to the vote in click  and update sthe maximun quote 
  const handleClick = () =>  {
    copy[selected] += 1
    setVotes(copy)
    setMaxi(copy.indexOf(Math.max(...copy)))
    return (copy)
  
  }


  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      <Rend text={copy[selected]} />
      <div>
      <Button text="vote" onClick={handleClick}/>
      <Button text="next anecdote" onClick={random} />
      </div>
      <div>
      <Header text="Anecdote with most votes"/>
      {anecdotes[maxi]}
      <Rend text={copy[maxi]} />


      </div>


    </div>
  )
}

export default App