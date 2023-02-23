import { useState } from "react"
import "./styles.css"

const Form = ({
    listTransactions,
    setListTransactions,
}) =>{
    
    const [getValue, setGetValue] = useState("");
    const [description, setDescription] = useState("");
    const [getType, setGetType] = useState("Entrada");
    const [getIndex, setGetIndex] = useState(0);

    const createTransaction = () => {
        setListTransactions([
            ...listTransactions,
            {getValue, description, getType, getIndex},
        ]);
        setGetIndex(listTransactions.length + 1)
    }

    return (
        <form className="AllForm" onSubmit={(e)=>e.preventDefault()}>
            
                <label className="label_form">Descrição
                    <input className="input_descripton"
                    value={description}
                    placeholder="Digite a descrição"
                    onChange={(e)=>setDescription(e.target.value)}/>  
                </label>


            <div className="div_FormValue">
                <label>Valor
                    <input className="input_value"
                    value={getValue}
                    type={"Number"}
                    placeholder="Digite o valor"
                    onChange={(e)=>setGetValue(e.target.value)}
                    />
                </label>
                    <label>Tipo de valor
                        <select
                        value={getType}
                        onChange={(e)=>setGetType(e.target.value)}
                        >
                            <option value="Entrada">Entrada</option>
                            <option value="Despesas">Despesas</option>
                        </select>
                    </label>    
            </div>
            <div>
             <button className="btn_value" onClick={createTransaction}>Adicionar a conta</button>

            </div>
        </form>
    )
}

export default Form