import styles from "./header.module.css";


export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Your Notes</h1>
      <button className={styles.closeButton} onClick={() => console.log("1")}>X</button>
    </div>
  );
};

