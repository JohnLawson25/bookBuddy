import axios from "axios";
const APILink = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

const Register = () => {
    const register = async (formData) => {
        const firstname = formData.get("Firstname");
        const lastname = formData.get("Lastname");
        const email = formData.get("Email");
        const password = formData.get("Password");
        const user = {
            firstname,
            lastname,
            email,
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
                First Name: 
            <input type="text" name="Firstname" />
            </label>
            <label>
                Lawst Name: 
            <input type="text" name="Lastname" />
            </label>
            <label>
                Email: 
            <input type="email" name="Email" required />
            </label>
            <label>
                Password: 
             <input type="password" name="Password" required />
             </label>
             <button type="submit">Register</button>
        </form>
        </div>
    )
};

export default Register