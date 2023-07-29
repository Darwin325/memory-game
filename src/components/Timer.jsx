import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"

export default function Timer() {
   const { timer } = useContext(TimerContext)

   return (
      <>
         <h2 className="text-5xl">Tiempo: {timer}</h2>
      </>
   )
}
