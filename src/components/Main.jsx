import Card from "./Card"
import MainHook from "../hooks/MainHook"

function Main() {
   const { cards, cardsSelected } = MainHook()

   return (
      <>
         <div className="md:p-14 sm:p-4 w-full bg-slate-200">
            <main className={`grid w-fit gap-5 grid-cols-4`}>
               {cards.map((_, i) => (
                  <Card
                     key={i}
                     content={_.content}
                     cardSelected={cardsSelected}
                  />
               ))}
            </main>
         </div>
      </>
   )
}

export default Main
