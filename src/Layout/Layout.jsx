import {Outlet} from "react-router"
import NavBar from "./NavBar";

const Layout = () => {
    return(
        <span>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </span>
    )
};


export default Layout