import styles from "./Item.module.css";

const Item = ({ product }) => {
    return (
        <article className={styles.card}>
            <img 
                src={product.img} 
                alt={product.name} 
                className={styles.img} 
            />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
        </article>
    );
};

export default Item;