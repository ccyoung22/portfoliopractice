import styles from "./style.module.css";

function Index({ title, description, src, link, color }) {
  return (
    <div className={styles.cardContainer}>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        {/* <div className={styles.body}> */}
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Index;
