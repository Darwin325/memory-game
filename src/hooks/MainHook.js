import { useEffect, useRef, useState, useContext } from "react"
import { TimerContext } from "../context/TimerContext"

export default function MainHook() {
   const { stopTimer } = useContext(TimerContext)
   const quantity = 4
   const [cards, setCards] = useState([])
   const [uncoveredCards, setUncoveredCards] = useState([])
   const cardsSelected = useRef([])

   const createCards = (quantity) => {
      const cards = []
      for (let i = 0; i < quantity ** 2; i++) {
         cards.push({
            id: i,
            content: "",
         })
      }
      return cards
   }

   const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

   const getRandomList = (list, quantity) => {
      const letters = []
      for (let i = 0; i < quantity; i++) {
         const random = Math.floor(Math.random() * list.length)
         letters.push(list[random])
      }
      return letters
   }

   useEffect(() => {
      const cardsCreated = createCards(quantity)

      const contentLetters = getRandomList(letters, quantity * 2)
      const final = []
      contentLetters.forEach((letter) => {
         for (let i = 0; i < 2; i++) {
            const filteredCards = cardsCreated.filter((_) => _.content === "")
            const randomCard = getRandomList(filteredCards, 1)[0]
            randomCard.content = letter
            final.push(randomCard)
         }
      })
      setCards(final.sort((a, b) => a.id - b.id))
   }, [])

   useEffect(() => {
      if (uncoveredCards.length === quantity ** 2) {
         stopTimer()
      }
   }, [uncoveredCards])

   return { cards, cardsSelected, setUncoveredCards, uncoveredCards }
}
