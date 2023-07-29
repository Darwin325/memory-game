import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"
export default function CardHook({ cardSelected, setUncoveredCards }) {
   const { initTimer } = useContext(TimerContext)

   const handleShowHidden = (e) => {
      initTimer()
      const divHidden = e.target.firstChild
      cardSelected.current.push(divHidden)
      divHidden.classList.toggle("-translate-x-full")
      compareCards()
   }

   const compareCards = () => {
      if (cardSelected.current.length === 2) {
         const [first, second] = cardSelected.current
         if (first.textContent === second.textContent) {
            setUncoveredCards((prev) => [...prev, first, second])
            first.classList.remove("bg-lime-600")
            second.classList.remove("bg-lime-600")
            first.classList.add("bg-lime-200")
            second.classList.add("bg-lime-200")
         } else {
            setTimeout(() => {
               first.classList.toggle("-translate-x-full")
               second.classList.toggle("-translate-x-full")
            }, 1000)
         }
         cardSelected.current = []
      }
   }

   return { handleShowHidden }
}
