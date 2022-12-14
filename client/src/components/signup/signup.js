import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ()=> {
    const [signupState, setSignupState] = useState({});
    const signUpFormData = [{attr: "username", type: "text", id: "username", label: "Username:"},
                            {attr: "phone_number", type: "text", id: "phoneNumber", label: "Mobile Number:"},
                            {attr: "password", type: "password", id: "password", label: "Password:"}]
                            const navigate = useNavigate();                        
    const handleUserAdd = ()=> {
        console.log(signupState);
        axios({
            url: "http://localhost:3002/user/signup",
            method: "POST",
            headers: {
            },
            data: signupState
        }).then(async (loginData) => {
            if(loginData.data.status==="success"){
                window.alert(loginData.data.message)
            }
            console.log(loginData.data)
            navigate("/")

        }).catch((err) => {
            window.alert(err.response.data.message)
            console.log(err);
        })
    }
    const handleInputChange = (e, id)=> {
        if(id === "phoneNumber") {
            e.target.value = parseInt(e.target.value);
        }
        setSignupState({...signupState, [id]: e.target.value})
    }
    return (
        <>
            <div>
                <form>
                    {signUpFormData.map((formKey)=> {
                        return (
                            <div>
                                <div>
                                    <label for={formKey.id}>{formKey.label}</label>
                                </div>
                                <div>
                                    <input type={formKey.type} id={formKey.id} onChange={(e)=> {handleInputChange(e,formKey.id)}}/>
                                </div>
                            </div>
                        )
                    })}
                </form>
                <button type="button" onClick={handleUserAdd}>Submit</button>
                <div onClick={()=>{navigate("/")}}className="register-page-login-link">Login</div>
             
            </div>
        </>
    )
}
export default Signup;