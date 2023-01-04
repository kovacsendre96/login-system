import axios from "axios";

export default class UserService {
  async index() {
    return axios
      .get("/api/user")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async logOut() {
    return axios
      .get("/api/logout")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
