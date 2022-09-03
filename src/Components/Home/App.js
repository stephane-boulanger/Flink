import bag from "./images/flinkBag.png";
import logo from ".//images/flink-logo.png";
import map from "./images/map.png";
import "./app.css";

function App() {
  return (
    <div className="home">
      <div className="home-top-section">
        <div className="home-top-text">
          <img className="home-logo" src={logo} alt="logo Flink" width="200" />
          <p className="intro-section">
            +2.000 produits du quotidien livrés en quelques minutes
          </p>
          <p className="text-section">
            Vos marques préférées à prix supermarché. Livraison 7j/7 de 8h à
            minuit.
          </p>
          <button className="btn-buy">Acheter maintenant</button>
        </div>
        <div className="home-top-images">
          <img className="img-home" src={bag} alt="" />
        </div>
      </div>
      <div className="home-bottom-section">
        <div>
          <p className="text-map">Nous sommes la</p>

          <p className="img-map">Paris</p>
          <p className="text-map">
            Vous ne trouvez pas votre ville ? Inscrivez-vous maintenant
          </p>
        </div>

        <div>
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
}
export default App;
