import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import ThemeToggle from "../hooks/ThemeToggle";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ThemeToggle></ThemeToggle>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;