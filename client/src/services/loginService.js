import axios from "axios";

export default class LoginService {
  async logIn(user) {
    return axios
      .post("/api/login", user)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
