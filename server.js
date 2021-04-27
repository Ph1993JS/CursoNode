const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Contente-Type','text/plain');    
    /*Response.redirect('htmlmap.html', 200)*/
    res.end('htmlmap.html');
    
})

server.listen(port, host, ()=>{
    console.log(`Server Running at http://${host}
        :${port}`)
})