import { getProducts} from "../../mock/asyncMock";
import styles from "./ItemListContainer.module.css";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams();
    const [items, setItems]=useState([]);
    useEffect(() => {
        getProducts().then((productos) => {
    if (id) {
        setItems(productos.filter((p) => p.category === id));
    } else {
        setItems(productos);
    }
    });
    }, [id])
    return (
        <main className={styles.container}>
        <h2 className={styles.greeting}>{greeting}</h2>
        <ItemList products={items} />
        </main>
    );
};

export default ItemListContainer;