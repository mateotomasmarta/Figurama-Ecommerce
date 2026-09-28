import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {

    const { addItem } = useContext(CartContext);

    const handleAdd = (cantidad) => {
        addItem(product, cantidad);
    };

    return (
        <div className={styles.detalle}>

            <div className={styles.imagen}>
                <img src={product.img} alt={product.name} />
            </div>

            <div className={styles.info}>
                <h2>{product.name}</h2>
                <p className={styles.categoria}>{product.category}</p>
                <p className={styles.descripcion}>{product.description}</p>
                <p className={styles.precio}>${product.price}</p>
                <p className={styles.stock}>Stock disponible: {product.stock}</p>

                <ItemCount stock={product.stock} onAdd={handleAdd} />
            </div>

        </div>
    )
}

export default ItemDetail