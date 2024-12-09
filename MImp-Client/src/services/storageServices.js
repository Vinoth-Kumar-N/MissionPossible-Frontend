export const storeUserdata = (data) =>{
    localStorage.setItem('userdata', JSON.stringify(data))
}

export const getUserdata = () => {
    const data = localStorage.getItem('userdata');
    return data ? JSON.parse(data) : null;
}

export const removeUserdata = () => {
    localStorage.removeItem('userdata');
}