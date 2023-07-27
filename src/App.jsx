import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"

function App() {
   const quantity = 4
   const [cards, setCards] = useState([])

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

   return (
      <>
         <div className="md:p-14 sm:p-4 w-full bg-slate-200">
            <main className={`grid w-fit gap-5 grid-cols-4`}>
               {cards.map((_, i) => (
                  <Card key={i} content={_.content} />
               ))}
            </main>
         </div>
      </>
   )
}

export default App
