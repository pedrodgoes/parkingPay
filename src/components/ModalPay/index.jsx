import styles from "./styles.module.css";
import Modal from "react-modal";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";
import axios from "axios";

function ModalPay({ modalPay, title }) {
  const {
    placa,
    setModalPay,
    setModalLoading,
    setModalConfirmed,
    setTextConfirmed,
    setErrorOut,
  } = useContext(GlobalContext);

  const closeModal = () => {
    setModalPay(false);
  };

  const payParking = () => {
    setModalPay(false);
    setModalLoading(true);
    axios
      .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}/pay`)
      .then(() => {
        setTextConfirmed("PAGO");
        setTimeout(() => {
          setModalPay(false);
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
    <div className={styles.ModalPay}>
      <Modal isOpen={modalPay}>
        <div className={styles.ModalPayBody}>
          <p>{title}</p>
          <span>{placa.toUpperCase()}</span>
          <button
            onClick={payParking}
            disabled={placa.length < 8}
            className={styles.ButtonPayModal}
            style={
              placa.length < 8
                ? { backgroundColor: "#DADADA" }
                : { backgroundColor: "#A769B2", color: "white" }
            }
          >
            PAGAMENTO
          </button>

          <button
            onClick={closeModal}
            disabled={placa.length < 8}
            className={styles.ButtonOutModal}
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

export default ModalPay;
