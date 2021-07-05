import React, { useState } from 'react';
import axios from 'axios';
import Registrar from './Registrar';


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit =async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': '38739f7a-c321-46cc-a261-3a7b05996085', 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
         }
        catch (err) {
            setError('Wrong Credentials')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
            <h1 className="title"> Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                        </button>
                        <Registrar/>
                    </div>
                    <h2 className="error"> {error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
