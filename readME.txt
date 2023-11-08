// Bueno este es unos de las muchas primeras, pruebas que se van a realizar para dar inicio a MI API 
// aqui voy a anotar todos los commandos y las cosas que hice o agrege 


https://www.youtube.com/watch?v=3dSkc-DIM74&t=30s

1. principalmente, (node js, postman )
2. npm init --yes (crea Package.json)
3. MODULOS A INTALAR, (express , morgan )  npm i express morgan
4. npm i nodemon -D  // (modulo para recargar el servidor)
5. (eN Package.JSON en al parte de script, susutitui , "test": "echo \"Error: no test specified\" && exit 1"
por "dev":"nodemon src/indes.js")
 
 npm install -g mysql
npm install mysql2

 en consola   npm run dev,  para mostrar cpor consola el proyecto
 
 // EJEPLO DE PROCEDIMIENTO
 create procedure addoredit(
    IN _id int, 
    IN _name VARCHAR(45), 
    IN salary int, 
 )
 begin 
    if _id 
