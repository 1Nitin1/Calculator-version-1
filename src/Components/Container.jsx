import styles from "./Container.module.css";
const Container = ({ children, containerRef }) => {
  return (
    <div className={styles.container} ref={containerRef}>
      {children}
    </div>
  );
};
export default Container;
