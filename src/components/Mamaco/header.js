import { Link } from "react-router-dom";
import style from './style.css';

function Header(){
    return(
        <header>
            TUNKADO
        <div className="menu">
            <br/> <Link to ='/'>Home</Link> 
            <Link to ='/cadastro'>Cadastro</Link> 
            <Link to ='/cc'>Conta corrente</Link> 
            <Link to ='/sobrenos'>Sobre nós</Link>
            <Link to ='/financeiro'>Financeiro</Link>
        </div>
        </header>
    )
}

export default Header;