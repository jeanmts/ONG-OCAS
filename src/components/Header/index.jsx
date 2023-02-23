import logoOcas from "../../assets/ocas-logo.svg"
import "./styles.css";



export default function Header () {
    return (
        <>
        <div className="container-header">
        <img className="logo-img" src={logoOcas} alt="" />
        <ul className="list-header">
            <li className="list-options">Casa</li>
            <li className="list-options">Sobre nós</li>
            <li className="list-options">Campanhas</li>
            <li className="list-options">Galeria</li>
            <li className="list-options">contato</li>
        </ul>
        </div>
        </>
    )
}


