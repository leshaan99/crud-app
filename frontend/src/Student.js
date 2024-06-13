import React, { useEffect } from 'react'
import axios from 'axios'
import './Student.css'

const Student = () => {

    useEffect(() => {
        axios.get('http://localhost:1000/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className="student-container">
      <div className="student-content">
        <button className="add-btn">Add +</button>
        <table className="table">
            <thrad>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thrad>
        </table>
      </div>
    </div>
  )
}

export default Student
