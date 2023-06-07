import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '54.163.119.51',
  user: 'franciscoescobar',
  password: '1234',
  database: 'farmacia'
});

connection.connect((err: any) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

export default connection;