import { Outlet } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="font-montserrat w-10/11 mx-auto">
                <HomeLayout></HomeLayout>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;