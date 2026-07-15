import {outlet} from "react-router"
import NavBar from "./NavBar";

const Layout = () => {
    return(
        <NavBar >
        <div>
            <outlet />
        </div>
        </NavBar>
    )
};


export default Layout