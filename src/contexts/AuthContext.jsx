import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('site-authed') === 'true'
  )

  const login = () => {
    sessionStorage.setItem('site-authed', 'true')
    setAuthed(true)
  }

  return (
    <AuthContext.Provider value={{ authed, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
