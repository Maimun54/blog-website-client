import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BlogSecton from "./BlogSecton";
import Newlatter from "./Newlatter";


const Home = () => {
    const recentBlog =useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <BlogSecton></BlogSecton>
            <Newlatter></Newlatter>
            <h2>BLog:{recentBlog.length}</h2>
        </div>
    );
};

export default Home;