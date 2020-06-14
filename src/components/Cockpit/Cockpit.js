import React, {useEffect,useRef,useContext} from 'react';
import classes from './Cockpit.css';
import Authcontext from '../../context/auth-context';
const cockpit = (props) => {
const authContext = useContext(Authcontext);

console.log(authContext.authenticated);


  // 1.initialization useRef
  const toggleBtnRef = useRef(null); 
    useEffect  (()=> {
      console.log('[Cockpit.js] useEffect');
      //HTTP request...
    //  const timer = setTimeout(()=>{

    //     alert('Saved data to cloud !');
    //   },1000);

    toggleBtnRef.current.click();

      return () => {
        clearTimeout();
        console.log('[Cockpit.js] Clean up work in useEffect');
      }
    } ,[]) ;

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] 2nd  Clean up work in useEffect ');
      };

    });

    let btnClass='';
    let assignedClasses =[];
    if (props.showPersons){
        btnClass = classes.Red;

    }
    
    
    if (props.personsLength <=2){
      assignedClasses.push(classes.red);
    }
    
    if (props.personsLength<=1){
      assignedClasses.push(classes.bold);
    }
    

 
    
    return(
    // 3.making reference in button
    <div className={classes.Cockpit}>
        <h1> {props.title} </h1>
        <p className={assignedClasses.join(' ')}>Udit likes me !</p>
        <button ref={toggleBtnRef} className ={btnClass} onClick={props.click}>Toggle Content </button>
        <button onClick={authContext.login}>Log in Buton !
        </button>
        </div>
    );
};

export default React.memo(cockpit);