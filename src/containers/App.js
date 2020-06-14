import React, {Component} from 'react';
import './App.css';
import classes from './App.css';
import Udit from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

//import './Person/Person.css';
/*
let StyledButton = styled.button`

background-color : ${props=> props.alt?'red':'green'};
font:inherit;
color:white;
border:1px solid blue;
padding:8px;
cursor:pointer;

&: hover{
  background-color :  ${props=> props.alt?'pink':'lightgreen'};
  color:black;
}

`;

*/

// Class Based Components
class App extends Component{
constructor (props){
  super(props);
  console.log('[App.js] constructor');
  // you can also initialize the state here 
  /*this.state{

  }*/
}

state = {
  persons : [
    {id:'#1',name:'Udit',age:21},
    {id:'#2',name:'Udit',age:23},
    {id:'#3',name:'Goboom',age:18}
  ],
  otherState : 'Some other value' ,
  showPersons : false,
  showCockpit: true,
  changeCounter: 0,
  authenticated:false
  
};

static getDerivedStateFromProps(props,state){
  console.log('[App.js] getDerivedStateFromProps',props);
  return state;
}

/*componentWillMount(){
  console.log('[App.js] componentWillMount');
}*/ 


componentDidMount(){
console.log('[App.js] component Mount');

}

shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

deletePersonsHandler = (personIndex) =>{
  const persons = this.state.persons;
  persons.splice(personIndex,1);
  this.setState({persons:persons});


}

nameChangeHandler = (event,id) =>{
  // finding the index of the person according to the input text
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id===id;
  });
// copy of that person 
  const person = {...this.state.persons[personIndex]};
//altering the name of that person acc to the input by user
  person.name = event.target.value;
  //update the array at personIndex position 
  const persons = [...this.state.persons];
  persons[personIndex]=person;

  
 this.setState((prevState,props)=>{

return{
  persons:persons,
  changeCounter:prevState.changeCounter+1
}

 });

}

toggleNameHandler = () =>{
 
// making a duplicate state

  // logic for altering the showperson boolean value
  const doesShow= this.state.showPersons;

  this.setState({showPersons : ! doesShow});
}

loginHandler = () =>{
  this.setState({authenticated:true});

}


render(){

  // inline styling 

  console.log('[App.js] render');
  let persons =null;
 
if (this.state.showPersons){
 
  persons=
          <Udit 
           persons ={this.state.persons}
           click={this.deletePersonsHandler}
           changed={this.nameChangeHandler}
           isAuthenticated={this.state.authenticated}
           />;

}


return (
 

      <Aux>
        <button onClick={() => {this.setState({showCockpit:false})}}
        >Remove Cockpit</button>

        <AuthContext.Provider value={{authenticated:this.state.authenticated, 
        login : this.loginHandler}}>
        {this.state.showCockpit?
        (
        <Cockpit 
        title = {this.props.appTitle}
        personsLength={this.state.persons.length} 
        showPersons={this.state.showPersons}
        click={this.toggleNameHandler}
        login={this.loginHandler}
        
        />) :null}
        
        {persons}

        </AuthContext.Provider>
      </Aux>
    
    );
  }
}

export default withClass(App,classes.App);

//import React, {useState} from 'react';
// Using functional components 
/*
const app = props =>{

  

const[personsState, setPersonsState] = useState(
  {
    Persons : [
      {name:'Udit',age:21},
      {name:'Udit',age:23},
      {name:'Goboom',age:18}
    ],
 
  }
  
);

const [otherState,setotherState] = useState('some other value');
console.log(personsState,otherState);

const switchNameHandler = () =>{
  setPersonsState(
    {
     Persons : [
       {name:'Udit ',age:25},
       {name:'Uditi',age:23},
       {name:'Govil',age:18}
     ],
     otherState : personsState.otherState
    });
} ;

   return (
      <div className="App">
        <h1> General Aptitude test in Engineering(Gate) </h1>
        <p>Udit likes me !</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Udit name={personsState.Persons[0].name} age={personsState.Persons[0].age}/>
        <Udit name={personsState.Persons[1].name} age= {personsState.Persons[1].age} >My Hobbies:Playing Chess</Udit>
        <Udit name={personsState.Persons[2].name} age={personsState.Persons[2].age}/>
      </div>


      { // curly brackets to make it  a js code 
       // ternary condition to show the content or hide it 
       this.state.showPersons === true ?
        <div>
            <Udit 
            name={this.state.Persons[0].name} 
            age={this.state.Persons[0].age}/>
            <Udit 
            name={this.state.Persons[1].name} 
            age= {this.state.Persons[1].age}
            
            changed={this.nameChangeHandler}>My Hobbies:Playing Chess</Udit>
            <Udit
            name={this.state.Persons[2].name} 
            age={this.state.Persons[2].age}  click={this.switchNameHandler.bind(this,'Uk!!')}/>
         </div> : null
        }
    );


}

*/
