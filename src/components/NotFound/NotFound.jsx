import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            {/* un h2 con el mensaje de error */}
            {/* un p con algo corto */}
            <Link to="/">Volver al inicio</Link>
        </div>
    );
};

export default NotFound;