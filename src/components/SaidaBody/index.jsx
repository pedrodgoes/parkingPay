import styles from "./styles.module.css";
import { useContext } from "react";
import Alert from "@mui/material/Alert";
import GlobalContext from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import ModalPay from "../ModalPay";
import ModalLoading from "../ModalLoading";
import ModalConfirmed from "../ModalConfirmed";
import ModalOut from "../ModalOut";

function SaidaBody() {
  const {
    placa,
    setPlaca,
    modalPay,
    setModalPay,
    modalOut,
    setModalOut,
    modalLoading,
    modalConfirmed,
    isPay,
    errorOut,
  } = useContext(GlobalContext);
  let navigate = useNavigate();

  const titlePay = "Confirma o pagamento da placa abaixo?";
  const titleOut = "Confirma a saída do veiculo da placa abaixo?";

  const getPlaca = (event) => {
    setPlaca(event.target.value);
  };

  const browseHistoric = () => {
    let path = `/historic`;
    navigate(path);
  };

  const handleModalPay = () => {
    setModalPay(true);
  };

  const handleModalOut = () => {
    setModalOut(true);
  };

  return (
    <>
      <div className={styles.SaidaBody}>
        <p>Número da placa:</p>
        <input
          placeholder={placa ? placa : "AAA-0000"}
          onChange={(event) => getPlaca(event)}
          maxLength={8}
          defaultValue={placa ? placa : ""}
        />
        {errorOut && (
          <Alert severity="error" style={{ width: 312, marginTop: 13 }}>
            Placa inválida, veículo já pago ou liberado!
          </Alert>
        )}
        <button
          onClick={handleModalPay}
          disabled={placa.length < 8}
          className={styles.ButtonPay}
          style={
            placa.length < 8
              ? { backgroundColor: "#DADADA" }
              : { backgroundColor: "#A769B2", color: "white" }
          }
        >
          PAGAMENTO
        </button>
        {!isPay && !errorOut && (
          <Alert severity="info" style={{ width: 312, marginTop: 13 }}>
            É preciso realizar o pagamento para liberar a saída!
          </Alert>
        )}
        <button
          onClick={handleModalOut}
          disabled={placa.length < 8 && !isPay}
          className={styles.ButtonOut}
          style={
            placa.length < 8
              ? { backgroundColor: "#DADADA" }
              : { backgroundColor: "white", color: "#A769B2" }
          }
        >
          SAÍDA
        </button>

        <button
          onClick={browseHistoric}
          disabled={placa.length < 8}
          className={styles.ButtonHistory}
        >
          VER HISTÓRICO
        </button>
      </div>
      {modalPay && <ModalPay modalPay={modalPay} title={titlePay} />}
      {isPay && modalOut && <ModalOut modalOut={modalOut} title={titleOut} />}
      {modalLoading && <ModalLoading modalLoading={modalLoading} />}
      {modalConfirmed && <ModalConfirmed modalConfirmed={modalConfirmed} />}
    </>
  );
}

export default SaidaBody;
