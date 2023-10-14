
const Header  = (props) => {
  return (
    <div>
      <h1> {props.course} </h1> 
    </div>
  )
};

const Content = (props) => {
  return (
    <> 
      <> {props.name} </>
    </>
  
  )
};

const Total = (props) => {
  return (
    <>
       <>{props.totals} </>  
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
      <p>

      <Content name= {part1} />
      <Total  totals={exercises1}/>
      </p>

      <p>
      <Content name= {part2} />
      <Total  totals={exercises2}/>
      </p>

      <p>
      <Content name= {part3} />
      <Total  totals={exercises3}/>
      </p>

      <p>
      <Content name= {part4} />
      <Total  totals={exercises4}/>
      </p>

    </div>
  )
}

export default App