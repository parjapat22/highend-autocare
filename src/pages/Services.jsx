import ServicesGallery from "../components/ServicesGallery";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <main>
      <section>
        <div className={`container ${styles.containerServices}`}>
          <h2>Our Services</h2>

          <ServicesGallery />
        </div>
      </section>
    </main>
  );
};
export default Services;
