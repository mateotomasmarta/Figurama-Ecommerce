import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const docRef = doc(db, "products", id);

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProducto({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setError("El producto no existe");
                }
            })
            .catch((err) => {
                console.error(err);
                setError("No se pudo cargar el producto");
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader mensaje="Cargando producto..." />;
    if (error) return <p style={{ textAlign: "center", padding: "60px" }}>{error}</p>;

    return <ItemDetail product={producto} />;
};

export default ItemDetailContainer;