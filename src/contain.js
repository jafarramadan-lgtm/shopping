import "./contain.css";
import { Link } from "react-router-dom";

export default function Contain({ setM }) {
  const handlckick = () => {
    setM((prevM) => (prevM === 0 ? 1 : 0));
  };
  return (
    <div className="contain">
      <div className="left">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style
        </p>
        <Link to="/shop">
          <button onClick={handlckick}>Shop Now &#10029;</button>
        </Link>
        <div className="dig">
          <div>
            <h1>200+</h1>
            <p>Internatinal Brands</p>
          </div>
          <div>
            <h1>2,000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h1>3,000+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="start">
        <h1>&#10022;</h1>
        <h1>&#10022;</h1>
        <h1>&#10022;</h1>
      </div>
      <div className="img"></div>
    </div>
  );
}
