import styles from "./Coluna.module.css";

export default function Coluna(titulo, quantidade, children, status) {
  return (
    <section className={`${styles[status]}`}>
      <header className={styles.topo}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <span className={styles.contador}>{quantidade}</span>
      </header>
      {quantidade === 0 ? (
        <p className={styles.vazia}>Nenhuma tarefa aqui.</p>
      ) : (
        <ul className={styles.lista}>{children}</ul>
      )}
    </section>
  );
}
