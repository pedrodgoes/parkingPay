import styles from "./styles.module.css";
import iconRegister from "../../assets/registrado.svg";
import Modal from "react-modal";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

function ModalConfirmed(modalConfirmed) {
  const { textConfirmed } = useContext(GlobalContext);
  return (
    <div className={styles.ModalConfirmed}>
      <Modal isOpen={modalConfirmed}>
        <div className={styles.ModalConfirmedBody}>
          <img src={iconRegister} alt="" />
          <p>{textConfirmed}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalConfirmed;
