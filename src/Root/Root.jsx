import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            <div className="font-montserrat w-10/11 mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;