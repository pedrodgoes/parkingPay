import styles from "./styles.module.css";

import carLoading from "../../assets/car-loading-animation.json";
import Lottie from "lottie-react";
import Modal from "react-modal";

function ModalLoading(modalLoading) {
  return (
    <div className={styles.ModalLoading}>
      <Modal isOpen={modalLoading}>
        <div className={styles.ModalLoadingBody}>
          <Lottie
            animationData={carLoading}
            style={{ height: 100, marginTop: 15 }}
          />
          <p>Confirmando ...</p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalLoading;
