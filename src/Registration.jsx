import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [id,setid]=useState("");
    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [country,setcountry]=useState("");
    const [address,setaddress]=useState("");
    const [gender,setgender]=useState("");
    const navigate=useNavigate();

const isValidate=()=>{
    let isProcede=true;
    let errorM="Please Fill First : "
    if(id==="" || id===null){
        isProcede=false;
        errorM += " User Name";
    }
    if(pass==="" || pass===null){
        isProcede=false;
        errorM += " Password";
    }
    if(uname==="" || uname===null){
        isProcede=false;
        errorM += " Full Name";
    }
    if(phone==="" || phone===null){
        isProcede=false;
        errorM += " Phone Number";
    }
    if(email==="" || email===null){
        isProcede=false;
        errorM += " Email";
    }
    if(country==="" || country===null){
        isProcede=false;
        errorM += " Country";
    }
    if(address==="" || address===null){
        isProcede=false;
        errorM += " Address";
    }
    if(gender==="" || gender===null){
        isProcede=false;
        errorM += " Gender";
    }
    
    if(!isProcede){
        toast.warning(errorM);
    }
    return isProcede;

}


    const handleSubmit =(e)=>{
        e.preventDefault();
        let legobj={id,uname,pass,email,phone,country,address,gender}
        if(isValidate()){
        // console.warn(legobj);
        fetch("http://localhost:3001/user",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(legobj)
        }).then((reas)=>{
            toast.success(" Registration Success")
            navigate('/login')
        }).catch((error)=>{
            toast.error("Somethig Faild "+error.message)
        })
    }
    }
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="offset-lg-3 col-lg-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            Registration
                        </div>
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <div className="row g-3 align-items-center mt-2">
                                    <div className="col-4">
                                        <label className="col-form-label">User Name <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text"  value={id} onChange={e=>setid(e.target.value)} id="inputPassword6" className="form-control" />
                                    </div>

                                </div>

                                <div className="row g-3 align-items-center mt-2">
                                    <div className="col-4">
                                        <label className="col-form-label">Password <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} id="inputPassword6" className="form-control" />
                                    </div>

                                </div>

                                <div className="row g-3 align-items-center mt-2">
                                    <div className="col-4">
                                        <label className="col-form-label">Full Name <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" id="inputPassword6" value={uname} onChange={e=>setUname(e.target.value)} className="form-control" />
                                    </div>

                                </div>

                                <div className="row g-3 align-items-center mt-2">
                                    <div className="col-4">
                                        <label className="col-form-label">Email <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="email" id="inputPassword6" value={email} onChange={e=>setemail(e.target.value)} className="form-control" />
                                    </div>

                                </div>

                                <div className="row g-3 align-items-center mt-2">
                                    <div className="col-4">
                                        <label className="col-form-label">Phone No. <span className='error'>*</span></label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" id="inputPassword6" value={phone} onChange={e=>setphone(e.target.value)} className="form-control" />
                                    </div>

                                    <div className="row g-3 align-items-center mt-2">
                                        <div className="col-4">
                                            <label className="col-form-label">Country <span className='error'>*</span></label>
                                        </div>
                                        <div className="col-6">
                                            {/* <input type="email" id="inputPassword6" className="form-control"  /> */}
                                            <select className="form-control" value={country} onChange={e=>setcountry(e.target.value)}>
                                                <option>Select</option>
                                                <option value='India'>India</option>
                                                <option value='us'>United States</option>
                                                <option value='Australia'>Australia</option>
                                                <option value='Canada'>Canada</option>
                                                <option value='Germany'>Germany</option>
                                                <option value='Belgium'>Belgium</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="row g-3 align-items-center mt-2">
                                        <div className="col-4">
                                            <label className="col-form-label">Address <span className='error'>*</span></label>
                                        </div>
                                        <div className="col-6">
                                            <textarea value={address} onChange={e=>setaddress(e.target.value)} className="form-control" />
                                        </div>

                                    </div>
                                    <div className="row g-3 align-items-center mt-2 mb-5">
                                        <div className="col-4">
                                            <label className="col-form-label">Gender <span className='error'>*</span></label>
                                        </div>
                                        <div className="col-6 ">
                                            {/* <input type="email" id="inputPassword6" className="form-control"  /> */}
                                            <select className="form-control" value={gender} onChange={e=>setgender(e.target.value)}>
                                                <option>Select</option>
                                                <option value='male'>Male</option>
                                                <option value='female'>FeMale</option>

                                            </select>
                                        </div>

                                    </div>

                                </div>

                                <div className="card-footer text-body-secondary">
                                <button type="submit" className="btn btn-primary mt-3 me-5">Register</button>
                                
                                <Link className='btn btn-danger mt-3 me-5' to={'/login'}>Back</Link>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration