import { useState } from "react";
import Button from "../Button/Button";
import picture from "../Images/52466_0.jpg";
import "./Styles.css";
import BubbleAlert from "../BubbleAlert/BubbleAlert";



const Carrito = () => {

    const [menu, setMenu] = useState(false);

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const toogleFalse = () => {
        setMenu(false);
    }

    console.log(menu)
    
    const toogleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
             <div>
            <span className="bubble">
                <BubbleAlert value={3}/>
            </span>
            <button className="carro" onClick={toogleMenu}>
                Carro
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
        </div>
        
    )
}

export default Carrito;