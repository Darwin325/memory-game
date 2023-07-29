import { createContext, useState, useRef } from "react"

export const TimerContext = createContext()

export function TimerProvider({ children }) {
   const [timer, setTimer] = useState(0)
   const timerRef = useRef(null)

   const initTimer = () => {
      if (timerRef.current) return
      timerRef.current = setInterval(() => {
         setTimer((prev) => prev + 1)
      }, 1000)
   }
   const stopTimer = () => {
      if (!timerRef.current) return
      clearInterval(timerRef.current)
      timerRef.current = null
   }

   const data = { timer, initTimer, stopTimer }
   return <TimerContext.Provider value={data}>{children}</TimerContext.Provider>
}
