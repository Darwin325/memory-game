import CardHook from "../hooks/CardHook"

function Card({ content, cardSelected }) {
   const { handleShowHidden } = CardHook({ cardSelected })

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
               transition-all duration-100 ease-in
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
