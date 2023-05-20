import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import useTitle from "../Hooks/UseTitle";
import TabC from "../TabC/TabC";



const Home = () => {
    useTitle("Home")
    return (
        <div>
           <Banner></Banner>
           <Gallary></Gallary>
           <TabC></TabC>
        </div>
    );
};

export default Home;