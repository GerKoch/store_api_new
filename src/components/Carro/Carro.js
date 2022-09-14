import "./Styles.css";
import BubbleAlert from "../BubbleAlert/BubbleAlert";
import { useState } from "react";

const Carro = () => {
   
    const [menu, setMenu] = useState(false);

   

    return(
        <div>
            <span className="bubble">
                <BubbleAlert value={3}/>
            </span>
            <button className="carro" onClick={toogleMenu}>
                Carro
            </button>
        </div>
    )
}

export default Carro;