import { useContext } from "react";
import styles from "./styles.module.css";
import arrowIcon from "../../assets/shape.svg";
import GlobalContext from "../../contexts/GlobalContext";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

function HistoricItem() {
  const { item } = useContext(GlobalContext);
  const navigate = useNavigate();

  const backHome = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className={styles.HistoricItem}>
        <div className={styles.HistoricItemBody}>
          <button onClick={backHome} className={styles.ButtonBackHome}>
            <img src={arrowIcon} alt="" />
          </button>
          <p>PLACA</p>
          <span className={styles.ItemPlate}> {item.plate.toUpperCase()}</span>
          <p>STATUS</p>
          <span> {!item.left ? "Não Estacionado" : "Estacionado"}</span>
          <p>TEMPO ATUAL</p>
          <span>
            {" "}
            {item.time
              .replace("seconds", "seg")
              .replace("minutes", "min")
              .replace("hours", "h")
              .replace("days", "D")}
          </span>
          <p>PAGAMENTO</p>
          <span> {item.paid ? "Pago" : "—"}</span>
        </div>
      </div>
    </>
  );
}

export default HistoricItem;
