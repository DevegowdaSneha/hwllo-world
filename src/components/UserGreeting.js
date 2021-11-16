import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             isLoggedIn: true 
         }
     }
     
    render() {

       return  this.state.isLoggedIn && <div> Welcome Sneh </div>
        
        // return this.state.isLoggedIn ? (
        //         <div> Welcome Sneha!  </div>
        //     ) :  (
        //     <div> Welcome Guest! </div> 
    }
    //   let message
    //     if (this.state.isLoggedIn){
    //         message = <div> Welcome Sneha!! </div>
    //     } else {
    //         message = <div> Welcome Guest! </div>
    //     }
    //     if(this.state.isLoggedIn){
    //         return (
    //             <p> Welcome Sneha! </p> 
    //         )
    //     }
    //     else {
         
}

export default UserGreeting
