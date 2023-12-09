import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";



const BlogDetails = () => {
  const {user}=useContext(AuthContext)
   const blogDetails =useLoaderData()
   const {title,image,description,date,long_description,_id}=blogDetails
   console.log(blogDetails)
   const handleComment=e=>{
    e.preventDefault();
    const form =e.target
    // const email=user?.email;
    const comment =form.comment.value;
    console.log(comment)
    

    
    //send data server side
    fetch('http://localhost:5000/comment',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({comment})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}
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

                <div className="text-center py-5">
                  <h2 className="text-2xl font-bold py-2">Type Your comment hear</h2>
                  <form onSubmit={handleComment} >
                  <textarea name="comment"  placeholder="Your comment" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                  <input type="submit" className="btn btn-primary" value="Submit" />
                  </form>
                </div>
        </div>
    );
};

export default BlogDetails;