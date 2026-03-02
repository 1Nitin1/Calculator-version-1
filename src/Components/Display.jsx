import styles from "./Display.module.css";
function Display({ text, displayRef }) {
  return (
    <div className={styles.disp} ref={displayRef}>
      {text || "0"}
    </div>
  );
}
export default Display;
