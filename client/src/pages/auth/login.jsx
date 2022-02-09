import * as React from "react"

import PageLayout from "../../layouts/PageLayout"
import LoginForm from "../../components/forms/auth/LoginForm"

const Login = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p className="pt-6 pb-6 has-text-centered is-size-3">Sign In To Your Account</p>
        <div className="columns">
        <div className="column is-half">
          </div>
          <div className="column is-half">
            <LoginForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default Login