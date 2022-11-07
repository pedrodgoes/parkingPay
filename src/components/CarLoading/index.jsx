import Lottie from "lottie-react";
import styles from "./styles.module.css";
import carLoading from "../../assets/car-loading-animation.json";

function CarLoading({ text }) {
  return (
    <div className={styles.CarLoading}>
      <Lottie
        animationData={carLoading}
        style={{ height: 100, marginTop: 15 }}
      />
      <p>{text}</p>
    </div>
  );
}

export default CarLoading;
