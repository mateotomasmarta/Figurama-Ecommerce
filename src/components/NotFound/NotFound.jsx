import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.codigo}>404</h1>
            <h2 className={styles.titulo}>Página no encontrada</h2>
            <p className={styles.texto}>
                La ruta que buscás no existe o fue movida a otra dimensión.
            </p>
            <Link to="/" className={styles.volver}>Volver al inicio</Link>
        </div>
    );
};

export default NotFound;