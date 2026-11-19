"use client";

import { useState } from "react";

const PRIORIDADES = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

export default function TarefaItem({
  tarefa,
  aoExcluir,
  aoEditar,
}) {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(tarefa.descricao);
  const prioridade = tarefa.prioridade || "media";

  const salvarEdicao = () => {
    const limpo = texto.trim();
    if (limpo !== "") {
      aoEditar(tarefa.id, limpo);
    } else {
      setTexto(tarefa.descricao);
    }
    setEditando(false);
  };

  const teclaNaEdicao = (event) => {
    if (event.key === "Enter") {
      salvarEdicao();
    } else if (event.key === "Escape") {
      setTexto(tarefa.descricao);
      setEditando(false);
    }
  };

  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
      {editando ? (
      <input
        className="editar"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        onKeyDown={teclaNaEdicao}
        autoFocus
        aria-label="Editar tarefa"
      />
      ) : (
      <label onDoubleClick={() => setEditando(true)}>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => aoConcluir(tarefa.id)}
        />
        <span>{tarefa.descricao}</span>
      </label>
      )}
        <span className={"etiqueta " + prioridade}>
          {PRIORIDADES[prioridade]}
        </span>

      <button
        type="button"
        className="botao-secundario"
        onClick={() => aoExcluir(tarefa.id)}
      >
        Excluir   
      </button>
    </li>
  );
}
