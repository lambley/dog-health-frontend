import { IDog } from '../types/data'

const Dog = (props: IDog): React.ReactElement | null  => {
  return(
    <div>
      <h2>{props.breed}</h2>
      <img src={`https://cdn2.thedogapi.com/images/${props.reference_image_id}.jpg`} alt="" />
      <ul>
        <li>Ideal weight range: {props.weight_metric}lbs | {props.weight_metric}kg</li>
        <li>Ideal height range: {props.height_metric}lbs | {props.height_metric}kg</li>
        <li>Breed group: {props.breed_group}</li>
        <li>Role: {props.bred_for}</li>
        <li>Average lifespan: {props.life_span}</li>
        <li>Temperament: {props.temperament}</li>
      </ul>
    </div>
  )
}

export default Dog
