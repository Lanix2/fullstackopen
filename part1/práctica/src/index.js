import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

//array de componentes
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    
  ]
}

// const App = () => {
// const name = "David"
// const age = 19

//   return(
//     <div>
//         <h1>Greetings</h1>
//         <Hello name="Maya" age={26 + 10}/>
//         <Hello name={name} age = {age} />
        
//     </div>
//   )
// }

ReactDOM.render( <App />, document.querySelector('#root'))

//CON JSX
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }


//ReactDOM.render( React.createElement(App, null), document.querySelector('#root'))
