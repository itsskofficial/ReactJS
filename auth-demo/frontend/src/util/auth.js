import { redirect } from "react-router-dom"

export function getToken() {
    const token = localStorage.getItem('token')
    const duration = getTokenDuration()
    if (!token){
        return null
    }
    if (duration<0){
        return 'EXPIRED'
    }
    return token
}

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration')
    const expirationDate=new Date(storedExpirationDate)
    const now= new Date()
    const duration = expirationDate.getTime()-now.getTime()
    return duration
}

export function tokenLoader() {
    return getToken()
}

export function checkAuthLoader() {
    const token = getToken()
    if (!token) {
        return redirect('/auth')
    }
    return null
}