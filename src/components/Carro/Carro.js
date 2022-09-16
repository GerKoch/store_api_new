import "./Styles.css";
import BubbleAlert from "../BubbleAlert/BubbleAlert";
import DetallesCarro from "../DetallesCarro/DetallesCarro";



const Carro = ({ fdata }) => {
   

    return(
        <div>
            <span className="bubble">
                <BubbleAlert value={3}/>
            </span>
            <button className="carro">
                Carro
            </button>
            <DetallesCarro />
            
        </div>
    )
}

export default Carro;