import styles from "./styles.module.css";
import logo from "../../assets/logo_parking.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MenuOpen() {
  const { isMenuOpen, setIsMenuOpen, setIsTabOut } = useContext(GlobalContext);
  let navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToEntrada = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      let path = `/`;
      navigate(path);
    }, 200);
  };

  const goToSaida = () => {
    setIsMenuOpen(false);
    setIsTabOut(true);
  };

  return (
    <div className={styles.MenuOpen}>
      <div className={styles.HeaderMenuOpen}>
        <img src={logo} alt="" />
        <button onClick={closeMenu}>
          {isMenuOpen ? <img src={close} alt="" /> : <img src={menu} alt="" />}
        </button>
      </div>
      <div className={styles.BodyMenuOpen}>
        <button onClick={goToEntrada}>Entrada</button>
        <button onClick={goToSaida}>Saída</button>
      </div>
    </div>
  );
}

export default MenuOpen;
