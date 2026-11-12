"use client";

import { useState } from "react";

export default function FormTarefa(aoAdicionar) {
    const [texto, setTexto] = useState("");
    const [error, setErro] = useState("");
    
    const enviar = (event) => {
        event.preventDefault();
        if(texto.trim() === ""){
            setErro("Digite uma tarefa!");
            return;
        }
        aoAdicionar(texto.trim());
        setTexto("");
        setErro("");
    };

    return(
        <form className="formulario" onSubmit={enviar}>
            <input value={texto} onChange={(event) => setTexto(event.target.value)} />
        </form>
    )
}