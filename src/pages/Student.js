import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Student = () => {
    const [loading ,setLoading] =useState(true);

    const [students ,setStudents] =useState([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/student`)
            .then(res => {
                setStudents(res.data.date);
                console.log(res.data.date);
                setLoading(false);
            })
            .catch(error => {
                // Handle the error here
                console.error("Error fetching data:", error);
                setLoading(false); // Assuming you also want to set loading to false on error
            });
    }, []);

    const  deletStudent =(e ,id)=>{
        e.preventDefault();
        const thisCliked= e.currentTarget;
        thisCliked.innerText ="Deleting....";

        axios.delete(`http://127.0.0.1:8000/api/student/${id}`)
            .then(response => {
                //alert(response.data.message);
                thisCliked.closest("tr").remove();
                
                                      
            })
            
        
    }

    var StudentsDetails ="";
    StudentsDetails=  students.map((student,index)=>{
        return(
            <tr key={index}>
                <td>{student.id}</td>
                <td >{student.name}</td>
                <td >{student.course}</td>
                <td >{student.email}</td>
                <td >{student.phone}</td>
                <td >
                <Link className="btn btn-success" to={`/student/${student.id}/edit`} role="button">edit</Link>

                </td>
                <td ><button type="button" className="btn btn-danger" onClick={(e)=>deletStudent(e,student.id)}>delete</button></td>

            </tr>

    )}) 

   
    if(loading){
        return(
            <div>
               <Loading/>
            </div>
        )
    }
  return (
    <div>
      <div className='container'>
        <div className="card">
            <div className="card-body">
                <h1>student table</h1>
                <div className="d-flex justify-content-end">
                <Link className="btn btn-success" to="/student-create" role="button">add student</Link>

                </div>
            </div>
        </div>
        <br/><br/>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Cource</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

            </tr>
        </thead>
        <tbody>  
            {students.length > 0 ? StudentsDetails : <tr style={{ textAlign: "center" }}><h1>There is no data available</h1></tr>}
        </tbody>
        </table>
      </div>


    </div>
  )
}

export default Student
