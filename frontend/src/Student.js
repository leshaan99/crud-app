import React, { useEffect } from 'react'
import axios from 'axios'

function Student() {

    useEffect(() => {
        axios.get('http://localhost:1000/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className='d-felx vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 gb-white rounded'>
        <button className='btn btn-success'>Add +</button>
        <table className='table'>
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
