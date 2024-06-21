import { connection } from "../../db/connection.js"

//Encontrar todos los empleados que trabajan en la oficina de 'San Francisco'
export const getAllEmployeesByCity = async() =>{
    let [result]= await connection.query(`SELECT employeeNumber, firstName,lastName FROM employees t1 INNER JOIN offices t2 ON t2.officeCode=t1.officeCode WHERE t2.city = 'San Francisco'`);
    return result;
}

//Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143
export const getAllEmailsAndNamesEmployees = async() =>{
    let [result]= await connection.query(`SELECT employeeNumber,firstName,lastName,email,reportsTo FROM employees WHERE reportsTo=1143
    `);
    return result;
}
