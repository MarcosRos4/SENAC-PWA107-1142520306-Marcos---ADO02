import {Link} from "react-router-dom";
import {useState} from 'react';


function ContaCorrente(){

    const [saque, setSaque] = useState(0);
    const [deposito, setDeposito] = useState(0);
    const [saldof, setSaldof] = useState(0);

    function add_sub(evento){

        evento.preventDefault();
        alert("Trasnferencia concluida!!!!")


        console.log(deposito);
        console.log(saldof);


        setSaldof(parseInt(saldof)+parseInt(deposito)-parseInt(saque));



    }


    return(

        <div className="CCorrente">


        <h1>Conta corrente</h1>
        <br/>
        <h2>Deposito: </h2>
        <br/>
        
        <input
        placeholder="interrogacao"
        onChange={(event)=>setDeposito(evento.target.value)}>
        
        </input>
        <br/>
        <h2>Saque: </h2>
        <br/>
        <input
        placeholder="interrogacao"
        onChange={(evento)=>setSaque(evento.target.value)}>

        </input>

        <button type = "submit">OK</button>

        <div id = "Saldof">

        <span>Saldo atual e de: {saldof}</span>


        </div>





        </div>
    )
   
}
export default ContaCorrente;