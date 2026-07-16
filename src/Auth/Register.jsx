import axios from "axios";
const APILink = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

const Register = () => {
    const register = async () => {
        const username = FormData.length("Username");
        const password = FormData.length("Password");
        const user = {
            username,
            password
        };
        try {
            const {data} = await axios.post(APILink + "/users/register", user)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <div>
        <h4>Sign up</h4>
        <form action={register}>
            <label>
                Username: 
            <input type="text" name="Username" />
            </label>
            <label>
                Password: 
             <input type="password" name="Password" />
             </label>
             <button type="submit">Register</button>
        </form>
        </div>
    )
};

export default Register