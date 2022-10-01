import fin from "./fin.png"
import { useState } from "react";

function Financeiro(){
    const [get, setValor]= useState('.....');


    const [conteudoValor, setConteudoValor]=useState({
        valor:"-----------",
     })

    function salvarValor(evento){

        evento.preventDefault();
        
        setConteudoValor({valor:get})
    }


    return(
        <div >
            <h1>Financeiro</h1>
            <h1>Simulação de Financiamento</h1>
            <img src={fin}/>
            
            <h2>Nome do cliente: {}</h2>
            <br></br>
            <h2>Calculo do Financiamento</h2>

            <form onSubmit={salvarValor}> 
            
            <label> Valor do financiamento: </label>
            <input placeholder="Informe um valor válido"  valeu={get} 
            onChange={(evento)=>setValor(evento.target.value)}>

            </input>
            <button type="submit">Aplicar</button>
            
            </form>
            <br></br>

            <div className="Financeiro">

                <span>Valor do financiamento: R$ {conteudoValor.valor} </span>
                <br></br>
                <br></br>
                <span>Taxa do financiamento: 10%</span>
                <br></br>
                <br></br>
                <span>Valor a pagar após aplicação da taxa: R$ {conteudoValor.valor * 11/10}</span>
            </div>           
            
        </div>
    )
}
export default Financeiro;