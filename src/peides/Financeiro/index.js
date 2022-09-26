import fin from "./fin.png"
import { useState } from "react";
import Cadastro from "../Cadastro";

function Financeiro(){
    const [valor, setValor]= useState('.....');

    const [quantiaValor, setquantiaValor]=useState({
        quantidade:"-----------"
     })

    function solicitarValor(evento){

        evento.preventDefault();
        setquantiaValor({quantidade:valor})
    }

    function calculaTaxa(){
        
        const taxa = valor * 1.1;
        return taxa;
    }

    return(
        <div>
            <h1>Financeiro</h1>
            <h1>Simulação de Financiamento</h1>
            <img src={fin}/>
            
            <h2>Nome do cliente: {}</h2>
            <br></br>
            <h2>Calculo do Financiamento</h2>
            <form onSubmit={solicitarValor}>
            <label> Valor Solicitado: </label>
            <input valeu={valor} 
            onChange={(evento)=>setValor(evento.target.value)}></input>
            
            <button type="submit">Calcular Financeiro</button>
            </form>
            <br></br>
            <label onSubmit={calculaTaxa}>Taxa de juros: 10% | Valor total: {calculaTaxa}</label>
            <br></br>
            <label onSubmit={calculaTaxa}></label>



            
            
        </div>
    )
}
export default Financeiro;