import io from "socket.io-client";
// import { BASE_URL } from '../';
let socket;

const connectSocket = (user_id) => {
  socket = io("https://hc-backend-x1us.onrender.com", {
    query: `user_id=${user_id}`,
  });
};

export { socket, connectSocket };
