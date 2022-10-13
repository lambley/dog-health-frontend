import { useState } from "react";
import { IDog } from '../../types/data'

const Dog = (props: IDog): React.ReactElement | null  => {
  const [showMore, setShowMore] = useState(false)

  const CardText = () => {
    if (showMore === false) {
      return null
    }

    return(
    <ul>
      <li>Ideal weight range: {props.weight_imperial}lbs | {props.weight_metric}kg</li>
      <li>Ideal height range: {props.height_imperial}inches | {props.height_metric}cm</li>
      <li>Breed group: {props.breed_group}</li>
      <li>Role: {props.bred_for}</li>
      <li>Average lifespan: {props.life_span}</li>
      <li>Temperament: {props.temperament}</li>
    </ul>
    )
  }

  const handleToggleClick = ():void => {
    setShowMore(!showMore)
  }

  const buttonText = showMore ? "Show less" : "Show more"

  return(
    <div className="col">
      <div className='card'>
        <img src={`https://cdn2.thedogapi.com/images/${props.reference_image_id}.jpg`} alt="" className='card-img-top'/>
        <div className="card-body">
          <h2 className='card-title'>{props.breed}
          </h2>
          <button className="btn btn-secondary" onClick={handleToggleClick}>{buttonText}</button>
          <div className="card-text card-hidden">
            {showMore
              ? <CardText/>
              : ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dog
