import React, { useState } from 'react'
import { loginUser } from '../services/auth'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from './LoginPage.module.css'

const LoginPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState<string[]>([])

  const sendLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError([])

    if(!username){
        setError(prev => [...prev, "Username is required"])
    }
    if(!password){
        setError(prev =>[...prev, "Password is required"])
    }
    if(error.length === 0){
        loginUser(username, password)
            .then(response => {
                navigate("/")
            }).catch(error => {
                console.error(error)
            })
    }
  }

  return (
        <main className={style.page}>
            <section className={style.panel}>
                <header className={style.heading}>
                    <h1>Login</h1>
                    <p>Sign in to continue to your farm.</p>
                </header>

                <form onSubmit={sendLoginForm} className={style.form}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {error.map((message, index) => (
                        <p className={style.error} key={`${message}-${index}`}>{message}</p>
                    ))}

                    <input type="submit" value="Login" />
                </form>

                <p className={style.registerPrompt}>
                    New here? <Link to="/register">Create an account</Link>
                </p>
            </section>
        </main>
  )
}

export default LoginPage