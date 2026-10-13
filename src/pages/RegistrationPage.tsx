import React, { useState } from 'react'
import { registerUser } from '../services/auth'
import style from './RegistrationPage.module.css'
import { useNavigate } from 'react-router-dom'


const RegistrationPage = () => {
    const navigate = useNavigate()

    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password1, setPassword1] = React.useState("")
    const [password2, setPassword2] = React.useState("")

    const [error, setError] = useState<string[]>([])

  const sendRegistrationForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(password1 !== password2){
        setError(prev => [...prev, "Passwords do not match"])
    }
    if(password1.length < 8){
        setError(prev => [...prev, "Password must be at least 8 characters long"])
    }
    if(!username){
        setError(prev => [...prev, "Username is required"])
    }
    if(!email){
        setError(prev => [...prev, "Email is required"])
    }
    if(error.length === 0){
        registerUser(username, password1, email).then(response => {
            navigate("/login")
        }).catch(error => {
            console.log(error)
        })
    }
  }   

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={sendRegistrationForm} className={style.registerForm}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password1">Password:</label>
            <input type="password" id="password1" name="password" value={password1} onChange={(e) => setPassword1(e.target.value)}/>

            <label htmlFor="password2">Confirm Password:</label>
            <input type="password" id="password2" name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)}/>

            {error.map(e => <p style={{ color: 'red' }}>{e}</p>)}

            <input type="submit" value="Register"/>
        </form>
    </div>
  )
}

export default RegistrationPage