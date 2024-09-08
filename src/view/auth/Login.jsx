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
  const [showPass, setShowPasswor] = useState(false);
  const navigate = useNavigate();

  const handleChnage = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleShow = () => {
    setShowPasswor(!showPass);
  };

  const hanldeValidation = () => {
    if (!loginData.username) {
      toast.error("User Name Is required");
      return false;
    }
    if (!loginData.password) {
      toast.error("Password Is required");
      return false;
    }
    if (loginData.password.length < 4 ) {
      toast.error("Password length must be 4 digits or above");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (hanldeValidation()) {
        let data = loginData;
        let res = await requestHandler({
          endpoint: "/login",
          method: "POST",
          body: data,
        });

        if (res && res.success) {
          localStorage.setItem("token", res?.data?.accessToken);
          toast.success(res?.message);
          navigate("/");
        } else {
          toast.error(res?.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="login_main">
        <div className="from_main">
          <div className="logo_div">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="from_head">
            <div className="text_main">
              <h3 className="sign_in_txt">
                Login <i class="fa-solid fa-hand-point-down"></i>
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="mb-3 username">
                <div className="set_icon">
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Username"
                    onChange={(e) => handleChnage(e)}
                  />
                  <div className="icons">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div className="set_icon">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => handleChnage(e)}
                  />
                  <div className="icons">
                    {!showPass ? (
                      <i class="fas fa-key" onClick={() => handleShow()}></i>
                    ) : (
                      <i
                        class="fa-solid fa-unlock-keyhole"
                        onClick={() => handleShow()}
                      ></i>
                    )}
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary login_btn">
                Login <i class="fas fa-sign-in-alt float-end mt-1"></i>
              </button>

              <button type="submit" class="btn btn-primary login_btn">
                Login with demo ID{" "}
                <i class="fas fa-sign-in-alt float-end mt-1"></i>
              </button>

              <small class="recaptchaTerms mt-1">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">
                  Privacy Policy
                </a>{" "}
                and
                <a href="https://policies.google.com/terms">
                  Terms of Service
                </a>{" "}
                apply.
              </small>
            </form>
          </div>
        </div>
        <div className="footer_item">
          <div className="footer_left">
            <p>Terms and Conditions</p>
            <p> Responsible Gaming</p>
          </div>
          <div className="footer_left_2">
            <p>24X7 Support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
