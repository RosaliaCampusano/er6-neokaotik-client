import { socket } from '../socket';
import { SocketClientToServerEvents } from '../../helpers/constants';

function handleConnection(userEmail: string) {
  console.log('Socket successfully connected.');

  socket.emit(SocketClientToServerEvents.PLAYER_CONNECTED, userEmail);
}

export { handleConnection };
