

export interface SocketDashboardDebugDataEvent   {
    event :string  ,
    socket_id :string ,
    room ?: string | null , 
    data : any 
}