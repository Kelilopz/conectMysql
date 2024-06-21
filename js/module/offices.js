import { connection } from "../../db/connection.js"

//3.4 Contar la cantidad de oficinas en cada país
export const getAllOfficesByCountry = async() =>{
    let [result]= await connection.query(`   
    SELECT country, COUNT(*) 'Offices' FROM offices GROUP BY country
    `);
    return result;
}