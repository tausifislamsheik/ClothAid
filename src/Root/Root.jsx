import { Outlet } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const Root = () => {
    return (
        <div className="font-montserrat w-10/11 mx-auto">
            <HomeLayout></HomeLayout>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;