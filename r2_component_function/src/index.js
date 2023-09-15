import React from "react"
import ReactDOM from "react-dom/client"
import Person from "./Person";
import Car from "./Car"
// class Person extends React.Component{
//   render(){
//     return (
//       <h2>Hello World</h2>
//     );
//   }
// }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
<div>Car object</div>
root.render(<Person></Person>);
root.render(<Car></Car>);



