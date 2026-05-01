import { io } from 'socket.io-client';

const SOCKET_URL = window.location.origin;

const socket = io(SOCKET_URL, {
  autoConnect: false,
  withCredentials: true,
  transports: ['websocket', 'polling']
});

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;
