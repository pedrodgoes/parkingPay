import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EntradaBody from "../../components/EntradaBody";
import SaidaBody from "../../components/SaidaBody";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";
import MenuOpen from "../../components/MenuOpen";

function Home() {
  const { isMenuOpen, isTabOut } = useContext(GlobalContext);

  console.log(isTabOut);

  return (
    <>
      {!isMenuOpen ? (
        <div className={styles.Home}>
          <Header />

          <div className={styles.Body}>
            <Tabs variant="unstyled">
              <TabList>
                <Tab
                  _selected={{
                    color: "#4DD0E1",
                    bg: "white",
                    border: "3px solid #4DD0E1",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  className={styles.Tabs}
                >
                  Entrada
                </Tab>
                <Tab
                  _selected={{
                    color: "#4DD0E1",
                    bg: "white",
                    border: "3px solid #4DD0E1",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  className={styles.Tabs}
                  isSelected={isTabOut}
                >
                  Saída
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <EntradaBody />
                </TabPanel>
                <TabPanel>
                  <SaidaBody />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      ) : (
        <MenuOpen />
      )}
    </>
  );
}

export default Home;
