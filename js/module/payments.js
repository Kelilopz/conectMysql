import { connection } from "../../db/connection.js"

//Listar el monto total de los pagos recibidos de cada cliente
export const getAllPaymentsByClient = async() =>{
    let [result]= await connection.query(` 
    SELECT customerNumber, SUM(amount) from payments GROUP BY customerNumber
    `);
    return result;
}

//Calcular el total de pagos recibidos
export const getAllTotalPayments = async() =>{
    let [result]= await connection.query(` 
    SELECT  COUNT(*) 'payments Received ' FROM payments 
    `);
    return result;
}





