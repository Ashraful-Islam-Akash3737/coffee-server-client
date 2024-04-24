import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import App from "../App";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;