import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getPriceCount = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  }



  return (
    <nav className="navbar">
      <div className="navbar__logo">

        <div className="navbar__headertext">
          <h2>
            Walmart
            <input placeholder="search" className="navbar__search"></input>
          </h2>
        </div>


      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()} </span>
            </span>
            <p className="cartlogo__price">{getPriceCount()}</p>
          </Link>
        </li>
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div>test3branch</div>
        <div>gitpushtest</div>
      </div>
    </nav>
  );
};

export default Navbar;