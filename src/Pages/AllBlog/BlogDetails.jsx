import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";



const BlogDetails = () => {
  const {user}=useContext(AuthContext)
   const blogDetails =useLoaderData()
   const {title,image,description,date,long_description,_id}=blogDetails
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
                    <div className="text-center">
                     { user?.email?
                       <Link to={`/updateBlog/${_id}`}><button className="btn btn-secondary">Update</button></Link> :<p></p>
                     }
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default BlogDetails;