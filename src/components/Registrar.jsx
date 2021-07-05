import React, { useState } from 'react';
import axios from 'axios';

const Registrar = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const handleSubmit = async(e)=> {
        e.preventDefault()
       
       let data = {
            'username': username, 'first_name': firstName, 'last_name': lastName, 'secret': password
        }
       
        const authObject = {
            "PRIVATE-KEY": "9494371b-10f1-487f-9738-23d495568a03"
        }
    try {
        await axios.post('https://api.chatengine.io/users/', data, { headers: authObject })
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
     
        window.location.reload()
    }
    catch (err) {
     
        console.log(err)
    }
       
    }
    return (
        <div>

            <button type="button" className="button" data-toggle="modal" data-target="#exampleModalLong">
                SIGN IN
            </button>


            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sign in form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                
                                    <input type="text" className="form-control"  placeholder="First Name" value={firstName} onChange={(e)=> setFirstname(e.target.value)} />
                                </div>
                                <div className="form-group">
                    
                                    <input type="text" className="form-control"  placeholder="Last Name" value={lastName} onChange={(e)=>setLastname(e.target.value)} />
                                </div>
                                <div className="form-group">
                            
                                    <input type="password" className="form-control"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registrar;
