
import { Link } from "react-router-dom";
import Banner from "./Banner";
import BlogSecton from "./BlogSecton";
import Newlatter from "./Newlatter";


const Home = () => {
   


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
            
            <Newlatter></Newlatter>
             <div>
                <div className="">
                <h2 className="text-5xl text-center py-5 font-bold">
                    <span className="text-red-500 ">Helpful Link</span> and Popular Tropics
                </h2>
               <h2>Online Safety</h2>
               <h2>The eSafety Quide</h2>
               <h2>Spacial Needs Child</h2>
               <h2>Online Seftey</h2>
                </div>
                <div >
                
                </div>
             </div>

        </div>
    );
};

export default Home;