import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ products }) => {
    return (
        <div className={styles.lista}>
            {products.map((product) => (
                <Item key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ItemList;