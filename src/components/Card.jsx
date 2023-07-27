function Card({ content }) {
   const handleShowHidden = (e) => {
      const divHidden = e.target.firstChild
      divHidden.classList.toggle("-translate-x-full")
      compareCards()
   }

   const compareCards = () => {
      const cards = document.querySelectorAll(".card")
      const cardsSelected = []
      cards.forEach((card) => {
         if (
            card.firstChild.classList.contains("-translate-x-full") &&
            !card.firstChild.classList.contains("bg-lime-200")
         ) {
            cardsSelected.push(card)
         }
      })

      if (cardsSelected.length === 2) {
         const [first, second] = cardsSelected
         if (first.firstChild.textContent === second.firstChild.textContent) {
            // console.log(first, second)
            first.firstChild.classList.add("bg-lime-200")
            second.firstChild.classList.add("bg-lime-200")
         } else {
            setTimeout(() => {
               first.firstChild.classList.toggle("-translate-x-full")
               second.firstChild.classList.toggle("-translate-x-full")
            }, 1000)
         }
      }
   }

   return (
      <>
         <div
            className="w-32 h-48 
            bg-orange-500 relative overflow-hidden card"
            onClick={handleShowHidden}
         >
            <div
               className="w-32 h-48 
               bg-lime-600 absolute left-full 
               transition-all duration-500 ease-in
               grid place-items-center text-6xl
               "
            >
               {content}
            </div>
         </div>
      </>
   )
}

export default Card
