import Home from "../features/Home";
import Layout from "../component/Layout";
import Product from "../component/Product";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
// import Community from "../features/Community";
// import Blog from "../component/Blog";


export const Routes = [

    {
        path: "",
        element: <Layout/>,
        children: [

            {
                path: "",
                element: <Home/>,
            },


            {
                path: "/product",
                element: <Product/>
            },

            {
                path: "/blog",
                element: <Blog/>
            },

            {
                path: "/contact",
                element: <Contact/>
            },


        ]


    }



    ]