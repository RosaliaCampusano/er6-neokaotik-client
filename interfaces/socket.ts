import {
  SocketClientToServerEvents,
  SocketServerToClientEvents,
} from '../helpers/constants';

// Declaration of the events used when receiving events from the server
interface ServerToClientEvents {}

// Declaration of the events used when sending events to the server
interface ClientToServerEvents {
  [SocketClientToServerEvents.PLAYER_CONNECTED]: (userEmail: string) => void;
}

export type { ServerToClientEvents, ClientToServerEvents };
