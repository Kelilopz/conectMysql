import { connection } from "../../db/connection.js"

//Listar todas las órdenes que tienen un estado de 'Enviado'
export const getAllOrderByStatus = async() =>{
    let [result]= await connection.query(` SELECT orderNumber, status FROM orders WHERE status = "Shipped"`);
    return result;
}
