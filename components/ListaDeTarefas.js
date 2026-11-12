import { tarefasIniciais } from "./dados";
import TarefaItem from "./TarefaItem";

export default function ListaDeTarefas() {
    return (
        <ul>
            {tarefasIniciais.map((tarefa) => (
                <TarefaItem key={tarefa.id} tarefa={tarefa} />
            ))}
        </ul>
    );
}