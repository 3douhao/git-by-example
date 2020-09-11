import React, { useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:8000/graphql'

async function getData () {
  const response = await axios.post(url, {
    query: '{ greeting }'
  })
  console.log(response.data.data.greeting)
  return response.data.data.greeting
}

const App = () => {
  const [title, setTitle] = useState('')

  getData().then(response => setTitle(response))
  console.log('hahahahha')
  return <h2>{title}</h2>
}

export default App
