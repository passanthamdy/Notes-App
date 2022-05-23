import React from 'react'
import {ReactComponent as Add} from '../assets/add.svg'
import { NavLink } from "react-router-dom";


function AddNote() {
  return (
    <div>
      <NavLink to={'/notes/add'} className="floating-button">
          <Add></Add>
      </NavLink>
    </div>
  )
}

export default AddNote
