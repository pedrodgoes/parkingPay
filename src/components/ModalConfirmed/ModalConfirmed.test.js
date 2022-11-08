import GlobalContext from "../../contexts/GlobalContext";
import ModalConfirmed from "./index";

it("renders without crashing", () => {
  const textConfirmed = jest.fn();
  const setIsPay = jest.fn();

  <GlobalContext value={{ textConfirmed, setIsPay }}>
    <ModalConfirmed />
  </GlobalContext>;

  expect(textConfirmed).toHaveBeenCalledTimes(0);
  expect(setIsPay).toHaveBeenCalledTimes(0);
});
