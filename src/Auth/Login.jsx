import axios from "axios"
import { useNavigate } from "react-router"
const APILink = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

const Login = ({authenticate, error, setError}) => {
    const navigate = useNavigate();


    const login = async(formData) => {
        const username = formData.get("Username");
        const password = formData.get("Password");

    const user = {
        username,
        password
    };
    try {
        const { data } = await axios.post(APILink + user)
        window.localStorage.setItem("token", data.token )
        authenticate();
        navigate("/")
    } catch (error) {
        console.error(error)
    }
};
    
    return(
        <div>
            <h4>Please log in</h4>
            <form action={login}>
                <label>
                    Username: 
                <input type="text" name="Username" />
                </label>
                <label>
                    Password: 
                <input type="password" name="Password" />
                </label>
                <button type="submit">Login</button>
            </form>
            <div>
                error text
            </div>
        </div>

    )
};

export default Login;

//{error === 401 ? <p>Incorrect Credentails</p> : null }