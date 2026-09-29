import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const productsRef = collection(db, "products");
        const q = id ? query(productsRef, where("category", "==", id)) : productsRef;

        getDocs(q)
            .then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setItems(docs);
            })
            .catch((err) => {
                console.error(err);
                setError("No se pudieron cargar los productos");
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader mensaje="Cargando productos..." />;

    if (error) {
        return (
            <div className={styles.aviso}>
                <h3 className={styles.avisoTitulo}>Algo salió mal</h3>
                <p className={styles.avisoTexto}>{error}</p>
                <Link to="/" className={styles.avisoLink}>Reintentar</Link>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className={styles.aviso}>
                <h3 className={styles.avisoTitulo}>No hay figuras en esta categoría</h3>
                <p className={styles.avisoTexto}>Todavía no cargamos productos de {id}. Probá con otra sección.</p>
                <Link to="/" className={styles.avisoLink}>Ver todo el catálogo</Link>
            </div>
        );
    }

    return (
        <main className={styles.container}>
            <h2 className={styles.greeting}>{greeting}</h2>
            <ItemList products={items} />
        </main>
    );
};

export default ItemListContainer;