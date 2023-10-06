/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({
  image,
  name,
  temperament,
  weight_min,
  weight_max,
  id,
  lifeTime,
}) => {
  return (
    <div className="card-container">
      <Link className="link" to={`/dog/${id}`}>
        <div className="card-image-container">
          <img className="card-image" src={image} alt={`imagen de: ${name}`} />
        </div>
        <div className="card-details">
          &#x1F436;
          <h2 className="card-title"> {name} </h2>
          <h4 className="card-text">Temperamento: {temperament}</h4>
          <h4 className="card-text">
            Rango de peso: {weight_min} - {weight_max} Kg
          </h4>
          <h4 className="card-text">Esperanza de vida: {lifeTime}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;
