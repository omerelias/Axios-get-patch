import { useState } from 'react'
import UpdateUserComp from './get_post_data/updateuser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UpdateUserComp></UpdateUserComp>
    </>
  )
}

export default App
