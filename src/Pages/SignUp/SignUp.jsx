import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(useLocation());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
        updateUser(res.user, data.name, data.photo)
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name: data.name, email: data.email }),
            })
              .then(res => res.json())
              .then(() => {
                navigate("/");
              });
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
      });
  };
  const updateUser = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro boss | Sign in</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 font-bold py-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered"
                  name="photo"
                  {...register("photo", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 font-bold py-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 font-bold py-2">
                    This field is required
                  </span>
                )}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600 font-bold py-2">
                    Password is required.
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600 font-bold py-2">
                    Password min length is 5
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-600 font-bold py-2">
                    Password min length is 15
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600 font-bold py-2">
                    Password should contain 1 uppercase,1 lowercase,2 number and
                    one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn" />
              </div>
            </form>
            <div>
              <p className="text-center py-3">
                New here ? <Link to="/login">Login</Link>
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

export default SignUp;
