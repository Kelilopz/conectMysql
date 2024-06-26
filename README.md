### Consultas de una sola tabla

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   SELECT productLine, productDescription FROM products;
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT employeeNumber, firstName,lastName, t2.officeCode FROM employees t1 INNER JOIN offices t2 ON t2.officeCode=t1.officeCode WHERE t2.city = 'San Francisco';
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   SELECT orderNumber, status FROM orders WHERE status = "Shipped";
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   SELECT * FROM payments WHERE customerNumber=103;
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   SELECT customerNumber,customerName,country,creditLimit FROM customers WHERE creditLimit> 50000 AND country= "USA";
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   SELECT productCode, productName,textDescription FROM products t1 INNER JOIN productlines t2 ON t1.productline = t2.productline;
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   SELECT employeeNumber,firstName,lastName,email,reportsTo FROM employees WHERE reportsTo=1143;
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   SELECT t1.orderNumber,t1.customerNumber,t2.country FROM orders t1 INNER JOIN customers t2 ON t1.customerNumber = t2.customerNumber WHERE t2.country="France";
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT customerNumber, SUM(amount) from payments GROUP BY customerNumber;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
   SELECT orderNumber, productName, quantityOrdered, priceEach, customerNumber FROM orders INNER JOIN orderdetails USING (orderNumber)INNER JOIN products  USING (productCode) WHERE customerNumber=103;
   
   ```

## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```sql
   SELECT FORMAT(AVG(creditLimit),2) 'Average Credit Limit' FROM customers;
   ```

2. **Calcular el total de productos en stock:**

   ```sql
   SELECT  SUM(quantityInStock) 'products in stock' FROM products ;
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```sql
   SELECT FORMAT(AVG(buyPrice),2) 'Average Buy Price' FROM products;
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```sql
   SELECT country, COUNT(*) 'Offices' FROM offices GROUP BY country;
   ```

5. **Calcular el total de pagos recibidos:**

   ```sql
   SELECT  COUNT(*) 'payments Received ' FROM payments ;
   ```

6. **Obtener la cantidad total de empleados:**

   ```sql
   SELECT  COUNT(*) ' employees ' FROM employees ;
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```sql
   SELECT FORMAT(AVG(product_count),2) AS 'Average Quantity per Order' FROM ( SELECT orderNumber, SUM(quantityOrdered) AS product_count FROM orderdetails GROUP BY orderNumber) AS subquery;
   
   ```

8. **Encontrar el precio total de todos los productos:**

   ```sql
   SELECT prouctName, buyPrice FROM products;
   SELECT SUM(buyPrice) 'total price all products' FROM products;
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```sql
   SELECT FORMAT(AVG(buyPrice),2) 'Adveraged MSRP' FROM products;
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```sql
   SELECT jobTitle, COUNT(*) 'employees by JobTitle' FROM employees GROUP BY jobTitle;
```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```sql
   SELECT customerNumber,  COUNT(*) 'Payments by Customer' from payments GROUP BY customerNumber;
   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```sql
   SELECT country, FORMAT(AVG(creditLimit),2) 'Credit Limit by country' from customers GROUP BY country;
   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```sql
   SELECT customerNumber, COUNT(orderNumber) 'Total order by customer' from orders GROUP BY customerNumber;
   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```sql
   SELECT customerName, SUM(t1.quantityOrdered) FROM customers INNER JOIN orders t2 USING (customerNumber) INNER JOIN orderdetails t1 USING (orderNumber) WHERE t2.status = 'Shipped' GROUP BY customerName;
   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```sql
    SELECT t1.customerNumber, SUM(t2.quantityOrdered*t2.priceEach) AS sale FROM orders t1 INNER JOIN orderdetails t2   WHERE t1.status = 'Shipped' GROUP BY t1.customerNumber ORDER BY sale DESC;
   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```sql
   SELECT productLine, AVG(quantityInStock) 'Quantity In Stock' FROM products GROUP BY productLine;
   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```sql
   SELECT country, SUM(amount) FROM customers INNER JOIN payments USING (customerNumber) GROUP BY  country;
   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```sql
   SELECT t1.firstName, t1.lastName, FORMAT(AVG(t3.amount),2) As AdverageAmount FROM employees t1 INNER JOIN customers t2 ON employeeNumber = salesRepEmployeeNumber INNER JOIN payments t3 USING (customerNumber) GROUP BY t1.firstName, t1.lastName ORDER BY AdverageAmount ;
   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```sql
    SELECT t1.firstName, t1.lastName, COUNT(*) As OrdersByEmployee FROM employees t1 INNER JOIN customers t2 ON employeeNumber = salesRepEmployeeNumber INNER JOIN orders t3 USING (customerNumber) GROUP BY t1.firstName, t1.lastName;
   ```

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

   ```sql
   SELECT pl.productLine, SUM(od.quantityOrdered) AS SaleProducts FROM productlines pl INNER JOIN products p ON pl.productLine = p.productLine INNER JOIN orderdetails od ON p.productCode = od.productCode GROUP BY pl.productLine;
   ```

11.**Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

   ```sql
   SELECT c.customerName, AVG(o.quantityOrdered) AS adverange_total FROM customers c INNER JOIN orders d USING (customerNumber) INNER JOIN orderdetails o USING (orderNumber) GROUP BY c.customerName ORDER BY adverange_total;
   ```

12. **Calcular el total de ventas realizadas en cada país:**

    ```sql
   SELECT c.country, SUM(d.quantityOrdered) 'SalesByCountry' FROM customers c INNER JOIN orders o USING (customerNumber) INNER JOIN orderdetails d USING (orderNumber) WHERE status= "Shipped" GROUP BY c.country;
    ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```sql
    
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    ```sql
    
    ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```sql
    
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    ```sql
    
    ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

    ```sql
    
    ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    ```sql
    
    ```

19. **Obtener el total de pagos realizados en cada año:**

    ```sql
    
    ```

20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**