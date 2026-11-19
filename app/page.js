import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaDeTarefas from "@/components/Quadro/Quadro";

export default function Home() {
  return (
    <>
      <Cabecalho titulo="To do List" subtitulo="Aula23" />
      <main>
        <ListaDeTarefas />
      </main>
    </>
  );
}
