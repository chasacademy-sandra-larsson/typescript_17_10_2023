// Practice useState

import { useState } from 'react'

interface AuthUser {
    name: string
    email: string
}


 const User = () => {
  const [user, setUser] = useState()


  const handleLogin = () => {
    setUser({
        name: "Sandra",
        email: "Sandra-larsson@gmail.com"
    })
  }
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name  and email is ...</div>

    </div>
  )
}

export default User