// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === '/cats') {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if (request.url === '/cars/new') {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

  else if(request.url === '/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/images/images.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/images.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/images-1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/images-1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-6.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-6.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-7.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-7.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/images-2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/images-2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-8.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-8.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/images-3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/images-3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-5.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-5.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/download-4.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/download-4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");