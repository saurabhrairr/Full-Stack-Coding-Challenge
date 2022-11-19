import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ()=> {
    const [login, setLogin] = useState({userName: "", password: ""})
    const navigate = useNavigate();

    const handleLogin = ()=> {
        axios({
            url: "http://localhost:3002/user/login",
            method: "POST",
            headers: {
            },
            data: {username: login.userName, password: login.password}
        }).then((res)=> {
           localStorage.setItem("authorization", res.data.authToken);
        console.log(res);
        //    navigate("/user/todolist")
        navigate("/Items")
        alert("login succsefull")
        }).catch((err)=> {
            console.log(err)
            alert("login faild")
        })
    }
    return (
        <>
            <div>
                <form>
                    <div>
                        <div>
                        <label for="username">Username:</label>
                        </div>
                        
                        <div>
                            <input id="username" type="text" onChange={(e)=> {setLogin({...login, userName: e.target.value})}}/>
                        </div>
                        <div>
                        <label for="username">Password:</label>
                        </div>
                        
                        <div>
                            <input id="password" type="password" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
                        </div>
                    </div>
                    <button type="button" onClick={handleLogin}>Login</button>
                    <button onClick={()=>{navigate("/singup")}}className="login-page-register-link">signup</button>
                </form>
            </div>
        </>
    )
}

export default Login;