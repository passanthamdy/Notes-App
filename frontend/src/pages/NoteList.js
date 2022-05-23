import React from 'react'
import {useState ,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import ListItem from '../components/ListItem'
import AddNote from '../components/AddNote'
function NoteList() {
  let [notes, setNotes]=useState([])
  let [errMsg]=useState("")
  
  useEffect(() => {
    fetch('/api/notes')
    .then((response)=>{return response.json()})
    .then((data)=>{setNotes(data)})
    .catch((err)=>{console.log('error')})
  }, []);
  let renderNotes = ()=>{
    if(notes.length>0){

      return notes.map((note, index)=>{
        let url='/notes/'+note.id;

          return (
            <div className='notes'>
             
              <div className='note-list'>
                <NavLink to={url}>
                  <ListItem key={note.id} note={note}></ListItem>
                  </NavLink>
              </div>
            </div>
              )
          })
  }else if(errMsg){
      return (<h1 className="alert alert-danger">Check ur Internet Connection</h1>)
  }else{
      return (<h1>Getting Data...</h1>)
  }
}
  return (
    <div>
       <div className='notes-header'>
                <h3>&#9782; Our Notes </h3>
                <p className='notes-count'> {notes.length} </p>
              </div>
          <AddNote></AddNote>
      {renderNotes()}
      </div>
  )
}

export default NoteList