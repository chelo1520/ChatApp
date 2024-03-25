import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./UserContext"
import { io } from "socket.io-client"

const socketContext = createContext()

export function useSocket(){
  return useContext(socketContext)
}

export const SocketContext = ({children}) => {
  const [socket, setSocket] = useState(null)
  const [userOnline, setUserOnline] = useState([])
  const {user} = useAuth()

  useEffect(() => {
    if(user){
      console.log(user);
      const newSocket = io('http://localhost:4000');
      setSocket(newSocket)

      return () => newSocket.close()
    }else{
      if(socket){
        socket.close()
        setSocket(null)
      }
    }
  }, [user])


  return (
    <socketContext.Provider value={{socket, userOnline}}>
      {children}
    </socketContext.Provider>
  )
}
