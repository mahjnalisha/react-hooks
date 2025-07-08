import React, { useEffect, useState } from 'react'
import useFetch from './customhooks/useFetch'

//fetching data from apis

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      {data.map((res) => {
        return (
          <h4 key={res.id}>{res.id} . {res.name}</h4>
        )
      })}
    </div>
  )
}

export default App