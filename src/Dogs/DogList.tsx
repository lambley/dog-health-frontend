import { useState, useEffect } from 'react'
import Dog from './Dog'
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
      <h1>Browse all dogs</h1>
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
  )
}


export default DogList