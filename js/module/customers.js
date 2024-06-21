import { connection } from "../../db/connection.js"

//Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:
export const getAllOrderdetailsByCustomers = async(status=["Resolved", "Shipped"], id=103)=>{
    let [result] = await connection.execute(`
    select d.* 
    from customers c
    inner join orders o on c.customerNumber = o.customerNumber
    inner join orderdetails d on o.orderNumber = d.orderNumber
    where o.status in (${status.map((val,i) => (i+1 == status.length) ? `"${val}"` : `"${val}",`).join("")}) and c.customerNumber = ? 
    `, [id]);
    return result;
}

//Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000

export const getAllCustomerByLimitCredit = async() =>{
    let [result]= await connection.query(`   
     SELECT customerNumber,customerName,country,creditLimit FROM customers WHERE creditLimit> 50000 AND country= "USA"
     `);
    return result;
}


//Obtener el promedio del límite de crédito de todos los clientes:
export const getAllCustomerLimitCredit = async() =>{
    let [result]= await connection.query(`   
    SELECT FORMAT(AVG(creditLimit),2) 'Average Credit Limit' FROM customers
    `);
    return result;
}

