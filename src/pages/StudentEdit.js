import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const StudentEdit = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [inputErrorList,setInputErrorList] =useState({})
    const [student ,setStudent] = useState({})

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://127.0.0.1:8000/api/student/${id}/edit`).then(res =>{

        setStudent(res.data);
        console.log(res.data)
        setLoading(false)
        
        

    }).catch(error => {
               
        console.log(error)
    });

    },[id])

    const handelInput=(e)=>{
        e.persist();
        setStudent({...student,[e.target.name]: e.target.value})
    }
    const saveStudent = (e)=>{
        e.preventDefault();
       setLoading(true);
        const data ={
            name:student.name,
            email:student.email,
            phone:student.phone,
            course:student.course,

        }

        axios.put(`http://127.0.0.1:8000/api/student/${student.id}`, data)
            .then(response => {
                
                        setLoading(false)  
                        navigate("/student")              
            })
            .catch(error => {
               
                if(error.response){
                    if(error.response.status === 422){
                        setInputErrorList(error.response.data.errors)
                        setLoading(false)
                       
                    }

                    if(error.response.status === 500){
                        setInputErrorList(error.response.data)
                        setLoading(false)
                    }
                }
            });


    }

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
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>

                    <form onSubmit={saveStudent}>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input type="text" name="name" value={student.name} onChange={handelInput} className="form-control" id="name" placeholder="Enter name"/>
                            <span className="text-danger">{inputErrorList.name}</span>
                        </div>
                        
                        <div className="mb-3">
                            <label  className="form-label">Course</label>
                            <input type="text" name="course" value={student.course}  onChange={handelInput}  className="form-control" id="course" placeholder="Enter course"/>
                            <span className="text-danger">{inputErrorList.course}</span>

                        </div>
                        
                        <div className="mb-3">
                            <label  className="form-label">Phone</label>
                            <input type="tel" name="phone" value={student.phone}   onChange={handelInput} className="form-control" id="phone" placeholder="Enter phone"/>
                            <span className="text-danger">{inputErrorList.phone}</span>

                        </div>
                        
                        <div className="mb-3">
                            <label  className="form-label">Email</label>
                            <input type="text" name="email" value={student.email}   onChange={handelInput} className="form-control" id="email" placeholder="Enter email"/>
                            <span className="text-danger">{inputErrorList.email}</span>

                        </div>
                        
                        <button type="submit" className="btn btn-primary">Update student</button>
                        
                    </form>
                </div>
        </div>
    </div>
  )
}

export default StudentEdit
