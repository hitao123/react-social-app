import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
      if (res.data.code === 200) {
        toast("注册成功，请使用注册的用户名登录");
      } else if (res.data.code === 409) {
        toast("用户名已注册，请换一个用户名注册");
      }
    } catch (err) {
      setErr(err);
    }
  };


  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>登录</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="用户名"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="邮箱"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="密码"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="姓名"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>注册</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
