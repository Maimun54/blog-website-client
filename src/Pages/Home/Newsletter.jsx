import swal from "sweetalert";


const Newsletter = () => {
  const handleEmailSubmit =e=>{
    e.preventDefault()
    const email =e.target.email.value 
    console.log(email)
    fetch('https://blog-website-server-pearl.vercel.app/subscribe',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
              swal("oww!", "Thank you for subscribing to our newsletter !", "success")
            }
           
        })
  }
    return (
  <div className="lg:px-24 lg:mt-24 md:px-24 ">
  <div className=" w-full shadow-2xl rounded-lg mb-5 bg-black/50 hero xl:h-[600px] lg:h-[300px] md:h-[250px] hero-overlay" style={{backgroundImage:'url(https://i.ibb.co/gJNdSWV/child-care-template-cta-blob-shape-bg-2.jpg)'}}>
  
  {/* https://i.ibb.co/pf9jXsb/child-care-template-cta-blob-shape-bg-1.jpg */}
  
    <div  className="text-center">
     <h2 className="lg:text-5xl md:text-3xl ml-10 font-bold text-black">Subscribe to Our Newsletter
    </h2>
    <p className="md:py-5">Stay informed and connected. Subscribe to our newsletter for the latest updates, tips, <br /> and exclusive content delivered directly to your inbox. Join our community today!</p>
     <div>
     <form onSubmit={handleEmailSubmit}>
     <input name="email"  type="text" placeholder="Type here" className="input input-bordered py-5 md:py-3 input-accent w-full max-w-xs" />
        <button className="btn btn-primary text-white px-5 lg:py-0 md:py-0 py-2">Subscribe</button>
     </form>
     </div>
    </div>
    </div>
   </div>
    );
};

export default Newsletter;