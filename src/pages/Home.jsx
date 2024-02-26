import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ProductsList } from "../components/ProductList";
import Axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  function handleLogout() {
    dispatch(unsetUser());
    navigate("/");
  }
  return (
    <>
      <div>Home</div>
      <p>Welcome {user.fullName}</p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
      <hr />
      <ProductsList products={products} />
    </>
  );
};

export default Home;
