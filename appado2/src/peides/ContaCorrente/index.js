
import {useState} from 'react';
import './stylecontacorrente.css';

function ContaCorrente(){

    const [saque, setSaque] = useState(0);
    const [deposito, setDeposito] = useState(0);
    const [saldof, setSaldof] = useState(0);

    function add_sub(event){

        event.preventDefault();
        alert("Trasnferencia concluida!!!!")


        console.log(deposito);
        console.log(saldof);


        setSaldof(parseInt(saldof)+parseInt(deposito)-parseInt(saque));

            




    }


    return(

        <div className="CCorrente">
<h1 align='center'>Conta Corrente</h1>

<form onSubmit={add_sub}>

<p>Deposito:
<input 
placeholder="-----"
onChange={(evento)=>setDeposito(evento.target.value)}>

</input>
 </p>


<p>Saque: 
<input
placeholder="-----" 
onChange={(evento)=>setSaque(evento.target.value)}>

</input>
</p>


<button type="submit">Confirmar</button>

</form>

 <div id = "Saldof">


    
 <br></br>
    <span>Saldo atual: {saldof} </span>

</div>



        </div>
    )
   
}
export default ContaCorrente;