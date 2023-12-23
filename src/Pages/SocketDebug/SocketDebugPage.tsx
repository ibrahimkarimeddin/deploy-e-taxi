
import React, { useEffect, useState } from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { disconnectSocket, getScoket } from '../../lib/SocketProvider'
import { SocketEventLisntEnum } from '../../enums/SocketEventEnum'
import { SocketDashboardDebugDataEvent } from '../../types/SocketEvent'
import { Button } from 'antd'

function SocketDebugPage() {

    const column   =useTableColumns()
     const [data , setData] = useState<SocketDashboardDebugDataEvent[]>([])
    const [isConnected , setIsConnected] = useState(false)

     useEffect(()=>{
      const socket  = getScoket()

      socket?.emit("update item", "1", { name: "updated" }, (response:any) => {
        console.log(response.status); // ok
      });
      // socket?.on('connect',()=>{
      //   setIsConnected(true)

        
      // })
      // socket?.on('disconnect',function(){
      //   setIsConnected(false)
        
      // })
        
      //   socket?.on(SocketEventLisntEnum.SOCKET_DEBUG , function(dataFromSocket:SocketDashboardDebugDataEvent) {
      //     console.log(dataFromSocket);
          
      //     setData((prev)=> ([dataFromSocket ,  ...prev]))
      //   })


      //   return ()=>{
      //     setIsConnected(false)
          
      //     disconnectSocket();
      //   }
     },[])
     
  return (
    // Pass Status to Layout 
    <DashBody status={QueryStatusEnum.SUCCESS} >
        {isConnected ? "Socket ARe Connected" : "Socket Are Disconnected"}
        <DashHeader title={'SocketDebug'}  showAddButton={false}><Button className='secondary bg-primary' onClick={()=>setData([])}>Clear</Button></DashHeader>
    
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />

    </DashBody>
  )
}

export default SocketDebugPage

