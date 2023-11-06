import { useLoaderData } from "react-router-dom";



const BlogDetails = () => {
   const blogDetails =useLoaderData()
   const {title,category,image,description,date,long_description}=blogDetails
   console.log(blogDetails)
    return (
        <div>
          <div className="card  card-compact  bg-base-100 shadow-xl">
                  <figure><img className="w-[500px]" src={image} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="text-xl" >{description}</p>
                    <p className="text-xl"><span className="text-2xl font-bold"> Longly Description:</span>{long_description}</p>
                    
                    <h2 className="text-2xl font-bold">Date:{date}</h2>
                    
                  </div>
                </div>
        </div>
    );
};

export default BlogDetails;