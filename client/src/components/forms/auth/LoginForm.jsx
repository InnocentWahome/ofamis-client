import React, { useState } from "react"
import axios from "axios"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log("Login Page")
  const login = () => {
    axios
      .post("http://localhost:1333/api/v1/auth/register", {
        email: email,
        password: password,
      })
      
      .then(response => {
        console.log(response)
        if(response.status === 200){
          localStorage.setItem('token', response.data.token);
        } else {
          console.log("token not set")
        }
      })
  }
  return (
    <form action="" method="POST" class="container" onSubmit={login}>
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="password"
                  placeholder="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
