import { TrashIcon } from "lucide-react";
import { Trash2 } from "lucide-react";
import { DeleteIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

function Tarefas(props) {
  return (
    <>

      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tarefas.map((tarefas) => (
          <li key={tarefas.id} className="flex gap-2">
            <button
              onClick={() => props.okTarefas(tarefas.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${tarefas.isCompleted && "line-through"}`}>  
              {tarefas.title}
            </button>

            <button className="bg-slate-400 p-2 rounded-md text-white">
              <ChevronRightIcon />
            </button>
            <button
              onDeleteTarefasClick={() => props.onDeleteTarefasClick}
              className="bg-slate-400 p-2 rounded-md text-white">
              <TrashIcon/>
            </button>
        
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tarefas;
