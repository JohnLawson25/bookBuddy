import {NavLink, useNavigate} from "react-router"


const NavBar = ({user, setUser}) => {
    const navigate = useNavigate();

    const logOut = () => {
        setUser({})
        window.localStorage.removeItem("token")
        navigate("/")
    };

    return(
        <nav className="NavBar">
            <NavLink className="Nav1" to="/">Home</NavLink>
            
            {user.id ? (<span>
            <NavLink className="Nav2"  to="/ProfilePage">Profile</NavLink>
            <a className="Nav2" href="" onClick={() => {
                
                logOut()}}>Log out</a>
            </span>) : (<span>
            <NavLink className="Nav2" to="/Login">Login</NavLink>
            <NavLink className="Nav2" to="/Register">Register</NavLink>
            </span>
        )}
        </nav>
        
    )
};


export default NavBar