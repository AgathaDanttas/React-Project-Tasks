import { useSearchParams } from "react-router-dom";

function TarefasPages() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col  p-6 text-white">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TarefasPages;
