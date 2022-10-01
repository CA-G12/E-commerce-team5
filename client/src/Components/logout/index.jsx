import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./style.css";

function Index() {
  const navigate = useNavigate();
  const [user, setUser, , setCart] = useOutletContext();
  useEffect(() => {
    fetch("/api/v1/logout")
      .then((data) => data.json())
      .then(() => {
        setUser({ ...user, loggedIn: false });
        setCart([]);
        navigate('/');
      });
  }, []);

  return (
    <div className="loading-container">
      <Triangle
        height={180}
        width={180}
        color="#09c"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible
      />
    </div>
  );
}

export default Index;
