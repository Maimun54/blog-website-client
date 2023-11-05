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
            

            <div className="flex px-20 py-20">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold text-center tracking-wide	 mt-16">Watch the video and learn how to protect <br /> your family from everyday hazards!</h2>
                    <p className="text-2xl text-center mt-5 leading-normal p-5">
                    In this informative video, discover essential strategies and practical tips to ensure your child's safety in a world filled with everyday hazards. We'll guide you through key insights, precautions, and preventive measures that every parent should know to create a secure environment for their little ones.
                    </p>
                    </div>
             <div className="w-1/2">
             <img className="relative" src="https://i.ibb.co/SdsJ1Ws/serv6.jpg" alt="" />
             <div className="pl-52" >
             <img className="w-24 -mt-60 -mr-20 absolute pl-10" src="https://i.ibb.co/2vbJQdY/player.png" alt="" />
             </div>
         </div>
            </div>
            <h2>BLog:{recentBlog.length}</h2>
            <Newlatter></Newlatter>
        </div>
    );
};

export default Home;