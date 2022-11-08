import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import CarLoading from "../CarLoading";
import Alert from "@mui/material/Alert";
import RegisterConfirmed from "../RegisterConfirmed";
import useMediaQuery from "../../hooks/useMediaQuery";

function EntradaBody() {
  const [placa, setPlaca] = useState("");
  const [page, setPage] = useState(true);
  const [loadIcon, setLoadIcon] = useState(false);
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  const isDeviceMobile = useMediaQuery("(max-width: 1080px)");

  const getPlaca = (event) => {
    setPlaca(event.target.value);
  };

  const addPlaca = () => {
    setPage(false);
    setLoadIcon(true);
    axios
      .post(`https://parking-lot-to-pfz.herokuapp.com/parking`, {
        headers: {
          "Content-type": "application/json",
        },
        plate: placa,
      })
      .then(() => {
        setTimeout(() => {
          setPage(false);
          setRegister(true);
          setLoadIcon(false);
        }, 2500);

        setTimeout(() => {
          setPage(true);
          setRegister(false);
        }, 6000);
      })
      .catch(() => {
        setTimeout(() => {
          setPage(true);
          setLoadIcon(false);
        }, 2000);

        setTimeout(() => {
          setError(false);
        }, 6000);

        setError(true);
      });
  };

  return (
    <>
      {page && (
        <div className={styles.EntradaBody}>
          <p>Número da placa:</p>
          <input
            placeholder="AAA-0000"
            onChange={(event) => getPlaca(event)}
            maxLength={8}
          />
          {error && (
            <Alert
              severity="error"
              style={
                isDeviceMobile
                  ? { width: 312, marginTop: 13 }
                  : { width: 624, marginTop: 13 }
              }
            >
              Placa inválida ou veículo já estacionado!
            </Alert>
          )}
          <button
            onClick={addPlaca}
            disabled={placa.length < 8}
            style={
              placa.length < 8
                ? { backgroundColor: "#DADADA" }
                : { backgroundColor: "#28DD91", color: "white" }
            }
          >
            CONFIRMAR ENTRADA
          </button>
        </div>
      )}
      {loadIcon && <CarLoading text="Registrando ..." />}
      {register && <RegisterConfirmed text="REGISTRADO!" />}
    </>
  );
}

export default EntradaBody;
