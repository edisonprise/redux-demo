import { useSelector, useDispatch} from "react-redux";
import { unsetUser } from "../reducers/user/userSlice";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleLogout(){
    dispatch(unsetUser())
    navigate("/")
  }
  return (
    <>
    <div>Home</div>
    <p>Welcome {user.fullName}</p>
    <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
    <hr />
    </>
  );
};

export default Home;
