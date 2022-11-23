import Navbar from "components/Navbar";
import NewsDetail from "components/NewsDetail";

const Home = () => {
    return(
        <div className="flex flex-col mx-[280px]">
            <Navbar/>
            <NewsDetail/>
        </div>
    )
}

export default Home;