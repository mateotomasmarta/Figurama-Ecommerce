import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader/Loader";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <Loader mensaje="Verificando sesión..." />;

    if (!user) return <Navigate to="/login" />;

    return children;
};

export default ProtectedRoute;