import { useSelector } from "react-redux";
import "./SearchProduct.css";
import { useDispatch } from "react-redux";
import { detail } from "./feature/cart/cartSlice";
import { Link } from "react-router-dom";
export default function SearchProduct() {
  const searchProduct = useSelector((state) => state.allCart.searchProduct);

  const dispatch = useDispatch();
  const clickDetail = (id) => {
    console.log(id);
    dispatch(detail(id));
  };
  return (
    <>
      <div className="searchProduct">
        {searchProduct.length == 0 ? (
          <h1 className="notFound ">Item not found </h1>
        ) : (
          searchProduct.map((item) => (
            <div className="Card">
              <Link to="/ProductDetails">
                <div
                  className="productdata"
                  onClick={() => clickDetail(item.id)}
                >
                  <img src={item.image} alt="" height="150px" />

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
          ))
        )}
      </div>
    </>
  );
}
