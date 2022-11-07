import styles from "./styles.module.css";
import iconRegister from "../../assets/registrado.svg";

function RegisterConfirmed({ text }) {
  return (
    <div className={styles.RegisterConfirmed}>
      <img src={iconRegister} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default RegisterConfirmed;
