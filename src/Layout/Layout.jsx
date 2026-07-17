import {Outlet} from "react-router"
import NavBar from "./NavBar";

const Layout = ({user}) => {
    return(
        <span>
            <NavBar user={user} />
            <div>
                <Outlet />
            </div>
        </span>
    )
};


export default Layout