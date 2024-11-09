const net = require('net')

const PORT = 8080 
const HOST = '127.0.0.1'
const opts = {
    port:PORT,
    host:HOST
}


class Client{
    
    constructor(port, host){
        this.opts = {
            port:port,
            host:host,
        }
    }

    conn(){
        this.client = net.createConnection(this.opts, ()=>{
            this.client.write('set something firstKey')
            this.client.write('get something')
        })

        this.client.on('data',  this.handleMessage)
    }

    handleMessage(data){
        console.log(`we got something: ${data}`)
    }
}




