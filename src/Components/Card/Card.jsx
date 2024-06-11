
import "./Card.css";

const Card = ( {img, header} ) => {
  return (
    <div className="card">
      <div className="heading">
        <img className="image" src={img} alt={header} />
        <p>{header}</p>
      </div>
      Lorem ipsum, dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
    </div>
  );
};

export default Card;
