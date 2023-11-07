import {  useLoaderData } from "react-router-dom";

import Blog from "./Blog";
import { useState } from "react";
const categories =[
    'Child_Develop_Parenting',
    'Child_Development',
    'Health_Safety ',
    'Education_Learning',
     'Healing_Growth',
    'Parenting_Myths']

const AllBlog = () => {
    const Blogs =useLoaderData()
    const [category,setCategory]=useState('')
    console.log(Blogs)

    
    return (
        <div>
            <div className="flex justify-center gap-5">
    <div className="form-control  w-[300px] pl-20 py-5 ">
  <label className="label">
    <span className="label-text text-2xl font-bold">Category Name</span>
  </label>
     <select  name="category_name" className="select select-bordered w-full input-accent ">
  
  <option disabled selected >Choose one</option>
  <option >Child_Develop_Parenting</option>
  <option>Child_Development</option>
  <option>Health_Safety </option>
  <option>Education_Learning</option>
  <option>Healing_Growth</option>
  <option>Parenting_Myths</option>
  
    </select>
    
     </div>
     <div className="flex pr-20 py-5 mt-12">
     <input name="email"  type="text" placeholder="search here" className="input input-bordered input-accent w-full max-w-xs" />
        <button className="btn btn-primary text-white px-5">Search</button>
     </div>
            </div>
            <div className="">
            <label className="label">
    <span className="label-text text-2xl font-bold">
        Category
    </span>
  </label>
  <select onChange={(e)=>setCategory(e.target.value)} className="input input-bordered" >
    <option disabled selected>Choose one</option>
    {categories.map((category)=>
    (<option className="text-red-200"  key={category} value={category}>

    </option>
    ))}
  </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 px-10 ">
                {
                    Blogs?.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default AllBlog;