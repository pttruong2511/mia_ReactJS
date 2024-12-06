
interface IProduct{
    id: string,
    name: string,
    price_sale: number, 
    price_origin: number,
    quantity: number,
    status: number,
    images: string[],
    types: string[],
    view: number,
    brand_id: string,
    descript: string,
    category_id: string
}

interface ITypes{
    name: string
    item: string[]
}