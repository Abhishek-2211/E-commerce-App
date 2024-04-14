import { useSelector } from "react-redux";
import "./Card.css";
import { cartItem } from "./feature/cart/cartSlice";
import { detail } from "./feature/cart/cartSlice";
import Slider from "./Slider.jsx";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
export default function Cards() {
  const cart = useSelector((state) => state.allCart.productInfo);

  const dispatch = useDispatch();
  console.log(cart[0].image);
  const ClickHandler = (item) => {
    console.log(item);
    dispatch(cartItem(item));
  };
  const clickDetail = (id) => {
    console.log(id);
    dispatch(detail(id));
  };

  return (
    <>
      <div className="panel">
        <h5>All Technology</h5>
      </div>
      <div>
        <Slider />
      </div>

      <div className="cardContainer">
        {cart.map((item) => (
          <div className="Card">
            <Link to="/ProductDetails">
              <div className="productdata" onClick={() => clickDetail(item.id)}>
                <img src={item.image} alt="" />

                <div className="title">
                  <h3>{item.title}</h3>
                  <span
                    style={{
                      textDecorationLine: "line-through",
                    }}
                  >
                    {" "}
                    {item.oldPrice}
                  </span>
                  &nbsp;&nbsp;<span>{item.newPrice}</span>
                </div>
              </div>
            </Link>
            <button onClick={() => ClickHandler(item)} class="cartbtn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
