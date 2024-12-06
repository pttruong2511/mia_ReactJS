
export function getAllCate(){
    return(fetch('http://localhost:3000/category').then(res=> res.json()))
}