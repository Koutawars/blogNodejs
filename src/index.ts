// usar Server.ts para iniciar el servidor
import { Server } from './application/Server';

const server = new Server();

server.config();

server.routes();

server.start();