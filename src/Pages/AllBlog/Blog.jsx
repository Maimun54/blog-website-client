import { Link } from "react-router-dom";
import swal from "sweetalert";


const Blog = ({blog}) => {
    
    const handleWishList =()=>{
        fetch('http://localhost:5000/wishlist',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(blog)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
          swal("Blog added your WishList");
      }
    })
    }
    return (
        <div>
            <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
                  <figure><img className=" h-[400px]" src={blog.image} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p className="text-sm" >{blog.description}</p>
                    <h2 className="text-2xl py-2 font-medium">Category:{blog.category}</h2>
                    <div className="card-actions justify-between">
                      <Link to={`/blogDetails/${blog._id}`}><button   className="btn btn-primary">Details</button></Link>
                      <button onClick={handleWishList} className="btn btn-primary">WishList</button>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default Blog;