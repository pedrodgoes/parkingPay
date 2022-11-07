import styles from "./styles.module.css";
import logo from "../../assets/logo_parking.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";

function MenuOpen() {
  const { isMenuOpen, setIsMenuOpen, setTabIndex } = useContext(GlobalContext);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToEntrada = () => {
    setIsMenuOpen(false);
    setTabIndex(0);
  };

  const goToSaida = () => {
    setIsMenuOpen(false);
    setTabIndex(1);
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
