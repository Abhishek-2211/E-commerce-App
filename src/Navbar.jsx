import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  searchProducts,
  clearSearchProduct,
  changeData,
} from "./feature/cart/cartSlice";
export default function Navbar() {
  const { cartItems, onChangeData } = useSelector((state) => state.allCart);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const dispatch = useDispatch();

  let updateDataValue = (event) => {
    console.log("onchange", event.target.value);
    dispatch(changeData(event.target.value.toLowerCase()));
  };

  let filterData = (event) => {
    dispatch(searchProducts());
  };
  let searchDataClear = () => {
    dispatch(clearSearchProduct());
  };
  return (
    <>
      <div className="navContainer">
        <Link to="/">
          <div className="icon" onClick={searchDataClear}>
            <h4 style={{ color: "white" }}>E-TECH {"{ }"}</h4>
          </div>
        </Link>

        <div className="Searchbar">
          <input
            type="search"
            class="inputSearch"
            placeholder="Search Propduct"
            value={onChangeData}
            onChange={updateDataValue}
          />
          <Link to="/SearchProduct">
            <div className="searchIcon">
              <SearchIcon id="search" onClick={filterData} />
            </div>
          </Link>
        </div>

        <Link to="/CartItems">
          <div id="cartIcon">
            <StyledBadge badgeContent={cartItems.length} color="secondary">
              <AddShoppingCartIcon id="icon" />
            </StyledBadge>
          </div>
        </Link>
        <div className="login">
          <h5>Log in</h5>
        </div>
      </div>
    </>
  );
}
