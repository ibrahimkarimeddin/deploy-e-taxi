
import { Socket, io } from 'socket.io-client';


export const BASE_URL_SOCKET  = 'http://localhost:8001/';
var socket :Socket | null  =  null ;


function InitSocket(){

    if (!socket){
         socket =  io(BASE_URL_SOCKET , {
            transports:['websocket'],
            autoConnect:true,
            query:{
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbF9uYW1lIjoiYmlzaGVyIiwiZW1haWwiOm51bGwsImNvdW50cnlfY29kZSI6Iis5NzQiLCJwaG9uZSI6Ijk1MTk2ODk5NCIsImZjbV90b2tlbiI6bnVsbCwicGhvbmVfdmVyZmljYXRpb24iOjEsImF2YXRhciI6IlwvaW1hZ2VzXC9hdmF0YXJfaW1hZ2UucG5nIiwiY29kZSI6ImpIVWdTQSIsInN0YXR1cyI6InVuYmxvY2tlZCIsImJsb2NrX3RpbWVyIjpudWxsLCJnZW5kZXIiOiJcdTA2MzBcdTA2NDNcdTA2MzEiLCJ3YWxsZXQiOiIwLjAwIiwiY2l0eV9pZCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjMtMTItMTlUMTA6MDQ6NDcuMDAwMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIzLTEyLTE5VDEwOjA0OjQ3LjAwMDAwMFoiLCJkZWxldGVkX2F0IjpudWxsfQ.f6Tl_i9bSUJtC9YPzD_8LbQ8taIOlOdgksi-QHKekZU",
                lat:"36.6464",
                long:"36.54354"
            }
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


