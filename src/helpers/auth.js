export const fetchAccesToken =() =>{
    return fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
        method: 'GET',
        headers:{
            Accept: 'appliction/json',
            'api-token': 'lYGAlgHqKUq9cPJFvX5tMPSDXmF0E3xl9fdpD-5GJlyOtebj6VOYlgQ6kkgW6aMqTBk',
            'user-email':'w-franco19@hotmail.com'
        }
    })
    .then(res => res.json())
    .then(dato =>{
        if (dato.auth_token){
            return dato.auth_token
        }else{
            throw new Error('No se pudo obtener el token temporal')
        }
    })
}