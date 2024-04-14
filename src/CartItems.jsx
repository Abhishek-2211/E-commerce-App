import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { deleteItem, dQuantity } from "./feature/cart/cartSlice";
import { incQuantity } from "./feature/cart/cartSlice";
import { Link } from "react-router-dom";
import "./cartItems.css";

export default function CartItems() {
  const { cartItems, slideData } = useSelector((state) => state.allCart);

  console.log("cartD", slideData);

  const dispatch = useDispatch();
  const clickHandler = (id) => {
    console.log("delId=", id);
    dispatch(deleteItem(id));
  };

  const inQuantity = (id) => {
    dispatch(incQuantity(id));
  };

  const decQuantity = (id) => {
    dispatch(dQuantity(id));
  };

  let oldPrice = 0;
  let newPrice = 0;
  let discount = 0;
  let quantity = 0;

  return (
    <>
      <div className="panel">
        <h5>You are in Cart</h5>
      </div>

      <div className="cartItem">
        <ul>
          {cartItems.map((item) => (
            <div className="cartItems">
              <li key={item.id} style={{ display: "flex" }} class="items">
                <Link to="/ProductDetails">
                  <div class="image">
                    <img src={item.image} alt="not fount image" height="80px" />
                  </div>
                </Link>
                <div className="description">
                  {" "}
                  {item.title}
                  <br />
                  <span style={{ textDecorationLine: "line-through" }}>
                    {item.oldPrice}
                  </span>
                  &nbsp;&nbsp;<span>{item.newPrice}</span>
                </div>

                <div className="quantity">
                  <button onClick={() => decQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => inQuantity(item.id)}>+</button>
                </div>
                <div className="cartBtn">
                  {" "}
                  <button
                    onClick={() => clickHandler(item.id)}
                    className="removeBtn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="price">
        <p>
          <b>Price Details</b>
          <br />
          {cartItems.map((item) => {
            oldPrice = oldPrice + item.oldPrice * item.quantity;
            newPrice = newPrice + item.newPrice * item.quantity;
            discount =
              discount + (item.oldPrice - item.newPrice) * item.quantity;
            quantity = quantity + item.quantity;
          })}
          Price({quantity} {cartItems.length > 1 ? "items" : "item"}) =
          {oldPrice}
          <br />{" "}
          {cartItems.length == 0 ? (
            ""
          ) : (
            <span>
              Discount = {discount} <br /> <b>Total Amount = </b>
              {newPrice}{" "}
            </span>
          )}{" "}
        </p>
      </div>
    </>
  );
}
