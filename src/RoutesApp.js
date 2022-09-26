import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Mamaco/header";


import Rome from "./peides/Rome";
import Cadastro from "./peides/Cadastro";
import Sobre from "./peides/Sobre";
import Erro from "./peides/Erro";
import Financeiro from "./peides/Financeiro";
import CCorrente from "./peides/ContaCorrente";


function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Rome/>}/>
            <Route path="/financeiro" element={<Financeiro/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/sobrenos" element={<Sobre/>}/>
            <Route path="/cc" element={<CCorrente/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )

}
export default RouterApp;
