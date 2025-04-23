import "./index.css";
import { useState } from "react";
import Tarefas from "./components/Tarefas";
import AddTarefas from "./components/AddTarefas";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      title: "Estudar Vite",
      description:
        "Estudar Programação para se tornar desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Props React",
      description: "Estudar Programação Propriedades do React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar useState",
      description: "Estudar Estado/State REact",
      isCompleted: false,
    },
  ]);

  //Essa função é chamada quando essa Tarefa for
  function okTarefas(tarefasId) {
    const newTarefas = tarefas.map((tarefas) => {
      if (tarefas.id === tarefasId) {
        return { ...tarefas, isCompleted: !tarefas.isCompleted };
      }

      return tarefas;
    });

    setTarefas(newTarefas);
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w=[500]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas
          </h1>

          <AddTarefas />

          <Tarefas tarefas={tarefas} okTarefas={okTarefas} />
        </div>
      </div>
    </>
  );
}

export default App;
