import { useLoaderData } from "react-router-dom";


const AllBlog = () => {
    const Blogs =useLoaderData()
    console.log(Blogs)
    return (
        <div>
            <div className="flex justify-center gap-5">
    <div className="form-control  w-[300px] pl-20 py-5 ">
  <label className="label">
    <span className="label-text text-2xl font-bold">Category Name</span>
  </label>
     <select name="category_name" className="select select-bordered w-full input-accent ">
  
  <option >Child Develop Parenting</option>
  <option>Child Development</option>
  <option>Health and Safety </option>
  <option>Education and Learning</option>
  <option>Healing and Growth</option>
  <option>Parenting Myths</option>
  
    </select>
     </div>
     <div className="flex pr-20 py-5 mt-12">
     <input name="email"  type="text" placeholder="search here" className="input input-bordered input-accent w-full max-w-xs" />
        <button className="btn btn-primary text-white px-5">Search</button>
     </div>
            </div>
        </div>
    );
};

export default AllBlog;