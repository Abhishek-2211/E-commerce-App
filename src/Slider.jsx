import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./slider.css";
import { useDispatch } from "react-redux";
import { addCount } from "./feature/cart/cartSlice";

export default function Slider() {
  const { slideData, count } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  const incCount = (num) => {
    console.log("image", slideData);
    console.log("ima", count);

    console.log("num", num);
    dispatch(addCount(num));
  };
  const decCount = (neg) => {
    console.log("image", slideData);
    console.log("ima", count);

    console.log("num", neg);
    dispatch(addCount(neg));
  };

  return (
    <>
      <div className="slider">
        <div className="imgContainer">
          {count == 1 ? (
            <img src={slideData[0].image1} alt="" />
          ) : count == 2 ? (
            <img src={slideData[1].image2} alt="" />
          ) : (
            <img src={slideData[2].image3} alt="" />
          )}
        </div>
        <span onClick={() => decCount(slideData[0].num)} className="arrLeft">
          <ArrowBackIosNewIcon id="arrowLeft" style={{ color: "black" }} />{" "}
        </span>{" "}
        <span onClick={() => incCount(slideData[0].num)} className="arrRight">
          <ArrowForwardIosIcon id="arrowRight" style={{ color: "black" }} />
        </span>
      </div>
    </>
  );
}
