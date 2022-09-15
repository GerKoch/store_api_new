import { useState, useEffect } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import Carrito from "../../components/Carrito/Carrito";
import "./Styles.css";

const Products = () => {

    const apiUrl = "https://fakestoreapi.com/products";

    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [showProducts, setShowProducts] = useState([]);

    const fetchProducts = [];

    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setProds(resp);
                setShowProducts(resp);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
        filtered(e.target.value);
        console.log(e.target.value);
    }

    const filtered = (searchTerm) => {
        const searchResult = prods.filter(element => {
            if (element.title 
                .toString() 
                .toLowerCase() 
                .includes(searchTerm.toLowerCase())
            ) {
                return element;
            }
        });
        setShowProducts(searchResult);
    }


    const [dataCart, setDataCart] = useState([]);

    const agregarAlCarro = (product) => {
        setDataCart([...dataCart, product])
    }

    console.log("gerCart", dataCart);

    return (
        <div>
            <div className="container_input">
                <div>
                    <input className="input"
                        placeholder="Buscar"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="prod">
                {loading && <p>loading...</p>}
                {showProducts.length > 0 &&
                    !loading &&
                    showProducts.map(prod =>
                        <CardProducts
                            key={prod.id}
                            image={prod.image}
                            title={prod.title}
                            price={prod.price}
                            agregarAlCarro={agregarAlCarro}
                        />
                    )}
            </div>
        </div>

    )
}

export default Products;