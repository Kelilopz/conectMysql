import { connection } from "../../db/connection.js"

//1.1 Recuperar todas las líneas de productos con sus descripciones:
export const getAllProductsDescription = async() =>{
    let [result]= await connection.query(`SELECT productLine, productDescription FROM products`);
    return result;
}

//2.1 Recuperar todas las líneas de productos con sus descripciones:
export const getAllProductLineWithDescription = async() =>{
    let [result]= await connection.query(`SELECT productCode, productName,textDescription FROM products t1 INNER JOIN productlines t2 ON t1.productline = t2.productline
    `);
    return result;
}

//3.2 Calcular el total de productos en stock
export const getAllProductsInStock = async() =>{
    let [result]= await connection.query(`   
    SELECT SUM(quantityInStock) 'products in stock' FROM products 
    `);
    return result;
}

//3.3 Encontrar el precio medio de compra de todos los productos
export const getAllProductBuyPrice = async() =>{
    let [result]= await connection.query(`   
    SELECT FORMAT(AVG(buyPrice),2) 'Average Buy Price' FROM products;
    `);
    return result;
}