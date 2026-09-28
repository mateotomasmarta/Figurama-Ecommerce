import { useState, useEffect } from "react";
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((producto) => {
                setProducto(producto);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return <ItemDetail product={producto} />;
};

export default ItemDetailContainer;