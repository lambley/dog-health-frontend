import React, { useState, useEffect } from "react"
import DogList from "../Dogs/DogList"
import { IDog } from '../types/data'
import axios from 'axios'

const Search = () => {
  const [input, setInput] = useState("")

  const [dogs, setDogs ] = useState<IDog[]>([])

  useEffect(() => {
    getDogs()
  }, [])

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setInput(target.value)
  }

  const getDogs = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/dogs')

      const data = res.data

      setDogs(data)
    }
    catch(error: any) {
      console.log(error);
    }
  }

  return(
    <div>
      <h2>Browse all dogs - displaying </h2>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="search-hidden">Search here:</span>
        </label>
        <input
          type="text"
          placeholder="Search here:"
          id="header-search"
          onKeyUp={handleKeyUp}
        />
      </form>
      <DogList dogList={dogs}/>
    </div>
  )
}

export default Search
