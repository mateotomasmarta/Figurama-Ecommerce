import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className={styles.widget}>
            <FaShoppingCart className={styles.icon} />
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </div>
    );
};

export default CartWidget;