import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { logInWithPass } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithPass(email, password)
      .then(res => {
        console.log(res.user);
        Swal.fire("User logged in successfully.");
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleCheck = e => {
    const captcha_code = e.target.value;
    if (validateCaptcha(captcha_code)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro boss | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  type="text"
                  placeholder="Enter captcha"
                  className="input input-bordered mt-3"
                  name="captcha"
                  onBlur={handleCheck}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn"
                  disabled={disable}
                />
              </div>
            </form>
            <div>
              <p className="text-center py-3">
                New here ? <Link to="/register">Register</Link>
              </p>
            </div>
            <div className="divider"></div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
