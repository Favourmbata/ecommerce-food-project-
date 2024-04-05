
import './App.css';
import {Routes} from "./route"
import {useRoutes} from "react-router-dom"
// import GoChow from "./component/GoChow";
// import Product from "./component/Product";


function App() {
    return (

        useRoutes(Routes)
    );
}

export default App;