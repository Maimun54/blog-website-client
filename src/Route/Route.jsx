import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlog from "../Pages/AllBlog/AllBlog";
import FeatureBlog from "../Pages/FeatureBlog/FeatureBlog";
import WishList from "../Pages/WishList/WishList";
import BlogDetails from "../Pages/AllBlog/BlogDetails";
import PrivateProvider from "../Provider/PrivateProvider";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/recentBlog')
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/addBlog',
          element:<PrivateProvider><AddBlog></AddBlog></PrivateProvider>
        },
        {
          path:'/allBlog',
          element:<AllBlog></AllBlog>,
          loader:({params})=>fetch(`http://localhost:5000/allBlog?category?${params.category}`)
        },
        {
          path:'/blogDetails/:id',
          element:<BlogDetails></BlogDetails>,
          loader:({params})=>fetch(`http://localhost:5000/allBlog/${params.id}`)
        },
        {
          path:'/featuredBlogs',
          element:<FeatureBlog></FeatureBlog>
        },
        {
          path:'/wishlist',
          element:<PrivateProvider><WishList></WishList></PrivateProvider>,
          // loader:()=>fetch(`http://localhost:5000/wishlist`)
          // loader:()=>fetch(`http://localhost:5000/wishlist?email=${user?.email}`)

        }
      ]
    },
  ]);

  export default router