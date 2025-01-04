import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'
function App() {

  const elements = data.map((entry)=>
    {
      return(
        <Entry
            key = {entry.id}
            entry = {entry}
        />
      )
    })

  return (
    
    <>
      <Header />
      {elements}
    </>
  )
}

export default App
