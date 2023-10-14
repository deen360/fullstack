
const Header  = (props) => {
  return (
    <div>
      <h1> {props.course} </h1> 
    </div>
  )
};

const Part = (props) => {
  return (
    <> 
      <p> {props.name} {props.totals} </p>
    </>
  
  )
};



const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const part4 = "Number of exercises" 
  const exercises4 = exercises1 + exercises2 + exercises3;


  
  return (
    <div>
      <Header course={course} />

      <div>
      <Part name={part1} totals={exercises1} />
      <Part name={part2} totals={exercises2} />
      <Part name={part3} totals={exercises3} />
      <Part name={part4} totals={exercises4} />

      </div>

    </div>
  )
}

export default App