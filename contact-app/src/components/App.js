import React, { Component } from 'react';
import './App.css';
//import Header from './Header';
//import AddContact from './AddContact';
//import ContactList from './ContactList';

class App extends Component {

constructor(props) {
   super(props);

   this.state = {
       msg: 'Click Me'
   }

   this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    console.log('clicked');
    this.setState({msg: 'I was clicked'})
 }

render() {
   return(
       <div>
           <p> THis is parent.</p>
           <p onClick={this.handleClick}> {this.state.msg} </p>
           <Child name={this.props.name} />
       </div>
   );
}
}

App.defaultProps = {
name: ["ronak", "pranav", "anil"]
};

class Child extends Component {
render(){
return(
 <div>
   <h2> This is child component</h2> 
   <ul>
       {
       this.props.name.map( (item, i) => {
           return <li>{item}</li> 
                  })
       }
   </ul>
 </div>
);
}
}


export default App;
