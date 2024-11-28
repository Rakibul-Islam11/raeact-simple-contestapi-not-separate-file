

import { createContext } from 'react'
import './App.css'
import Another from './Another';
import Others from './Others';

export const cntstapi = createContext();// এখানে নিয়ম হলো contestapi কে always মুল fn এর বাহিয়ে রাখতে হয়।
function App() {
  const ffff = () => { // এখানে এই ডাটা কেই others compo তে use করা হয়েছে
    alert("clicked")
    
  }  

  return (
    <>
      <cntstapi.Provider value={ffff}>
        <Another></Another>
        <Others></Others>
      </cntstapi.Provider>
    </>
  )
}

export default App
