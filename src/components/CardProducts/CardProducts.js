import "./Styles.css";
import Button from "../Button/Button";

const CardProducts = ({ id, image, title, price }) => {

    return(
        <div className="container">
            <p>{title}</p>
            <img alt={id} src={image} />
            <hr />
            <p>{price}</p>
            <Button onClick={() => {console.log("No hace nada")}}>
                Agregar al carro
            </Button>
        </div>
    )   
}

export default CardProducts;