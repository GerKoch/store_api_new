import "./Styles.css";
import Button from "../Button/Button";

const CardProducts = ({ agregarAlCarro, data }) => {
        
    return(
        <div className="container">
            <p>{data.title}</p>
            <img alt={data.id} src={data.image} />
            <hr />
            <p>{data.price}</p>
            <Button onClick={() => agregarAlCarro(data)}>
                Agregar al carro
            </Button>
        </div>
    )   
}

export default CardProducts;