import {Outlet} from "react-router"
import NavBar from "./NavBar";

const Layout = ({user, setUser}) => {
    return(
        <span>
            <NavBar user={user} setUser={setUser} />
            <div>
                <Outlet />
            </div>
        </span>
    )
};


export default Layout