import styles from "./LoadingSpinner.module.css";

// Props Interface
interface LoadingSpinnerProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}
// MOSTLY USED FOR BUTTONS
function LoadingSpinner({
  backgroundColor = "",
  size = "medium",
}: LoadingSpinnerProps) {
  return (
    <div className={styles.spinner_container}>
      <span
        style={{ backgroundColor: backgroundColor }}
        className={`${styles.loader} ${size ? styles[`size_${size}`] : ""}`}
      ></span>
    </div>
  );
}

export default LoadingSpinner;
