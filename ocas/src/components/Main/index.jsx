import "./styles.css"
import "../../assets/arrow.png"


export default function Main() {

function handleRead() {

    const divRead = document.createElement('div');
    const spanRead = document.createElement('span');
    const divMain = document.querySelector('.container-main');
    const btnRead = document.querySelector('.btn-read');

    spanRead.innerHTML = "lorem ipsum dolor sit amet, consectetur adipiscing";
    spanRead.style.fontFamily = "Roboto";
    spanRead.style.fontSize = "15px";
    spanRead.style.color= "#fff"
    divRead.appendChild(spanRead);
    divMain.appendChild(divRead);
    divMain.removeChild(btnRead);
}
    return (
        <>
        <div className="container-main">
        <h1 className="title-main">Apoie o combate aos incêndios florestais</h1>
        <button onClick={()=> handleRead()}
         className="btn-read">Leia Mais</button>
       </div>
        </>
    )
}