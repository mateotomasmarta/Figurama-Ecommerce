import { useState, useEffect } from "react";
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductById("1")
            .then((productos) => {
                setProducto(productos);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return <ItemDetail product={producto} />;
};

export default ItemDetailContainer;