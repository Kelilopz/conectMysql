import { conecction } from "../../db/conection";

export const getAllProductsDescription = async() =>{
    let res = await conecction.query(`   SELECT productLine, productDescription FROM products`);
    return result;
}

