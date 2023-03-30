var http= require('http');

var manejador = function(solicitud , respuesta){
    console.log('Conexion entrante');
    respuesta.end('<p>Hola mundo! , Desarrollo de soluciones en la Nube , Erika Ventura Ramirez.<p>');
};

var servidor =  http.createServer(manejador);
servidor.listen(8080);