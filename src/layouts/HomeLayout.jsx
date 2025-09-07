import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Main from "../components/Main";

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Home | ClothAid</title>
            </Helmet>
            <Header></Header>
            <Main></Main>
        </div>
    );
};

export default HomeLayout;