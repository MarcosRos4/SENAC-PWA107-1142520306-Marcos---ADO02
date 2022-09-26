import { Link } from "react-router-dom";
import style from './style.css';

function Header(){
    return(
        <header>
            MENUZAO
        <div className="menu">
            <br/> <Link to ='/'>Home</Link> 
            <Link to ='/cadastro'>Cadastro</Link> 
            <Link to ='/contacorrente'>Conta corrente</Link> 
            <Link to ='/sobrenos'>Sobre nós</Link>
            <Link to ='/usesteite'>USESTEITE</Link>
        </div>
        </header>
    )
}

export default Header;