import { useContext } from "react"
import { AuthContex } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContex);
    if (loading) {
        return <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to={'/login'} replace> </Navigate>;

}
export default PrivateRoute;