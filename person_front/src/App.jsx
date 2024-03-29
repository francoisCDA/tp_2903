import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonCard from './components/PersonCard'
import personService from './services/personService'

import './App.css'

function App() {
  
const [people,setPeople] = useState({});

  useEffect( () => {

    setPeople(getPersons());
    
  }, []);

  const getPersons = async () => {
    try {
      const persons = await personService.getAllPerson()  
      console.log(persons);
      setPeople(persons);
      
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <>
      <PersonForm />

      <div>
        <h4>liste des personnes</h4>
      
        <p>
          <button onClick={getPersons}>refresh</button>
          {JSON.stringify(people)}
        </p>
      </div>

    </>
  )
}



export default App
