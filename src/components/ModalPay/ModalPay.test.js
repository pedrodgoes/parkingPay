import ModalPay from "./index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Chatbot", () => {
  it("returns data when sendMessage is called", (done) => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock
      .onPost("https://parking-lot-to-pfz.herokuapp.com/parking/XXX-1090/pay")
      .reply(204, data);

    ModalPay.sendMessage(0, "any").then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });
});
