import {getAllProductsDescription} from "./module/product.js"
import {getAllOrderdetailsByCustomers} from "./module/customers.js" 
import {getAllEmployeesByCity} from "./module/employees.js" 
import {getAllOrderByStatus} from "./module/orders.js"

console.log(await getAllOrderdetailsByCustomers());