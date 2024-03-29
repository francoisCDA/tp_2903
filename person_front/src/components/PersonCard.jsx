import React from 'react'

const PersonCard = ({person}) => {
  return (
    <tr>
      <td>{person.first}</td>
      <td>{person.last}</td>
      <td>{person.birthday}</td>
      
    </tr>
  )
}

export default PersonCard
