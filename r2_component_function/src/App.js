// #1. Example Function
// function App() {
//   return(
//     <div className ="App">
//       <HelloWorld></HelloWorld>
//       <HelloWorld/>
//       <HelloWorld></HelloWorld>
//     </div>
//   );
// }
// function HelloWorld(){
//   return (
//     <div>
//       <h1>Hello World !!!</h1>
//     </div>
//   );
// }
// export default App;

// #2. Example class
// import React from 'react'

// class App extends React.Component{
//   render(){
//     return (
//       <h1>Hello World</h1>
//     );
//   }
// }
// export default App;

// #3. Example class

import React from 'react'
class Person extends React.Component{

  return() {
    <h2>Hello Everyone.</h2>
  }
}
class App extends React.Component(){
  render(){
    return(<Person></Person>);
  };
}
export default App;
