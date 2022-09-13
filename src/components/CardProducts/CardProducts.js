import "./Styles.css";
import Button from "../Button/Button";

const CardProducts = ({ id, image, title, price, agregarAlCarro, data }) => {

    return(
        <div className="container">
            <p>{title}</p>
            <img alt={id} src={image} />
            <hr />
            <p>{price}</p>
            <Button onClick={() => agregarAlCarro(title + " $: " + price + " foto: " + image)}>
                Agregar al carro
            </Button>
        </div>
    )   
}

export default CardProducts;