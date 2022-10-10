import { useState, useEffect } from 'react'
import Dog from './Dog'
import Search from '../Components/Search'
import { IDog } from '../types/data'
import axios from 'axios'

const DogList = () => {
  const [dogs, setDogs ] = useState<IDog[]>([])

  useEffect(() => {
    getDogs()
  }, [])

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
  console.log(dogs)
  return(
    <div>
      <Search/>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {dogs.map((dog:IDog) => (
          <Dog
            key={dog.id}
            breed={dog.breed}
            weight_imperial={dog.weight_imperial}
            weight_metric={dog.weight_metric}
            height_imperial={dog.height_imperial}
            height_metric={dog.height_metric}
            bred_for={dog.bred_for}
            breed_group={dog.breed_group}
            life_span={dog.life_span}
            temperament={dog.temperament}
            reference_image_id={dog.reference_image_id}
            />
        ))}
      </div>
    </div>
  )
}


export default DogList
