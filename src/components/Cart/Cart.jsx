import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {

    const { cart, removeItem, clear, total } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className={styles.vacio}>
                <h2>Tu carrito está vacío</h2>
                <p>Todavía no agregaste ninguna figura a tu colección.</p>
                <Link to="/" className={styles.volver}>Ver productos</Link>
            </div>
        );
    }

    return (
        <div className={styles.carrito}>
            <h2 className={styles.titulo}>Tu carrito</h2>

            <div className={styles.lista}>
                {cart.map((p) => (
                    <div key={p.id} className={styles.item}>
                        <img src={p.img} alt={p.name} className={styles.img} />
                        <div className={styles.datos}>
                            <h3 className={styles.nombre}>{p.name}</h3>
                            <p className={styles.dato}>Cantidad: {p.quantity}</p>
                            <p className={styles.dato}>Precio unitario: ${p.price}</p>
                            <p className={styles.subtotal}>Subtotal: ${p.price * p.quantity}</p>
                        </div>
                        <button className={styles.eliminar} onClick={() => removeItem(p.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.resumen}>
                <p className={styles.total}>Total: ${total}</p>
                <div className={styles.acciones}>
                    <button className={styles.vaciar} onClick={clear}>Vaciar carrito</button>
                    <Link to="/checkout" className={styles.finalizar}>Finalizar compra</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;