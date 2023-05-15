import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const nevigate=useNavigate()

    const processLogin = (e) => {
        e.preventDefault();
        if (validation()) {
            // console.warn("proceed")
            fetch("http://localhost:3001/user/" + username).then((res) => {
                return res.json()
            }).then((res1) => {
                console.warn(res1);
                if (Object.keys(res1).length === 0) {
                    toast.error("User Not Found");
                } else {
                    if (res1.pass === password) {
                        // console.warn(res1.password);
                        toast.success("User Login SucessFully : " + res1.uname)
                        sessionStorage.setItem('username',username)
                        sessionStorage.setItem('name',res1.uname)

                        nevigate('/');
                    } else {
                        toast.error("Please Enter Valid Password" );
                    }
                }


            }).catch((err) => {
                toast.error("Faild" + err.message);
            })
        }
    }
    const validation = () => {
        let result = true;

        if (username === "" || username === null) {
            result = false
            toast.warning("Please Fill First User Name");;
        }
        if (password === "" || password === null) {
            result = false
            toast.warning("Please Fill First Password");;
        }

        return result;
    }
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="offset-lg-3 col-lg-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">

                            <form onSubmit={processLogin}>

                                <div className="row g-3 align-items-center mt-2">
                                    <div className="col-4">
                                        <label className="col-form-label">User Name <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} id="inputPassword6" className="form-control" />
                                    </div>

                                </div>

                                <div className="row g-3 align-items-center mt-2 mb-5">
                                    <div className="col-4">
                                        <label className="col-form-label">Password <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="inputPassword6" className="form-control" />
                                    </div>

                                </div>

                                <div className="card-footer text-body-secondary">
                                    <button type="submit" className="btn btn-primary mt-3 me-5">Login</button>
                                    <Link className='btn btn-success mt-3 me-5' to={'/register'}>New User</Link>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login