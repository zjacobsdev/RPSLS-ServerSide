//Created different pages or parms?

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

img = ["img1","img2", "img3", "img4", "img5" ] // image choices

var bot = () =>{        // bot randomly picks an weapon choice

 return Math.floor((Math.random()*5))  // pick a number between 1-5

}


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);


  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api1') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        //respond with rock image source
        //respond with BotWeapon


  } else if (page == '/api2') {
    res.writeHead(200, {'Content-Type': 'application/json'});
       //respond with paper image source


  } else if (page == '/api3') {
      res.writeHead(200, {'Content-Type': 'application/json'});
         //respond with scissors image source


  } else if (page == '/api4') {
      res.writeHead(200, {'Content-Type': 'application/json'})
            //respond with lizard image source



  } else if (page == '/api4') {
      res.writeHead(200, {'Content-Type': 'application/json'});
          //respond with spock hand image source



  } else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }  // else if (page == '/images/rock.png'){
    //   fs.readFile('images/heads.png', function(err, data) {
    //     res.writeHead(200,{"content-type": "image/png"})
    //     res.write(data);
    //     res.end();
    //   });
    // }else if (page == '/images/paper.png'){
    //   fs.readFile('images/tails.png', function(err, data) {
    //     res.writeHead(200,{"content-type": "image/png"})
    //     res.write(data);
    //     res.end();
    //   });
    // }else if (page == '/images/scissors.png'){
    //   fs.readFile('images/tails.png', function(err, data) {
    //     res.writeHead(200,{"content-type": "image/png"})
    //     res.write(data);
    //     res.end();
    //   });
    // }else if (page == '/images/lizard.png'){
    //   fs.readFile('images/tails.png', function(err, data) {
    //     res.writeHead(200,{"content-type": "image/png"})
    //     res.write(data);
    //     res.end();
    //   });
       // }else if (page == '/images/spock.png'){
    //   fs.readFile('images/tails.png', function(err, data) {
    //     res.writeHead(200,{"content-type": "image/png"})
    //     res.write(data);
    //     res.end();
    //   });
    

  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
