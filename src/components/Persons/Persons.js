import React,{PureComponent} from 'react';

import Udit from './Person/Person';


class Persons extends PureComponent {

    // static getDerivedStateFromProps(props,state){
    // console.log('[Persons.js]  getDerivedStateFromProps ');
    // return state;
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js]  shouldComponentUpdate ');

    //     if (nextProps.persons !== this.props.persons
    //         || nextProps.click!== this.props.click||
    //         nextProps.changed !== this.props.changed
    //         ){
    //         return true;
    //     }
    // else{
    //     return false;
    // }

    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js]  getSnapshotBeforeUpdate ');   
        return {message: 'Snapshot !'};

    }

    // componentWillMount(){
    //     console.log('[Persons.js]  componentWillMount ');
    // }


    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js]  componentDidUpdate ');
        console.log(snapshot);
    }

    
    render(){
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person,index) =>{
            return (
            <Udit 
             name ={person.name}
             age={person.age}
             key={person.id}
             changed={(event)=>this.props.changed(event,person.id)}
             click={() => this.props.click(index)} 
             
            />
            );
        
            });
        
    }
    
   
};

export default Persons;
