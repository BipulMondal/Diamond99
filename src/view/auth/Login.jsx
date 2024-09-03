import React, { useState } from "react";
import logo from "../../images/logo.png";
import { requestHandler } from "../../utils/requestHandler";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initial = {
    username: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initial);
  const navigate = useNavigate();

  const handleChnage = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = loginData;
      let res = await requestHandler({
        endpoint: "/account/login",
        method: "POST",
        body: data,
      });

      if (res && res.success) {
        localStorage.setItem("token", res?.data?.accessToken);
        toast.success(res?.message);
        navigate("/marketanalysis")
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login_main">
      <div className="from_main">
        <div className="logo_div">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="from_head">
          <div className="text_main">
            <h3 className="sign_in_txt">Sign In</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="mb-3 username">
              <input
                type="text"
                name="username"
                value={loginData.username}
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Username"
                onChange={(e) => handleChnage(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                name="password"
                value={loginData.password}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => handleChnage(e)}
              />
            </div>
            <button type="submit" class="btn btn-dark login_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;