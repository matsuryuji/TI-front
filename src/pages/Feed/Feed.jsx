import Footer from "components/Footer";
import Navbar from "components/Navbar";
import NewsFeed from "components/NewsFeed";

const Feed = () => {
    return(
        <div className="flex flex-col">
            <Navbar/>
            <div className="mt-[100px]">
            <NewsFeed/>
            </div>
            <Footer/>
        </div>
    )
}

export default Feed;