import Logo from "../../assets/EZ Works Blue.png";
import Card from "../Card/Card";
import Form from "./Form/Form";
import AVP from "../../assets/Audio-Visual-Production.png";
import DP from "../../assets/Data-Processing.png";
import GD from "../../assets/Graphics-Design.png";
import PD from "../../assets/Presentation-design.png";
import RA from "../../assets/Research&Analytics.png";
import TS from "../../assets/Translation-Services.png";
import "./Home.css";

const Home = () => {
  const cardData = [
    {
      img: PD,
      heading: "Presentation Design",
    },
    {
      img: AVP,
      heading: "Audio-Visual Production",
    },
    {
      img: TS,
      heading: "Translation Services",
    },
    {
      img: GD,
      heading: "Graphic Design",
    },
    {
      img: RA,
      heading: "Research & Analytics",
    },
    {
      img: DP,
      heading: "Data Processing",
    },
  ];

  return (
    <div className="Homepage">
      <div className="form-section">
        <img className="logo-img" src={Logo} alt="EZ Works" />
        <p className="subtitle">Suite of Business Support Services</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          optio maxime aliquam tempore quae illo velit quis dolorem, sequi
          fugiat, esse officia incidunt deserunt accusamus, quia molestias
          beatae consequatur eum?
        </p>
          <Form className="form"/>
      </div>
      <div className="card-section">
        {cardData.map((card) => (
          <Card img={card.img} header={card.heading} />
        ))}
      </div>
    </div>
  );
};

export default Home;
