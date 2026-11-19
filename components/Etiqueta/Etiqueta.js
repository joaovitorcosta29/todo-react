import styles from "./Etiqueta.module.css";

const PRIORIDADES = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

export default function Etiqueta( prioridade ) {
  <span className={`${styles.etiqueta} ${styles[prioridade]}`}>
    {PRIORIDADES[prioridade]}
  </span>;
}
