import { Helmet } from "react-helmet";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Home || ClothAid</title>
            </Helmet>
            <Header></Header>
        </div>
    );
};

export default HomeLayout;