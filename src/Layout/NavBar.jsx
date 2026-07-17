import {NavLink, useNavigate} from "react-router"


const NavBar = ({user, setUser}) => {
    const navigate = useNavigate();

    const logOut = () => {
        setUser({})
        window.localStorage.removeItem("token")
        navigate("/")
    };

    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            
            {user.id ? (<span>
            <NavLink to="/ProfilePage">Profile</NavLink>
            <a href="" onClick={() => {logOut}}>Log out</a>
            </span>) : (<span>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Register">Register</NavLink>
            </span>
        )}
        </nav>
        
    )
};


export default NavBar