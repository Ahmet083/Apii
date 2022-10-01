import { useState } from "react";
import useApi from "../../../components/hooks/useApi";
// import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

 const api = useApi()

  const onLoginBtnClick = () => {
    alert(`${email} ${password}`)
    
    const postData = {
      email, password,
    }
    console.log('POST_DATA', postData)

    api.post('https://api.adoptez1artisan.com/auth/login', postData)
    .then((response) => {

    })
    .catch((err) => {

    })
  }
  return (
    <main className=" main py-3">
      <div className="row row-cols-1 row-cols-md-3 text-center">
        <div className="col align-text-center">
          <form>
            <div className="col-12 form-group">
              <label for="exampleInputEmail1">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12 form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-12 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onLoginBtnClick}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
