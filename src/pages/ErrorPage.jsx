import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError() 

  return (
    <div>
        <p>Opps! An Error Occurred.</p>
      <h1>{error && error.data}</h1>
      <NavLink to='/'><button>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorPage
