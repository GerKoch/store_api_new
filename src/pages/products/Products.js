import { useState, useEffect } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import "./Styles.css";

const Products = () => {

    const apiUrl = "https://fakestoreapi.com/products";

    const [prods, setProds] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setProds(resp);
            })
    }, [])

    const [dataCart, setDataCart] = useState([]);

    const agregarAlCarro = (product) => {
        setDataCart([...dataCart, product])
    }

    console.log("gerCart", dataCart);

    return (
        <div className="prod">
                {prods.map(prod =>
                    <CardProducts
                        key={prod.id}
                        image={prod.image}
                        title={prod.title}
                        price={prod.price}
                        agregarAlCarro={agregarAlCarro}
                    />
                )}
        </div>
    )
}

export default Products;