
import { Socket, io } from 'socket.io-client';


const BASE_URL_SOCKET  = 'http://localhost:8001';
var socket :Socket | null  =  null ;


function InitSocket(){

    if (!socket){
         socket =  io(BASE_URL_SOCKET , {
            transports:['websocket'],
            autoConnect:true
         });
    }
}

export const disconnectSocket = ()=>{
    socket?.disconnect();
    socket = null;
}
export const getScoket = ()=>{

    InitSocket();
    return socket;
}


