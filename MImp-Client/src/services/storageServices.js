export const storeUserdata = (data) =>{
    sessionStorage.setItem('userdata', JSON.stringify(data))
}

export const getUserdata = () => {
    const data = sessionStorage.getItem('userdata');
    return data ? JSON.parse(data) : null;
}

export const removeUserdata = () => {
    sessionStorage.removeItem('userdata');
}


