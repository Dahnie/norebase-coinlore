import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  // Functions, States and Variables
  const navigate = useNavigate();
  return (
    <main className={styles.not_found_page_container}>
      <section className={styles.not_found_details_container}>
        {/* Not_found Primary Text */}
        <h2 className={styles.not_found_primary_text_wrapper}>
          This page doesn't exist
        </h2>
        {/* Not_found Secondary Text */}
        <h5 className={styles.not_found_secondary_text_wrapper}>
          Click on the button below to go back
        </h5>
        {/* Go to signin */}
        <button
          aria-label="Go Back Button"
          className={styles.go_back_button_wrapper}
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </section>
    </main>
  );
}

export default NotFound;
