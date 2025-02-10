import { useEffect } from "react";

import ServicesGallery from "../components/ServicesGallery";
import { services } from "../data/servicesData";
import styles from "./Services.module.css";

function Services() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <section>
        <div className={`container ${styles.containerServices}`}>
          <h2>Our Services</h2>

          <ServicesGallery services={services} />
        </div>
      </section>
    </main>
  );
}

export default Services;
