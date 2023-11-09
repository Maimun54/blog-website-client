

import Banner from "./Banner";

import Newsletter from "./Newsletter";
import BlogSection from "./BlogSection";
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {

   const awareness =useLoaderData();


    return (
        <div>
            <Banner></Banner>
            
            <BlogSection></BlogSection>
            

    <div className="xl:flex xl:px-20 lg:pr-20 py-20">
        <div className="xl:w-1/2 ">
        <h2 className="lg:text-3xl md:text-3xl text-2xl font-bold text-center tracking-wide	 mt-16">Watch the video and learn how to protect <br /> your family from everyday hazards!</h2>
        <p className="text-2xl text-center mt-5 leading-normal p-5">
         In this informative video, discover essential strategies and practical tips to ensure your child's safety in a world filled with everyday hazards. We'll guide you through key insights, precautions, and preventive measures that every parent should know to create a secure environment for their little ones.
                    </p>
                    </div>
             <div className="xl:w-1/2  lg:pr-10">
             <img className="relative lg:w-full  md:ml-20 md:w-[600px]" src="https://i.ibb.co/SdsJ1Ws/serv6.jpg" alt="" />
             <div className="lg:pl-52" >
             <img className="w-24  md:ml-64 md:-mt-52 xl:-mt-60  lg:-mt-72 -mt-40 ml-40 xl:ml-20 lg:ml-40 absolute pl-10" src="https://i.ibb.co/2vbJQdY/player.png" alt="" />
             </div>
         </div>
            </div>
            
            <Newsletter></Newsletter>
             <div>
                <div className="">
                <h2 className="text-5xl text-center py-10 font-bold">
                    <span className="text-red-500 ">Helpful Link</span> and Popular Tropics
                </h2>
                
                </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 lg:py-5">
                {
                 awareness.map(item=><div key={item._id}>

    <Link ><div  className=" card card-compact  m-5 bg-base-100 shadow-xl">
      <figure><img className="w-[500px] h-[300px]" src={item.image} alt="brad car" /></figure>
       <div className="card-body">
       <h2 className="card-title text-center">{item.title}</h2>
      </div>
      </div></Link>
                 </div>)
                }
               </div>
                <div >
                
                </div>
             </div>


        </div>
    );
};

export default Home;