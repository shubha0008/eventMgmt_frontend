import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Login({ setCurrentUser }) {
    let history = useHistory();

  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var temp = JSON.parse(JSON.stringify(data));
    temp[name] = value;
    setData(temp);
  };

  const handleSubmit = async () => {
    const usersData = await fetch("https://eventmgmt-event.herokuapp.com/events").then((res) =>
      res.json()
    );
    const match = usersData.filter(
      (e) => e.username === data.username && e.password === data.password
    );
    if (match.length === 1) {
      setCurrentUser(match[0]);
      console.log(match);
      
      history.push("/book")
    } else {
      console.log("Email/Password is incorrect");
      console.log(match);
      
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4"> </div>
        <div className="col-md-4">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">username</label>
              <input
                type="text"
                className="form-control"
                id="username"
               
                name="username"
                value={data.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to = "/Signup"><button className="btn btn-primary">SignUp Here</button></Link>
          </form>
        </div>
        <div className="col-md-4"> </div>
      </div>
    </div>
  );
}

export default Login;