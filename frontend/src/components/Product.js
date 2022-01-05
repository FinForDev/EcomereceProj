import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
    console.log(productId)
    
    return (
        <div className="product">
            
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>

                <p className="info__description">{description.substring(0, 100)}...</p>

                <p className="info__price">${price}</p>

                <Link to={{pathname:`/product/${productId}`}} className="info__button">
                    Details
                </Link>
               
            </div>
        </div>
    );
};

export default Product;