import mysql from 'mysql2/promise';

export const conecction = await mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    port: 34538,
    database: "railway" ,
    user: "root" ,
    pasword: "AyBZaJkPQLMxcWwMDkSKbHIjAKgMyNDG",
})