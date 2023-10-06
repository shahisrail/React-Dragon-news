import { Link, useLocation, useNavigate } from "react-router-dom";
import Nabbar from "../Shared/Navbar/Nabbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { Signin } = useContext(AuthContext);
  const location = useLocation(); 
  console.log('locatoin in the login page',location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    Signin(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/" )
      })
      .catch((err) => {
     
        console.log(err);
      });
  };

  return (
    <div>
      <Nabbar></Nabbar>
      <div>
        <h2 className="text-3xl text-center"> please login</h2>
        <form onSubmit={handleLogin} className="md:3w-3/4 mx-auto lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
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
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-5">
          Do not have an account
          <Link className="text-blue-600 font-bold" to="/regester">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
