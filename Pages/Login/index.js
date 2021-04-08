import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import config from "../../config";
import "./index.css";

const Login = ({setToken}) => {
    // const [message, setMessage] = useState();
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState({user: '', password: ''});
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);
        switch (name) {
          case "user":
            if(value.trim().length === 0){
              errors.user =  "User is required";
            }else{
              errors.user = value.length < 1 ? "User Name must be 1 characters long!" : "";
            }
           
            break;
          case "password":
            errors.password =
              value.length < 8 ? "Password must be 8 characters long!" : "";
            break;
          default:
            break;
        }
    
        setErrors({...errors,[name]: value});
    }

    const loginUser = async (credentials) =>{
        return fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }

    // const handleUser = (e) => {
    //     const { name, value } = e.target;

    //     console.log(name, value);
        
    //     if(value.trim().length === 0){
    //         errors.user =  "User is required";
    //     }else{
    //         errors.user = value.length < 1 ? "User Name must be 1 characters long!" : "";
    //     }
           
    //     setErrors({errors});
    // }

    // const handlePassword = (e) => {
    //     const { name, value } = e.target;

    //     console.log(name, value);
        
    //     if(value.trim().length === 0){
    //         errors.user =  "User is required";
    //     }else{
    //         errors.user = value.length < 1 ? "User Name must be 1 characters long!" : "";
    //     }
           
    //     setErrors({errors,[name]: value});
    // }

    // const handleLogin = () => {
        // let data = {user, password};
        // setMessage({
        //     data: "Login is in progress...",
        //     type: "alert-warning",
        // });
        // fetch(`${config.baseUrl}/user/login`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        //   })
        //     .then((res) => res.json())
        //     .then(({ error, data }) => {
        //       setMessage({
        //         data: error || "Logged in successfully, redirecting...",
        //         type: error ? "alert-danger" : "alert-success",
        //       });
      
        //       !error &&
        //         setTimeout(() => {
        //           localStorage.setItem("token", data.token);
        //           history.push("/home");
        //         }, 3000);
      
        //     });
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          user,
          password
        });
        setToken(token);
      }

    return(
        <div className="container-fluid login">
            <div className="row ht-100">
                <div className="col-md-6 login__container">
                    <h1 className="title">Login</h1>
                    <div className="mt-5 mb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="input-label">User Name</label>
                                <input
                                type="text"
                                name="user"
                                className="form-control"
                                placeholder="User Name"
                                onChange={e => handleChange(e)}
                                />
                                {/* {errors.user.length > 0 && <div className="text-danger">
                                <p>{errors.user}</p>
                                </div>} */}
                            </div>
                            <div className="form-group">
                                <label className="input-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="password"
                                    onChange={e => handleChange(e)}
                                />
                                {/* {errors.password.length > 0 && <div className="text-danger">
                                <p>{errors.password}</p>
                                </div>} */}
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>   
                        </form>
                    </div>
                    {/* <button
                                type="submit"
                                className="btn btn-primary float-right"
                                onClick={() => handleLogin()}
                                >
                            Login
                            </button> */}
                    
                </div>
            </div>

        </div>
        
    );
    
}

export default Login;