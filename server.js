const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function getFile({filePath, fileType, response}) {
    fs.readFile(filePath, (err, data) => {
        if (err) {throw err;}
        response.writeHead(200, {'Content-Type': fileType});
        response.write(data);
        response.end();
        });
}

const server = http.createServer((req, res) => {
    // Main routes
    switch (req.url) {
        case '/':
            getFile({filePath: './public/index.html', 
                    fileType:'text/html',
                    response: res});
            break;
        case '/projects':
            getFile({filePath: './public/projects.html', 
                    fileType:'text/html',
                    response: res});
            break;
        case '/contact-me':
            getFile({filePath: './public/contact-me.html', 
                    fileType:'text/html',
                    response: res});
            break;
        // File routes
        case '/css/contact-me.css':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/css',
                    response: res});
            break;
        case '/css/index.css':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/css',
                    response: res});
            break;
        case '/css/projects.css':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/css',
                    response: res});
            break;
        case '/css/style.css':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/css',
                    response: res});
            break;
        case '/img/home/internet_business_assoc.jpg':
            getFile({filePath: `.${req.url}`, 
                    fileType:'image/jpeg',
                    response: res});
            break;
        case '/public/projects.xml':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/xml',
                    response: res});
            break;
        case '/public/common/footer.html':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/html',
                    response: res});
            break;
        case '/public/common/navbar.html':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/html',
                    response: res});
            break;
        case '/scripts/common.js':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/javascript',
                    response: res});
            break;
        case '/scripts/contact-me.js':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/javascript',
                    response: res});
            break;
        case '/scripts/index.js':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/javascript',
                    response: res});
            break;
        case '/scripts/projects.js':
            getFile({filePath: `.${req.url}`, 
                    fileType:'text/javascript',
                    response: res});
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Invalid URL');
            break;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});