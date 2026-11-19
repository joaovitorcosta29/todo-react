import styles from "./Coluna.module.css"

export default function coluna({titulo, quantidade, children, status}){
    return(
    <section className={`${styles.coluna} ${styles[status]}`}>
            <header className={styles.topo}>

                <h2 className={styles.titulo}>{titulo}
                    <span className={styles.contador}>
                    {quantidade}
                    </span>
                </h2>
            </header>
            {quantidade === 0 ?(
                <p className={styles.vazia}>Nenhuma tarefa aqui</p>
            ) : (
                <ul className={styles.lista}>{children}</ul>
            )}
            
        </section>
    );
}