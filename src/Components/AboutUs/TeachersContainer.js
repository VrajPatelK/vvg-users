import React from 'react'
import "./teachers.css";
import Teachers from './Teachers';
const TeachersContainer = () => {
  return (
    <div class="teacher-container" style={{
      marginTop: "5rem",
      marginBottom: "5rem"
    }}>
        <Teachers direction="odd" />
        <Teachers direction="even" />
        <Teachers direction="odd" />
    </div>
  )
}

export default TeachersContainer