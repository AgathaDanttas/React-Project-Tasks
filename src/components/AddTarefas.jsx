import { useState } from "react";
    
function AddTarefas({ onAddTarefasEnviar }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(title, description);

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o Titulo da Tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={title}
                onChange={ (event) => setTitle(event.target.value) }
                />
            <input type="text" placeholder="Digite o Descrição da Tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={ (event) => setDescription(event.target.value) }
            />
            
            <button onClick={() => {
                //verificando se o título e a descrição estão preenchidos
                if (!title.trim() && !description.trim()) {
                    return alert("Prencha todos os campos.");
                }
                onAddTarefasEnviar(title, description)
                setTitle("")
                setDescription("")
            }}
             className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar
        </button>
        </div>
    )
}

export default AddTarefas;
