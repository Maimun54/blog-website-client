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
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import Errorpage from "../Pages/Error/Errorpage";
import EducationalActivity from "../Pages/Educational Activity/EducationalActivity";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://blog-website-server-pearl.vercel.app/recentBlog')
            
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
          loader:({params})=>fetch(`https://blog-website-server-pearl.vercel.app/allBlog?category?${params.category}`)
        },
        {
          path:'/blogDetails/:id',
          element:<BlogDetails></BlogDetails>,
          loader:({params})=>fetch(`https://blog-website-server-pearl.vercel.app/allBlog/${params.id}`)
        },
        {
          path:'/featuredBlogs',
          element:<FeatureBlog></FeatureBlog>
        },
        {
          path:'/EducationalActivity',
          element:<EducationalActivity></EducationalActivity>
        },
        {
          path:'/wishlist',
          element:<PrivateProvider><WishList></WishList></PrivateProvider>,
        },
        {
          path:'/updateBlog/:id',
          element:<PrivateProvider><UpdateBlog></UpdateBlog></PrivateProvider>,
          loader:({params})=>fetch(`https://blog-website-server-pearl.vercel.app/allBlog/${params.id}`)
        }
      ]
    },
  ]);

  export default router