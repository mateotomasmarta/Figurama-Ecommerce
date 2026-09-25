import { getProducts} from "../../mock/asyncMock";
import styles from "./ItemListContainer.module.css";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
        const [items, setItems]=useState([]);
    useEffect(() => {
        getProducts().then((productos) =>{
            setItems(productos);
        });
    }, [])
    return (
        <main className={styles.container}>
        <h2 className={styles.greeting}>{greeting}</h2>
        <ItemList products={items} />
        </main>
    );
};

export default ItemListContainer;