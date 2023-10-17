// Practice useState

import { useState } from 'react'

interface AuthUser {
    name: string
    email: string
}


 const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)


  const handleLogin = () => {
    setUser({
        name: "Sandra",
        email: "sandra.larsson@chasacademy.se"
    })
  }
  
const handleLogout = () => {
    setUser(null)
}

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name {user?.name}  and email {user?.email} is ...</div>

    </div>
  )
}

export default User