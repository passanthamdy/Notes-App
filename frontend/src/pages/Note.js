import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
function Note() {
  let { id } = useParams();
  let [note, setNote] = useState({});
  useEffect(() => {
    if(id !== 'add'){
    fetch(`/api/notes/${id}`)
      .then((response) => {return response.json();})
      .then((data) => { setNote(data)  })
      .catch((err) => { console.log("error");});
 } }, [id]);
console.log(id)
 
  let renderNoteObj = () => {
    
      return (
        <div className="note">
            <div className="note-header">
                <h3>
                <NavLink to={'/'}>
                <ArrowLeft onClick={handleSubmit}/>
                </NavLink>
                 </h3>
                 {id !== 'add' ? (
                   <NavLink to={'/'}>
                    <button onClick={deleteNote}>Delete</button>
                    </NavLink>
                ) : (
                  <NavLink to={'/'}>
                    <button onClick={handleSubmit} >Done</button>
                    </NavLink>
                )}

                
            </div>

            <div>
                <input placeholder="Note title" defaultValue={note?.name} onChange={(e) => {
                        setNote({...note,'name': e.target.value})
                    }}
                    type="text"></input>
                <textarea onChange={(e)=>{setNote({...note,'body': e.target.value})}}
                 defaultValue={note?.body}>

                </textarea>
               
            </div>

         
        </div>
      );
    
  };


  let updateNote = async () => {
    fetch(`/api/notes/${id}/update`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).catch((err)=>{console.log('error')})
    console.log("body : ", note.body)
}

let createNote = async () => {
fetch(`/api/notes/create/`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
}).catch((err)=>{console.log('error')})
console.log("body : ", note.body)
}
let deleteNote = async () => {
    console.log("note before update", note.body)
  fetch(`/api/notes/${id}/delete`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
  }).catch((err)=>{console.log('error')})
  console.log("body : ", note.body)
}
  let handleSubmit =()=>
  {
     if(id !== 'add'){
      updateNote()
   }else if(id ==='add' && note.body) {
    createNote()
   }
  }
  return <div> {renderNoteObj()}</div>;
}

export default Note;
