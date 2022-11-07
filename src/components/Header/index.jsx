import styles from "./styles.module.css";
import logo from "../../assets/logo_parking.svg";
import menu from "../../assets/menu.svg";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";

function Header() {
  const { setIsMenuOpen } = useContext(GlobalContext);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className={styles.Header}>
      <img src={logo} alt="" />
      <button onClick={openMenu}>
        <img src={menu} alt="" />
      </button>
    </div>
  );
}

export default Header;
