import { IDog } from '../types/data'

const Dog = (props: IDog): React.ReactElement | null  => {
  return(
    <div className="col">
      <div className='card'>
        <img src={`https://cdn2.thedogapi.com/images/${props.reference_image_id}.jpg`} alt="" className='card-img-top'/>
        <div className="card-body">
          <h2 className='card-title'>{props.breed}</h2>
          <ul>
            <li className='card-text'>Ideal weight range: {props.weight_metric}lbs | {props.weight_metric}kg</li>
            <li className='card-text'>Ideal height range: {props.height_metric}lbs | {props.height_metric}kg</li>
            <li className='card-text'>Breed group: {props.breed_group}</li>
            <li className='card-text'>Role: {props.bred_for}</li>
            <li className='card-text'>Average lifespan: {props.life_span}</li>
            <li className='card-text'>Temperament: {props.temperament}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dog
