const http = require('http');
const hostname = '127.0.0.1'
const port = 3000


const server = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`
    <h1>Code Color Converter</h1>
    `)
}).listen( port, hostname, () => {
    console.log(`Running on http://${hostname}:${port}`);
})