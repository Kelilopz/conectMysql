import { connection } from "../../db/connection.js"

//Listar todas las órdenes que tienen un estado de 'Enviado'
export const getAllOrderByStatus = async() =>{
    let [result]= await connection.query(` 
    SELECT orderNumber, status FROM orders WHERE status = "Shipped"
    `);
    return result;
}

//Encontrar todas las órdenes realizadas por clientes de 'Francia'
export const getAllOrderByCounty = async() =>{
    let [result]= await connection.query(` 
    SELECT t1.orderNumber,t1.customerNumber,t2.country FROM orders t1 INNER JOIN customers t2 ON t1.customerNumber = t2.customerNumber WHERE t2.country="France"
    `);
    return result;
}

//Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:
    export const getAllOrderDetailsByIdClient = async() =>{    
    let [result]= await connection.query(` 
    SELECT orderNumber, productName, quantityOrdered, priceEach, customerNumber FROM orders INNER JOIN orderdetails USING (orderNumber)INNER JOIN products  USING (productCode) WHERE customerNumber=103
    `);
    return result;
}

