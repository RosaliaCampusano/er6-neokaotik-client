import { io, Socket } from 'socket.io-client';
import type {
  ServerToClientEvents,
  ClientToServerEvents,
} from '../interfaces/socket';
import { SocketGeneralEvents } from '../helpers/constants';
import { handleConnection } from './handlers/connection';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'https://er6-neokaotik-server.onrender.com/',
  {
    autoConnect: false,
  },
);

function initSocket(userEmail: string) {
  socket.on(SocketGeneralEvents.CONNECT, () => {
    handleConnection(userEmail);
  });

  socket.connect();
}

function performSocketCleanUp() {
  socket.off(SocketGeneralEvents.CONNECT);

  socket.disconnect();
}

export { socket, initSocket, performSocketCleanUp };
