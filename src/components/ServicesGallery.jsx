import styles from "./ServicesGallery.module.css";

function ServicesGallery({ services }) {
  return (
    <div className={`${styles.containerGallery}`}>
      {services.map((service) => (
        <div className={styles.galleryCard} key={service.id}>
          <img src={service.image} alt={service.title} />
          <h4>{service.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default ServicesGallery;
