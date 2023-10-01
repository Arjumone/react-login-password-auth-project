import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Route = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Route;