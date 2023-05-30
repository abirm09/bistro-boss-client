import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(data => {
        const userInfo = {
          name: data.user.displayName,
          email: data.user.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then(res => res.json())
          .then(() => {
            navigate(from || "/");
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center mb-5">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-circle"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
