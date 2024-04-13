import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const isAuth = localStorage.getItem("isAuth");
    const location = useLocation();

    // console.log('private location: ',location);

    if (!isAuth) {
        return <Navigate to={"/login"} state={location.pathname} />
    }
    return children;
}

export default PrivateRoutes;