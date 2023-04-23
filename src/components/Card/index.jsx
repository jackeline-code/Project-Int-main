import { useLayoutEffect, useState } from "react";
import "./styles.css";
import "../MainContent/index";


export const Card = ({ hasChip }) => {
    const [Petnome, setPetNome] = useState("");
    const [idade, setIdade] = useState("");
    const [raca, setRaca] = useState("");
    const [petGender, setPetGender] = useState("");
    const [isChipped, setIsChipped] = useState("");
    const [isSterilized, setIsSterilized] = useState("");
    const [v8, setV8] = useState("");
    const [v10, setV10] = useState("");
    const [antirabica, setAntirabica] = useState("");
    const [gripeCanina, setGripeCanina] = useState("");
    const [giardia, setGiardia] = useState("");
    const [leishmaniose, setLeishmaniose] = useState("");

    useLayoutEffect(() => {
        const recoveredPet = localStorage.getItem("user"); //aqui é o nome da classe
        //aqui vai os dados do pet
        if(recoveredPet) {
            const petClass = JSON.parse(recoveredPet);
                                   
            setPetNome(petClass.nome); 
            setIdade(petClass.idade);
            setRaca(petClass.raca);
            setPetGender(petClass.gender);
            setIsChipped(petClass.chip); 
            setIsSterilized(petClass.castrado);   
            setV8(petClass.v8);
            setV10(petClass.v10);
            setAntirabica(petClass.antirabica);
            setGripeCanina(petClass.gripeCanina);
            setGiardia(petClass.giardia);
            setLeishmaniose(petClass.leishmaniose);           

        }       
        
    }, []);
    return (
        <div className="card-container">
            <div className="card-header">
                <h3>{Petnome}</h3>
            </div>
            <div className="card-content">
                <p><span>Idade:</span> {idade} Anos</p>
                <p><span>Raça:</span> {raca}</p>
                <p><span>Gênero:</span> {petGender}</p>
                <p><span>Possui chip:</span> {isChipped}</p>
                <p><span>Possui chip:</span> {isSterilized}</p>
                <p><span>V8:</span> {v8}</p>
                <p><span>V10:</span> {v10}</p>
                <p><span>Antirábica:</span> {antirabica}</p>
                <p><span>Gripe Canina:</span> {gripeCanina}</p>
                <p><span>Giardia:</span> {giardia}</p>
                <p><span>Leishmaniose:</span> {leishmaniose}</p>               

            </div>
        </div>
    );
    
}
