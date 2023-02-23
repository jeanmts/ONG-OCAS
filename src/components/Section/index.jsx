import "./styles.css";
import iconMenu from "../../assets/iconMenu.svg"

export default function Section(){
    return (
        <>
        <div className="container-section">
            <div className="section-1">
                <div >
                <div className="border-top"></div>
                <h3 className="h3-section">Sobre a ONG OCAS</h3>
                <h2 className="h2-section">Temos boas-vindas a ONG</h2>
                <p className="p-section">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aliquid quasi iste dicta ut. Aperiam officia veritatis, rem quam eligendi illum ea quasi eveniet alias facere, nihil error. Quod, dolor?</p>
                <button className="btn-read-section">Leia Mais</button>
                </div>
            <img className="img-section" src={iconMenu} alt="" />
            </div>
            <div className="section-2">
                <span className="strong-section-2">"</span>
                <h3 className="h3-section-2">OCAS é uma ong necessária</h3>
                <span className="span-section-2">Samuel Jr.</span>
            </div>
        </div>
        </>
    ) 
}
