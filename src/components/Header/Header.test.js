import GlobalContext from "../../contexts/GlobalContext";
import Header from "./index";

it("renders without crashing", () => {
  const setIsMenuOpen = jest.fn();

  <GlobalContext value={{ setIsMenuOpen }}>
    <Header />
  </GlobalContext>;

  expect(setIsMenuOpen).toHaveBeenCalledTimes(0);
});
