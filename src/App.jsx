import "./index.css";
import { useState } from "react";
import Tarefas from "./components/Tarefas";
import AddTarefas from "./components/AddTarefas";
import { v4 } from 'uuid'//gera um novo ID
import { useEffect } from "react";

function App() {
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem("tarefasKey")) || []
  );

  //Essa função Cria um efeito quando algo se "altera", nesse caso sempre que o usuario adicionar uma tarefa vai aver um salvamento do navegador
  useEffect(() => { 
    localStorage.setItem("tarefasKey", JSON.stringify(tarefas) );
    console.log("Tarefas foi alterada");
  }, [tarefas]);

  //Essa função é chamada quando essa Tarefa for marcada como concluída
  function okTarefas(tarefasId) {
    const newTarefas = tarefas.map((tarefas) => {
      //Preciso atualizar a tarefa
      if (tarefas.id === tarefasId) {
        return { ...tarefas, isCompleted: !tarefas.isCompleted };
      }
      //Não preciso atualizar a tarefa
      return tarefas;
    });

    setTarefas(newTarefas);
  }

  //Essa Função Deleta as Tarefas
  function onDeleteTarefasClick(tarefasId) {
    const newTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefasId); // Corrigido o nome do parâmetro e a lógica.
    setTarefas(newTarefas);
  }

  //função add tarefas
  function onAddTarefasEnviar(title,description) {
    const newTarefas = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }

    //a lista vai ter tudo que tem anteriomente, e a nova tarefa
    setTarefas ([...tarefas, newTarefas])
  }


  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w=[500] space-y-4">

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas
          </h1>


          <AddTarefas
            onAddTarefasEnviar={onAddTarefasEnviar}
          />
          <Tarefas
            tarefas={tarefas}
            okTarefas={okTarefas}
            onDeleteTarefasClick={onDeleteTarefasClick}
          />

        </div>
      </div>
    </>
  );
}

export default App;
