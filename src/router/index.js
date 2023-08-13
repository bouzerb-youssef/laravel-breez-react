import {Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Student from '../pages/Student';
import StudentCreate from '../pages/StudentCreate';
import StudentEdit from '../pages/StudentEdit';
import Register from '../pages/Register';
import Login from '../pages/Login';



function MyRouter(){

    return( 
        <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact-us" element={<Contact/>} />
                    <Route path="/student" element={<Student/>} />
                    <Route path="/student-create" element={<StudentCreate/>} />
                    <Route path="/student/:id/edit" element={<StudentEdit/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />

        </Routes>
    
    )

        

}


export default MyRouter;