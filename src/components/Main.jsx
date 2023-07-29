import Card from "./Card"
import MainHook from "../hooks/MainHook"
import Timer from "./Timer"

function Main() {
   const { cards, cardsSelected, setUncoveredCards } = MainHook()
   return (
      <>
         <div className="md:p-14 sm:p-4 w-full bg-slate-200 h-screen flex justify-center gap-x-10">
            <section>
               <Timer />
            </section>
            <main className={`grid w-fit gap-5 grid-cols-4`}>
               {cards.map((_, i) => (
                  <Card
                     key={i}
                     content={_.content}
                     cardSelected={cardsSelected}
                     setUncoveredCards={setUncoveredCards}
                  />
               ))}
            </main>
         </div>
      </>
   )
}

export default Main
