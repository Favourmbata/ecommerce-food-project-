import Home from "../features/Home";
import Layout from "../component/Layout";


export const Routes = [

    {
        path: "",
        element: <Layout/>,
        children: [

            {
                path: "",
                element: <Home/>,
            }


            ]


    }
    ]