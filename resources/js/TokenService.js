const TOKEN ='token'

export const set = (token_data)=>{
    localStorage.setItem(TOKEN,token_data)
}

export const get = () => {
    return localStorage.getItem(TOKEN)
}

export const removeToken = ()=>{
    localStorage.removeItem('token')
}

export const logout = ()=>{
    if(localStorage.clear()){
        return true
    }
    return  false
}

export const setRole = (role)=>{
    localStorage.setItem('role',role)
}

export  const isAuthenticated = ()=>{
    if(localStorage.getItem('token')){
        return true
    }
    return  false
}

export const getRole = ()=>{
    return localStorage.getItem('role')
}


