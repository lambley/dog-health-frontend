import Dog from './Dog'
import { IDogList, IDog } from '../types/data'

const DogList = ({ dogList }:IDogList) => {
   return(
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {dogList.map((dog:IDog) => (
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
