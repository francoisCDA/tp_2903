import React, { useState } from 'react';
import personService from '../services/personService';

function PersonForm() {
  const [personInfo, setPersonInfo] = useState({
    first:'',
    last:'',
    dob:''
  });
  
const handleChange = (e) => {
    const { name, value} = e.target;
//    console.log(e.target);
//    console.log(name + " = " + value)
    setPersonInfo({...personInfo,[name]:value });
}

  const handleSubmit = (event) => {
    event.preventDefault();

    personService.postPerson(personInfo.first,personInfo.last,personInfo.birthday);

    setPersonInfo({
        first:'',
        last:'',
        birthday:''
      })    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Prénom:</label>
        <input
          type="text"
          id="firstName"
          name='first'
          value={personInfo.first}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Nom:</label>
        <input
          type="text"
          id="lastName"
          name='last'
          value={personInfo.last}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dob">Date de naissance:</label>
        <input
          type="text"
          id="dob"
          name='dob'
          value={personInfo.dob}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default PersonForm;