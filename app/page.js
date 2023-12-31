import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

const Home = () => {
    return (
        <div className="flex">

            <SideNavbar />

            <div className="flex-1 md:flex h-screen relative">
                <Header />
                <LeftColumn />
                <RightColumn />
            </div>

        </div>
    );
};

export default Home;