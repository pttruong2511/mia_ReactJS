import useSWR from "swr";


export function getProductSale() {
    return fetch('http://localhost:3000/product/sale').then(res => res.json());
}

export function getProductByCat(limit: number, idCat: string){
    return fetch(`http://localhost:3000/product/cat/${limit}/${idCat}`).then(res => res.json())
}

export function getQuery(query:string){
    return fetch(`http://localhost:3000/product/query?${query}`,).then(res => res.json())
}

export function getProductOne(id:string){
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR(`http://localhost:3000/product/${id}`,fetcher,{refreshInterval: 6000})
    if(error) return false
    return data
}