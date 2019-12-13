//Cilj je iamti definisanu metodu unutar klasne pametne komponente i onda je 
//korsititi u skroz drugoj komponennti koja je glupa

import React, { Component } from 'react';

import Verson from './Person/Person';

import './App.css';




class App extends Component {



  //state pocetni---------------------------------------------------------------------------------
state = {

persons: [

{name: 'Max', age: '28'},
{name : "Anes", age: "23"},
{name : "Safet", age: "21"}

],

otherState: 'someValue'
}
//state pocetni ----------------------------------------------------------------------------------


//Funkcija mijenjanjeImena -------------------------------------------------------------------------

mijenjanjeImena = (newName/*, newAge*/) =>  {

this.setState({
  persons: [
  {name: newName, age: "25"},
  {name : "Anes", age: "23"},
  {name : "Muha", age: "23"}
  
  ]

})
}
//Funkcija mijenjanjeImena -------------------------------------------------------------------------






//Funkcija promijenjenoIme ------------------------------------------------------------

promijenjenoIme = (event) =>  {

  this.setState({
    persons: [
    {name:  "Max", age: "25"},
    {name : event.target.value, age: "23"},
    {name : "Muha", age: "23"}
    
    ]
  
  })
  }









//Funkcija promijenjenoIme ------------------------------------------------------------






//console.log('Was Clicked');

  
//<Verson  name = {this.state.persons[0].name= "Fatih"}  age = {this.state.persons[0].age = "0"}/>
//Ovo nije dobar pristup nikako. Izbacuje syntax error

//this.state.persons[0].name= "Fatih"    
//Ovo je malo logicnije ali opet nece raditi
//Izbacuje neki warning u konzoli i ne radi





//Funkcija mijenjanjeImena -------------------------------------------------------------------------




  render(){


//Inline styling ---------------------

const style = {

backgroundColor: 'white',
font: 'inherit',
border: '1px solid blue',
padding: '8px',
cursor: 'pointer'



};
//Inline styling ---------------------


  return (










    <div className="App">
    



<button style = {style} onClick = {this.mijenjanjeImena.bind(this, 'Fetah'/*, '30'*/)}>Switch Name</button>

    




 <div>   

<Verson
  name = {this.state.persons[0].name}
  age = {this.state.persons[0].age}/>




    

<Verson
   name = {this.state.persons[1].name}
   age = {this.state.persons[1].age}
   click = {this.mijenjanjeImena.bind(this, 'Max'/*, '30'*/)}
   changed = {this.promijenjenoIme}>aaaaaaaa </Verson>
   

    


    

<Verson
   name = {this.state.persons[2].name}
   age = {this.state.persons[2].age}/>

    
   </div>
    </div>
  );
  }
}






export default App;
