import Header from "./components/Header"
import Meme from "./components/Meme"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased h-full selection:bg-darkslategrey-500  selection-text-cyan-900">
        <Header/>
        <Meme/>
    </div>
    
  )
}

export default App