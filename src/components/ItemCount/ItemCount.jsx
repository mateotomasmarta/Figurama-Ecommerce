import { useState } from "react"
import styles from "./ItemCount.module.css"

const ItemCount = ({ stock }) => {

    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    };
return (
        <div className={styles.contador}>
            <button className={styles.boton} onClick={restar} disabled={cantidad <= 1}>-</button>
            <span className={styles.cantidad}>{cantidad}</span>
            <button className={styles.boton} onClick={sumar} disabled={cantidad >= stock}>+</button>
        </div>
    )
}

export default ItemCount