const Header = (props) => {
  return(props.head)
}



const Content = (props) => {
  return(props.name)
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1> <Header head={course}/> </h1>
      <p>{parts[0]['name']} {parts[0]['exercises']} </p>
      <p>{parts[1]['name']} {parts[1]['exercises']} </p>
      <p>{parts[1].name} {parts[1].exercises} </p>
    </div>
  )
}



export default App
