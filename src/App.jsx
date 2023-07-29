import "./App.css"
import Main from "./components/Main"
import { TimerProvider } from "./context/TimerContext"

function App() {
   return (
      <>
         <TimerProvider>
            <Main />
         </TimerProvider>
      </>
   )
}

export default App
