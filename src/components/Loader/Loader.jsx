import styles from "./Loader.module.css";

const Loader = ({ mensaje = "Cargando..." }) => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.spinner}></div>
            <p className={styles.texto}>{mensaje}</p>
        </div>
    );
};

export default Loader;