import React from 'react'

const objData=[
  {
    "_id": "62852c3717ef7cc8eb3e2a0b",
    "index": 0,
    "age": 38,
    "name": "Mattie Mitchell",
    "month": "month ",
    "batch": "batch ",
    "course":" course "
  },
  {
    "_id": "62852c37cd98108a5a3728ea",
    "index": 1,
    "age": 27,
    "name": "Renee Cote",
    "month": "March",
    "batch":  " batch ",
    "course": " course"
  },
  {
    "_id": "62852c37604fda115b44cdcf",
    "index": 2,
    "age": 22,
    "name": "Adriana Mcdaniel",
    "month": "March",
    "batch": "batche",
    "course":"course"
  },
  {
    "_id": "62852c37107b148c45c68b7e",
    "index": 3,
    "age": 39,
    "name": "Nina Rivera",
    "month": "March",
    "batch": "batch ",
    "course":"course"
  },  {
    "_id": "62852c371e7eb6055250086e",
    "index": 4,
    "age": 32,
    "name": "Richmond Riley",
    "month": "March",
    "batch": " batch",
    "course":" course"
  }
]
function Students() {
  return (
      <div>
        <div className="d-flex p-2 spc">
        <h2>Students Details</h2>
        <button className='btn btn-info ms-5'>Add new Student</button>
        </div>


      <table className="table table-primary">
          <thead>
            <tr>
              <th>Name   </th>
              <th>Age    </th>
              <th>Course </th>
              <th>Batch  </th>
              <th>Change </th>
            </tr>
             
          </thead>

         <tbody>
         {
            objData.map((n)=>{
              console.log(n);
                return <tr>
                <td>{n.name}</td>
                <td>{n.age}</td>
                <td>{n.course}</td>
                <td>{n.batch}</td>
                <td> <button className="btn btn-danger"    >Edit</button></td>
                </tr>
            })
          }
           </tbody>
      </table>
      </div>
  )
}

export default Students
