import {useState} from 'react';

function Cadastro(){

    const [nome, setNome]= useState('.....');


    const [dadosCliente, setDadosCliente]=useState({
        nomeCliente:"-----------",
     })

    function cadastrarCliente(evento){

        


        evento.preventDefault();
        alert("Cliente cadastrado com sucesso!!!!");

        setDadosCliente({

            nomeCliente:nome

        })
    }



    return(
        <div>
            <h1>Pagina Cadastro</h1>
            <form onSubmit={cadastrarCliente}> 
            
            <label> Nome do cliente: </label>
            <input placeholder="Informe o nome do cliente"  valeu={nome} 
            onChange={(evento)=>setNome(evento.target.value)}>

            </input>
            <button type="submit">Cadastrar</button>
            
            </form>
            <br></br>

            <div>

                <span>Nome do cliente: {dadosCliente.nomeCliente} </span>

            </div>

            
        </div>
        
    )
}

export default Cadastro;
