import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader/Loader";
import styles from "./Checkout.module.css";

const Checkout = () => {

    const { cart, total, clear } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const [datos, setDatos] = useState({
        nombre: "",
        telefono: "",
        direccion: "",
        ciudad: ""
    });

    const [ordenId, setOrdenId] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!datos.nombre || !datos.telefono || !datos.direccion || !datos.ciudad) {
            setError("Completá todos los campos");
            return;
        }

        setCargando(true);

        const orden = {
            userId: user.uid,
            userEmail: user.email,
            comprador: datos,
            productos: cart.map((p) => ({
                id: p.id,
                name: p.name,
                price: p.price,
                quantity: p.quantity
            })),
            total: total,
            fecha: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), orden);
            setOrdenId(docRef.id);
            clear();
        } catch (err) {
            console.error(err);
            setError("No se pudo generar la orden. Intentá nuevamente.");
        } finally {
            setCargando(false);
        }
    };

    if (ordenId) {
        return (
            <div className={styles.exito}>
                <h2>¡Compra registrada!</h2>
                <p>Tu número de orden es:</p>
                <p className={styles.ordenId}>{ordenId}</p>
                <Link to="/" className={styles.volver}>Volver al catálogo</Link>
            </div>
        );
    }

    if (cart.length === 0) return <Navigate to="/cart" />;

    if (cargando) return <Loader mensaje="Generando tu orden..." />;

    return (
        <div className={styles.contenedor}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Datos de entrega</h2>

                <input name="nombre" placeholder="Nombre y apellido" className={styles.input} value={datos.nombre} onChange={handleChange} />
                <input name="telefono" placeholder="Teléfono" className={styles.input} value={datos.telefono} onChange={handleChange} />
                <input name="direccion" placeholder="Dirección" className={styles.input} value={datos.direccion} onChange={handleChange} />
                <input name="ciudad" placeholder="Ciudad" className={styles.input} value={datos.ciudad} onChange={handleChange} />

                {error && <p className={styles.error}>{error}</p>}

                <p className={styles.total}>Total a pagar: ${total}</p>

                <button type="submit" className={styles.boton}>Confirmar compra</button>
            </form>
        </div>
    );
};

export default Checkout;