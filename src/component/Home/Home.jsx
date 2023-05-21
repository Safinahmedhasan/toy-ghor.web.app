import Banner from "../Banner/Banner";
import BestSellingToyCar from "../BestSellingToyCar/BestSellingToyCar";
import CustomerReview from "../CustomerReview/CustomerReview";
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
           <BestSellingToyCar></BestSellingToyCar>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;