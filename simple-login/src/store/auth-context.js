import { React, useEffect, useState } from "react"

const AuthContext = React.createContext({
    user: null,
    onLogout: () => {},
    loginSuccessful : () => {}
})

export const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
      const storedUserInformation = localStorage.getItem('user')
      if (storedUserInformation != null) {
        setCurrentUser(JSON.parse(storedUserInformation))
      }
  
    },[])
    
    const onLoginHandler = (user) => {
      setCurrentUser(user)
      localStorage.setItem('user',JSON.stringify(user))
    }
  
    const onLogoutHandler = (logout) => {
      if (logout) {
        setCurrentUser(null)
      }
    }

    return (
        <AuthContext.Provider value={{
            user: currentUser,
            onLogout : onLogoutHandler,
            loginSuccessful : onLoginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext