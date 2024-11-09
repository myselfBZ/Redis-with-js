import { Server } from "./server/server.js"

const ADDR = 'localhost'
const PORT = 3000; 
const server = new Server(ADDR, PORT);

server.start()
