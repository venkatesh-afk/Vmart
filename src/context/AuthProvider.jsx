import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const users = [
    { email: "user1@example.com", password: "pass1" },
    { email: "user2@example.com", password: "pass2" },
    { email: "user3@example.com", password: "pass3" },
    { email: "user4@example.com", password: "pass4" },
    { email: "user5@example.com", password: "pass5" },
  ];

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser")
    if(storedUser) setUser(storedUser)
  }, [])
  

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    )

    if(foundUser){
      setUser(email)
      localStorage.setItem("loggedInUser",email);
      return true;
    }else{
      return false;
    }
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser")
  }

  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider