import React, { Component } from 'react';
import './App.css';

App.defaultProps = {
  number: 123,
  string: "Hello I'm ronak.",
  superhero: {
    name: 'Batman',
    power: 100,
    skills: ['skill1', 'skill2'],

  }

}

//Function component
function App({number, string, superhero}) {
  return (
    <div className="App">
      <Parent />
      <p> Number is : {number} </p>
      <p>String is: {string} </p>
      <Superhero propSuperhero={superhero} />
    </div>
  );
}

function Superhero({propSuperhero}) {
    console.log(propSuperhero);
  return(
    <div className="Superhero">
      <p>Superhero : </p>
      <p>Superhero name is: {propSuperhero.name} </p>
      <p>Superhero power is: {propSuperhero.power} </p>
      <p> Superhero skills are: </p>
      <ul>
        {propSuperhero.skills.map((skill, index) => {
          return <li key={index}> {`${index+1}. ${skill}`} </li>;
        }
        )}
      </ul>
    </div>

  );
}

//class component
class Parent extends Component {
    constructor(props) {
    super(props);

    this.state = {
      names: ["Rahul", "Ramesh", "Ronak", "Aditya", "Hemang", "Mangesh", "Rohit", "Arjun", "Akash"]
    };
    this.sortNames = this.sortNames.bind(this);
    this.reverseNames = this.reverseNames.bind(this);
  }

  sortNames() {
    this.setState({names: this.state.names.sort()});
  }

  reverseNames () {
    this.setState({propNames: this.props.propNames.reverse()});
  }

  render() {
    return(
      <div className="Header">
        <p> In parent component</p>
        <p> Names: state </p>
        <Names names={this.state.names} />
        <button onClick={this.sortNames}>Sort names </button>
        <p> Names: props </p>
        <Names names={this.props.propNames} />
        <button onClick={this.reverseNames}>Reverse names </button>
      </div>
    );
  }
}

Parent.defaultProps = {
  propNames: ["Ronak", "Aditya", "Rohit", "Arjun", "Akash"]
}

class Names extends Component {
  render() {
    return(
      <div className="Names">
        <p>In child component</p> 
        <ul>
       { 
       this.props.names.map((name, index) => 
       {
          return <li key={index}> {name} </li>  
        }
        )
        }
        
      </ul>

      </div>
    );
  }
}

export default App;
