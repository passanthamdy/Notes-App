import React from 'react'

function ListItem({note}) {
  let getTime=()=>{
    return new Date(note.updated).toLocaleDateString()
  }
  return (
    <div className='notes-list-item'>
        <h3>{note.name}</h3>
        <p> <span> {getTime()} </span> </p>
    </div>
  )
}

export default ListItem