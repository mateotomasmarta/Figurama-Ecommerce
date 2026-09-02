import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
    return (
        <div className={styles.widget}>
        <FaShoppingCart className={styles.icon} />
        <span className={styles.badge}>3</span>
        </div>
    );
};

export default CartWidget;