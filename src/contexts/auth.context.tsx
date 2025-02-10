import React, { createContext, useEffect, useState } from "react"
import authServices from "../services/auth.services"

interface AuthContextProps {
    loggedUser: null | any
    isFetchingUser: boolean
    loginUser: (userData: any) => void
    logoutUser: () => void
    authenticateUser: () => void
}

const AuthContext = createContext<AuthContextProps>({
    loggedUser: null,
    isFetchingUser: false,
    loginUser: () => { },
    logoutUser: () => { },
    authenticateUser: () => { }
})

const AuthProviderWrapper: React.FC<React.PropsWithChildren<{}>> = (props) => {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isFetchingUser, setIsFetchingUser] = useState(true)

    const loginUser = (userData: any) => {
        setLoggedUser(userData)
    }

    const logoutUser = () => {
        setLoggedUser(null)
        setIsFetchingUser(false)
        localStorage.removeItem('authToken')
    }

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        setIsFetchingUser(true)

        if (token) {
            authServices
                .verifyUser(token)
                .then(({ data }) => {
                    loginUser(data.loggedUserData)
                    setIsFetchingUser(false)
                })
                .catch(() => logoutUser())
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, loginUser, logoutUser, authenticateUser, isFetchingUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }