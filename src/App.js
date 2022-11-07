import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Historic from "./pages/Historic";
import HistoricItem from "./pages/HistoricItem";
import GlobalContext from "./contexts/GlobalContext";

const App = () => {
  const [historic, setHistoric] = useState([]);
  const [placa, setPlaca] = useState("");
  const [item, setItem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalPay, setModalPay] = useState(false);
  const [modalOut, setModalOut] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalConfirmed, setModalConfirmed] = useState(false);
  const [textConfirmed, setTextConfirmed] = useState(false);
  const [errorOut, setErrorOut] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          historic,
          setHistoric,
          placa,
          setPlaca,
          item,
          setItem,
          isMenuOpen,
          setIsMenuOpen,
          modalPay,
          setModalPay,
          modalOut,
          setModalOut,
          modalLoading,
          setModalLoading,
          modalConfirmed,
          setModalConfirmed,
          textConfirmed,
          setTextConfirmed,
          errorOut,
          setErrorOut,
          tabIndex,
          setTabIndex,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="historic" element={<Historic />} exact />
          <Route path="historic-item" element={<HistoricItem />} exact />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
