import styles from "./styles.module.css";
import Modal from "react-modal";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";
import axios from "axios";

function ModalOut({ modalOut, title }) {
  const {
    placa,
    setModalOut,
    setModalLoading,
    setModalConfirmed,
    setTextConfirmed,
    setErrorOut,
    setIsOut,
  } = useContext(GlobalContext);

  const closeModal = () => {
    setModalOut(false);
  };

  const outParking = () => {
    setModalOut(false);
    setModalLoading(true);
    axios
      .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}/out`)
      .then(() => {
        setTextConfirmed("SAÍDA LIBERADA");
        setIsOut(true);
        setTimeout(() => {
          setModalOut(false);
          setModalConfirmed(true);
          setModalLoading(false);
        }, 2500);
        setTimeout(() => {
          setModalConfirmed(false);
        }, 6000);
      })
      .catch(() => {
        setTimeout(() => {
          setModalLoading(false);
        }, 2000);

        setTimeout(() => {
          setErrorOut(false);
        }, 6000);

        setErrorOut(true);
      });
  };

  return (
    <div className={styles.ModalOut}>
      <Modal isOpen={modalOut}>
        <div className={styles.ModalOutBody}>
          <p>{title}</p>
          <span>{placa.toUpperCase()}</span>
          <button
            onClick={outParking}
            disabled={placa.length < 8}
            className={styles.ButtonOutModal}
            style={
              placa.length < 8
                ? { backgroundColor: "#DADADA" }
                : { backgroundColor: "#A769B2", color: "white" }
            }
          >
            LIBERAR SAÍDA
          </button>

          <button
            onClick={closeModal}
            disabled={placa.length < 8}
            className={styles.ButtonCloseModal}
            style={
              placa.length < 8
                ? { backgroundColor: "#DADADA" }
                : { backgroundColor: "white", color: "#4DD0E1" }
            }
          >
            VOLTAR
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalOut;
