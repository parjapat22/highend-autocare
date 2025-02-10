import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.mainPageError}>
      <section className={styles.sectionPageError}>
        <div className={`container ${styles.containerPageError}`}>
          <h2>The page you are looking for could not be found 😢</h2>

          <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>
      </section>
    </main>
  );
}

export default ErrorPage;
