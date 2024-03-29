import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import PropertyListGuest from "../../components/propertyListGuest/PropertyListGuest";
import EmailForm from "../../components/emailForm/EmailForm";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <PropertyListGuest />
                <EmailForm />
                <Footer />
            </div>
        </div>
    )
};

export default Home;