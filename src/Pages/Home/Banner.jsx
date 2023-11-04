

const Banner = () => {
    return (
        <div className="">
            <div className="flex ">
               
                <div className="w-1/2 border">
                    <h2 className="text-6xl font-bold text-center mt-32">Child Care  Expert</h2>

                    <p className="text-2xl py-5 px-5 text-center mt-5 ">From expert advice to personal experiences, we're here to support you on your parenting journey. Join our community of parents and caregivers as we share knowledge, inspiration, and the joys of nurturing the next generation.</p>
                   
                    <button className="btn btn-primary text-center justify-center items-center my-5 lg:ml-44 md:ml-44 ml-24 ">Learn More</button>
                </div>
                <div className="w-1/2  ">
                    <img className="" src="https://i.ibb.co/xHXmjBK/child-care-template-hero-img-bg.png" alt="" />
                </div>
            </div>
    {/* <div className=" min-h-screen ">
  <div className=" flex-col lg:flex-row-reverse">
   <div>
   <img src="https://i.ibb.co/xHXmjBK/child-care-template-hero-img-bg.png" className="max-w-sm rounded-lg shadow-2xl" />
   </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default Banner;