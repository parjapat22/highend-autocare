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
        <h4>Auto Transmission Service</h4>
      </div>

      <div className={styles.galleryCard}>
        <img src={brake} alt="logo" />
        <h4>Brake Repair Pads & Rotors</h4>
      </div>

      <div className={styles.galleryCard}>
        <img src={COI} alt="logo" />
        <h4>COI for Uber, Taxi & Trucks</h4>
      </div>

      <div className={styles.galleryCard}>
        <img src={Diagnosis} alt="logo" />
        <h4>System Diagnosis & Repair</h4>
      </div>

      <div className={styles.galleryCard}>
        <img src={LogBook} alt="logo" />
        <h4>Log Book Service</h4>
      </div>

      <div className={styles.galleryCard}>
        <img src={WheelBalancing} alt="logo" />
        <h4>Tyres & Wheel Balancing</h4>
      </div>
    </div>
  );
};

export default ServicesGallery;
