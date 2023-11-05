

const Newlatter = () => {
    return (
   <div className="px-24 mt-24  ">
     <div className=" w-full shadow-2xl rounded-lg mb-5 bg-black/50 hero h-[600px] hero-overlay" style={{backgroundImage:'url(https://i.ibb.co/pf9jXsb/child-care-template-cta-blob-shape-bg-1.jpg)'}}>
    <div  className="text-center">
     <h2 className="text-5xl ml-10 font-bold text-black">Subscribe to Our Newsletter
    </h2>
    <p className="py-5">Stay informed and connected. Subscribe to our newsletter for the latest updates, tips, <br /> and exclusive content delivered directly to your inbox. Join our community today!</p>
     <div>
     <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        <button className="btn btn-primary text-white px-5">Subscribe</button>
     </div>
    </div>
    </div>
   </div>
    );
};

export default Newlatter;