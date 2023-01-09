import axios from "axios";

export default class Transaction {
  makeOrder(state) {
    return axios
      .post(`${import.meta.env.VITE_PUBLIC_API_URL}/transaction/makeOrder`, {
        ...state,
      })
      .then((res) => res.data);
  }
}
