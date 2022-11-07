import { useContext, useEffect } from "react";
import styles from "./styles.module.css";
import arrowIcon from "../../assets/shape.svg";
import GlobalContext from "../../contexts/GlobalContext";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

function Historic() {
  const { placa, historic, setHistoric, setItem } = useContext(GlobalContext);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}`)
      .then((response) => response.json())
      .then((data) => setHistoric(data))
      .catch(() => {});
  }, [placa, setHistoric]);

  const backHome = () => {
    navigate(-1);
  };

  const getPageItem = (item) => {
    setItem(item);
    setTimeout(() => {
      let path = `/historic-item`;
      navigate(path);
    }, 500);
  };

  return (
    <>
      <Header />
      <div className={styles.Historic}>
        <div className={styles.HeaderHistoric}>
          <button onClick={backHome} className={styles.ButtonBackHome}>
            <img src={arrowIcon} alt="" />
          </button>
          <h1 className={styles.TitleHistoric}>Placa {placa.toUpperCase()}</h1>
        </div>
        <div>
          {historic.length > 0 &&
            historic
              ?.map((item, i) => {
                return (
                  <button
                    className={styles.ButtonCard}
                    key={i}
                    onClick={() => getPageItem(item)}
                  >
                    <div className={styles.BoxPay}>
                      <div>
                        <p>Tempo Total</p>
                        <span>
                          {item.time
                            .replace("seconds", "seg")
                            .replace("minutes", "min")
                            .replace("hours", "h")
                            .replace("days", "D")}
                        </span>
                      </div>
                      <div>
                        <p>Pagamento</p>
                        <span>{item.paid ? "Pago" : "—"}</span>
                      </div>
                    </div>
                  </button>
                );
              })
              .reverse()}
        </div>
      </div>
    </>
  );
}

export default Historic;
