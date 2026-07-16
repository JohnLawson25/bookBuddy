import {NavLink} from "react-router"

const NavBar = () => {
    return(
        <nav>
            <h1> Hi John</h1>
            <NavLink to="/">Home</NavLink>
            {UserActivation.id ? (<span>
            <NavLink to="/ProfilePage">Profile</NavLink>

            </span>) : (<span>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Register">Register</NavLink>
            </span>)}
        </nav>
        
    )
};


export default NavBar