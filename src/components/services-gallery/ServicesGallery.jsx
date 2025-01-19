import styles from "./ServicesGallery.module.css";
import ATS from "../../assets/auto-transmission-service.jpg";
import brake from "../../assets/brake-repair.jpg";
import COI from "../../assets/coi.jpg";
import Diagnosis from "../../assets/scan-vehicle.jpg";
import LogBook from "../../assets/log-book.jpg";
import WheelBalancing from "../../assets/wheel-balancing.jpg";

const ServicesGallery = () => {
  return (
    <div className={`${styles.containerGallery}`}>
      <div className={styles.galleryCard}>
        <img src={ATS} alt="logo" />
        <h3>Auto Transmission Service</h3>
      </div>

      <div className={styles.galleryCard}>
        <img src={brake} alt="logo" />
        <h3>Brake Repair Pads & Rotors</h3>
      </div>

      <div className={styles.galleryCard}>
        <img src={COI} alt="logo" />
        <h3>COI for Uber, Taxi & Trucks</h3>
      </div>

      <div className={styles.galleryCard}>
        <img src={Diagnosis} alt="logo" />
        <h3>System Diagnosis & Repair</h3>
      </div>

      <div className={styles.galleryCard}>
        <img src={LogBook} alt="logo" />
        <h3>Log Book Service</h3>
      </div>

      <div className={styles.galleryCard}>
        <img src={WheelBalancing} alt="logo" />
        <h3>Tyres & Wheel Balancing</h3>
      </div>
    </div>
  );
};

export default ServicesGallery;
