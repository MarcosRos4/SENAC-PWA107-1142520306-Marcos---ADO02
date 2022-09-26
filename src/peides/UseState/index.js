import ste from "./ste.png"
import {useState} from 'react'

function Steite(){
    const nomeCliente = "JSX";
    const [nome, setNome] = useState ("--------");
    return(
        <div>
            <h1>TELA DO USESTEITE</h1>
            <h3>TOP TEXT</h3>
            <img src={ste}/>
            <h2>BOTTOM TEXT</h2>
            <h1>useState</h1>
            <p>O Sr. {nomeCliente} é classificado como {nome}</p>
            <div>
                <button type='button'
                onClick={()=>setNome("Platina")}>Cliente Platina</button>
                <button type='button'
                onClick={()=>setNome("Ouro")}>Cliente Ouro</button>
                <button type='button'
                onClick={()=>setNome("Plata")}>Cliente Plata</button>
            </div>
        
        </div>
    )
}
export default Steite;