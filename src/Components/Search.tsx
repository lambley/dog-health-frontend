import React, { useState, useEffect } from "react"
import DogList from './Dogs/DogList'
import { IDogList } from '../types/data'
import axios from 'axios'

const Search = ({ dogList }: IDogList) => {
  const [input, setInput] = useState("")

  useEffect(() => {
    getDogs()
  }, [input])

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setInput(target.value)
  }

  const getDogs = async () => {
    const url = `http://localhost:3000/api/v1/dogs?q=${input}`

    try {
      const res = await axios.get(url)

      const data = res.data

      dogList = data
    }
    catch(error: any) {
      console.log(error);
    }
  }

  return(
    <div>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <div className="search-hidden">Search here:</div>
        </label>
        <input
          type="text"
          placeholder="Search here:"
          id="header-search"
          onKeyUp={handleKeyUp}
        />
      </form>
      <DogList dogList={dogList}/>
    </div>
  )
}

export default Search
