import { useEffect, useState } from "react"
import Search from "./Search"
import { IDog } from '../types/data'
import axios from 'axios'

const Main = () => {
  const [dogList, setdogList ] = useState<IDog[]>([])

  // get full list of dogs on load
  const getDogs = async () => {
    const url = 'http://localhost:3000/api/v1/dogs'

    try {
      const res = await axios.get(url)

      const data = res.data

      setdogList(data)
    }
    catch(error: any) {
      console.log(error);
    }
  }

  // call API on load once
  useEffect(() => {
    getDogs()
  }, [])

  return(
    <div>
      <h2>Browse all dogs - <em>displaying {dogList.length} dogs</em></h2>
      <Search dogList={dogList}/>
    </div>
  )
}

export default Main;
