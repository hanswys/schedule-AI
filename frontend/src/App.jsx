import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Button variant="contained">Contained</Button>
    </>
  )
}

export default App
