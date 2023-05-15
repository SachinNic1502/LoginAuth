import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

const navigate=useNavigate();
let username=sessionStorage.getItem('username');
let name=sessionStorage.getItem('name')
    useEffect(()=>{
        
        if(username===''||username===null){
            navigate('/login')
        }
    })
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <p className="nav-link active">{name}</p>
                            </li>
                        </ul>
                        <span className="navbar-text me-5">
                        <Link className="nav-link" to={'/login'}>Logout</Link>
                        </span>
                    </div>
                </div>
            </nav>
            <h1 className='App'>Welcome to Home page</h1>
        </div>
    )
}

export default Home