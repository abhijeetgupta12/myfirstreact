const http = require('http');
const fs = require('fs');
const requests = require('requests');



const server = http.createServer((req,res)=>{

    if(req.url='/'){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Allahabad&appid=cd246ba455a7d58ca7609c23a80d8f84')
        .on('data',  (chunk) => {
            res.end(chunk);
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            
            console.log('end');
        });
    }

})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server started..........');
})