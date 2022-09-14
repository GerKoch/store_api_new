import Button from "../Button/Button";
import picture from "../Images/52466_0.jpg";
import "./Styles.css";

const Carrito = () => {
    return (
        <div className="carritos show">
            <div className="carrito show">
                <div className="carrito__close">
                    <span>X</span>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    <div className="carrito__item">
                        <img src={picture} alt="" />
                        <div>
                            <h3>title</h3>
                            <p className="price">$123</p>
                        </div>
                        <div>
                            <p className="cantidad">1</p>
                        </div>
                        <div className="remove__item">
                            <spam>Trash</spam>
                        </div>
                        <div className="carrito__footer">
                            <h3>Total: $2334</h3>
                        </div>
                        <Button>Payment</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito;