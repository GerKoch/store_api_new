import "./Styles.css";

const DetallesCarro = ({ fdata }) => {

    console.log("gerCarro", fdata);

    return (

        <div className="detallesCarro">
            <div>
                <p>{fdata.title}</p>
            </div>
            <img src={fdata.image} alt="" />
            <p>{fdata.price}</p>
        </div>
    )
}

export default DetallesCarro;