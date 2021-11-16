import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 
// import Greet from './components/Greet';
// import Counter from './components/Counter';
// import Message from './components/Message';
// import Welcome from './components/Welcome';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

//import Hello from './components/Hello';

class App extends Component{
  render() {
    return (
    <div className="App">
      <UserGreeting> </UserGreeting>
      {/* <ParentComponent> </ParentComponent> */}
      {/* <EventBind> </EventBind> */}
      {/* <ClassClick> </ClassClick> */}
      {/* <Counter> </Counter> */}
      {/* <FunctionClick> </FunctionClick> */}
      {/* <Message/> */} 
       {/* <Greet name ="Bruce" heroName = "Batman" >
         <p> This is children props </p>
         </Greet> 
       <Greet name ="Clark" heroName = "Superman" >
         <button>  Action </button> 
         </Greet> 
       <Greet name ="Diana" heroName = "Wonder Woman" ></Greet>  */}
      {/* <Welcome name = "Bruce" heroName = "Batman"> 
      </Welcome> /*} 
      {/*< Hello/ >*/ }
    </div> 
  );
    }
}

export default App;
