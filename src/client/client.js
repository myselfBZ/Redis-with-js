import net from 'net'



export class Client{
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




