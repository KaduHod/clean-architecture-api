import Server from "./server";
import {router as userRoutes} from './Routes/User'

const server = new Server({port:3333});
server.useJsonParser()
server.addRouter(userRoutes, '/user');

server.serve(()=>{
    console.log('Server listenning at http://localhost:' + server.port)
})