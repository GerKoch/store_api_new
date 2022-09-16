import { useState } from "react";
import Button from "../Button/Button";
import picture from "../Images/52466_0.jpg";
import "./Styles.css";
import BubbleAlert from "../BubbleAlert/BubbleAlert";



const Carrito = ({ fdata }) => {

    const [menu, setMenu] = useState(false);

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const toogleFalse = () => {
        setMenu(false);
    }

    const toogleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
            <div>
                <button className="carro" onClick={toogleMenu}>
                    Carrito
                </button>
            </div>

            <div className={show1}>
                <div className={show2}>
                    <div className="carrito__close" onClick={toogleFalse}>
                        <span>X</span>
                    </div>
                    <h2>Su carrito</h2>
                    <div className="carrito__center">
                        <div className="carrito__item">
                            <div>
                               <p>{fdata.title}</p>
                            </div>
                            <img src={fdata.image} alt="" />
                            <p>{fdata.price}</p>
                        </div>
                        <Button>Payment</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrito;