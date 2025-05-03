import { TrashIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tarefas({ tarefas, okTarefas, onDeleteTarefasClick }) {
  const navigate = useNavigate();

  function onSeeDetalhesClick(tarefa) {
    const query = new URLSearchParams();
    query.set("title", tarefa.title);
    query.set("description", tarefa.description);

    navigate(`/tarefas?${query.toString()}`);
  }
  return (
    <>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="flex gap-2">
            {/* Botão para marcar como concluída */}
            <button
              onClick={() => okTarefas(tarefa.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                tarefa.isCompleted && "line-through"
              }`}
            >
              {tarefa.title}
            </button>

            {/* Botão de ação futura (Chevron) */}
            <button
              onClick={() => onSeeDetalhesClick(tarefa)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>

            {/* Botão para deletar a tarefa */}
            <button
              onClick={() => onDeleteTarefasClick(tarefa.id)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tarefas;
