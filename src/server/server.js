import net from 'net'

import { DB } from '../db/db.js'

export class Server{
    constructor(addr, port) {
        this.port = port
        this.addr = addr 
        this.db = new DB()
    }
    
    start(){
        console.log('server started')
        this.server = net.createServer((socket) => this.handleConnection(socket));
        this.server.listen(this.port)
    }

    handleConnection(socket){
        console.log('client connected')

        socket.on('data', (data) => {
            console.log(`we got something from client: ${data}`) 
            try{
                const msg = this.db.handleQuery(data.toString()) 
                socket.write(msg)

            } catch(err){
                socket.write(err.toString())
            }
        })

        socket.on('end', () => {
            console.log(`client is done`) 
        })


    }
}

