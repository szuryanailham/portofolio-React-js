import Hero from "./Hero";
import CardDesc from "./CardDesc";
import CardCulture from "./CardCulture";
import card1 from "./../assets/card1.jpg";
import card2 from "./../assets/card2.jpg";
import card3 from "./../assets/card3.jpg";
import image1 from "./../assets/culture1.jpg";
import image2 from "./../assets/culture2.jpg";
import image3 from "./../assets/culture3.jpg";

const MainContent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Special Destination</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 my-3">
            <CardDesc image={card1} title="Tokyo Tower" />
          </div>
          <div className="col-lg-4 col-12  my-3">
            <CardDesc image={card2} title="Tokyo Tower" />
          </div>
          <div className="col-lg-4 col-12  my-3">
            <CardDesc image={card3} title="Tokyo Tower" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1> Japanese Culture</h1>
          </div>
          <div className="col-12">
            <CardCulture imageCulture={image1} />
          </div>
          <div className="col-12">
            <CardCulture imageCulture={image2} />
          </div>
          <div className="col-12">
            <CardCulture imageCulture={image3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
