import CardHook from "../hooks/CardHook"

function Card({ content, cardSelected, setUncoveredCards }) {
   const { handleShowHidden } = CardHook({ cardSelected, setUncoveredCards })

   return (
      <>
         <div
            className="w-32
            bg-orange-500 relative overflow-hidden card"
            onClick={handleShowHidden}
         >
            <div
               className="w-full h-full
               bg-lime-600 absolute left-full 
               transition-all duration-300 ease-in
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
