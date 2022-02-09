import React, { useState } from "react"
import axios from "axios"

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = () => {
    axios
      .post("http://localhost:1333/api/v1/auth/register", {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      })
      .then(response => {
        console.log(response)
      })
  }

  return (
    <form action="" method="POST" class="container" onsubmit={register}>
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={e => setFirstName(e.target.value)}
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
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={e => setLastName(e.target.value)}
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
                  type="number"
                  placeholder="Phone Number"
                  required
                  onChange={e => setPhoneNumber(e.target.value)}
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
            Register
          </button>
        </div>
      </div>
    </form>
  )
}
export default RegisterForm
