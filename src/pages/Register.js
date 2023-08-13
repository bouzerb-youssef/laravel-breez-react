import React, { useState } from 'react'


import useAuthContext from '../context/AuthContext';

export default function Register() {
    const [name ,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [password_confirmation ,setConfimationPassword] = useState("");
   
    const { register, errors} = useAuthContext();
    const handelRegister = async ( event)=>{
        event.preventDefault();

    register({name ,email ,password ,password_confirmation});
     

     
         
     }
  return (
    
       <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">
                            <form onSubmit={handelRegister}>
                                <h2 className="fw-bold mb-2 text-uppercase">register</h2>

                                <div className="form-outline form-white mb-4">
                                    <input type="name"  value={name} onChange={(e) => setName(e.target.value)}id="typeEmailX" className="form-control form-control-lg" />
                                    <label className="form-label" for="typeEmailX">Name</label>
                                    {errors.name && errors.name.length > 0 && (
                                    <ul>
                                      {errors.name.map((error, index) => (
                                        <li key={index}>
                                          <span>{error}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="typeEmailX" className="form-control form-control-lg" />
                                    <label className="form-label" for="typeEmailX">Email</label>
                                    {errors.email && errors.email.length > 0 && (
                                    <ul>
                                      {errors.email.map((error, index) => (
                                        <li key={index}>
                                          <span>{error}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}id="typePasswordX" className="form-control form-control-lg" />
                                    <label className="form-label" for="typePasswordX">Password</label>
                                    {errors.password && errors.password.length > 0 && (
                                    <ul>
                                      {errors.password.map((error, index) => (
                                        <li key={index}>
                                          <span>{error}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input type="password_confirmation"  value={password_confirmation} onChange={(e) => setConfimationPassword(e.target.value)} id="typePasswordX" className="form-control form-control-lg" />
                                    <label className="form-label" for="typePasswordX">confirm Password</label>
                                    {errors.password_confirmation && errors.password_confirmation.length > 0 && (
                                    <ul>
                                      {errors.password_confirmation.map((error, index) => (
                                        <li key={index}>
                                          <span>{error}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>

                                

                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                            </form>
                        </div>

                        <div>
                        
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
   
  )
}
