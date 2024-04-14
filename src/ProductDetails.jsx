import { cartItem } from "./feature/cart/cartSlice";
import { useSelector } from "react-redux";
import "./productDetail.css";

import { useDispatch } from "react-redux";

export default function PropductDetails() {
  const cart = useSelector((state) => state.allCart.productInfo);
  const detail = useSelector((state) => state.allCart.pageDetail);
  console.log(detail);
  const dispatch = useDispatch();
  const ClickHandler = (item) => {
    console.log(item);
    dispatch(cartItem(item));
  };
  return (
    <>
      <div>
        {cart.map((item) =>
          item.id == detail.detail ? (
            <div className="product">
              <img src={item.image} class="proDet" alt="" />

              <div className="details">
                <h3>Product Name : {item.title}</h3>
                <p>
                  Price : <b>{item.newPrice}</b>
                </p>
                <p> ROM :{item.productDel[0].Ram}</p>
                <p>ROM :{item.productDel[0].Rom}</p>
                <p>Processor :{item.productDel[0].Processor}</p>
                <p>Front Camera :{item.productDel[0].FrontCamera}</p>
                <p> Back Camera :{item.productDel[0].BackCamera}</p>
                <p> Battery :{item.productDel[0].battery}</p>
                <div className="dbtn">
                  <button onClick={() => ClickHandler(item)} class="btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}
