import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <main className={styles.container}>
        <h2 className={styles.greeting}>{greeting}</h2>
        </main>
    );
};

export default ItemListContainer;