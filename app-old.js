import http from "http";

http
  .createServer((req, res) => {


    // res.setHeader('Content-Disposition', 'attachment; filename = lista.csv')
    // res.writeHead(200,{'content-type': 'application/csv'})

  
    // res.write( 'id,nombre\n')
    // res.write( '1,carlos\n')
    // res.write( '2,Lia\n')
    // res.write( '3,Mau\n')

    res.write('Hola mundo')
    res.end();
  })
  .listen(8080);


  console.log("Escuchando el puerto")
