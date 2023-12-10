
const Course = ({ courses }) => {
  const Header = ({ courses }) => {return (<h1> {courses.name} </h1>)}

const Parts = ({ cours }) => {
  return ( cours.map((cour)=> 
    [(<b>{cour.name}</b>), ...cour.parts.map((parts) =>  <> <li key={parts.id}> {parts.name} {parts.exercises}</li> </>), <b>Total of {cour.parts.reduce((total, part) => total + part.exercises, 0)} exercises</b>])
    ) };



const Total = ({ prop }) => {
    const ans = prop.reduce((s,p) => {return s + p.exercises}, 0);
    return(<b> total of {ans} excercises</b>)};

const Content = ({ courses }) => {
    return (<> <>
      <Parts cours={courses} />
         </>
    </>)
  }
  
  return(<>
  <> <Header courses={courses} />   </>
  <> <Content courses={courses} />    </>

    </>)

};


const App = () => {
   const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return (
      <div>
        <Course courses={courses} />
      </div>
    )
  }



export default App