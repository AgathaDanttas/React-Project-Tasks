import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function TarefasPages() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button className="absolute left-0 mb-6 text-slate-100">
            <ChevronLeftIcon/>
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>

        </div>

        <div className="bg-slate-200 p-4 rounded-md ">
          <h2 className="text-xl text-slate-700 font-bold">{title}</h2>
          <p className="text-slate-700">{ description}</p>
        </div>
      </div>
    </div>
  );
}

export default TarefasPages;
