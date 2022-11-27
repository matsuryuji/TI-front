import Footer from "components/Footer";
import Navbar from "components/Navbar";
import NewsDetail from "components/NewsDetail";

const Home = () => {
    return(
        <div className="flex flex-col">
            <Navbar/>
            <div className="mt-[100px]">
            <NewsDetail/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;