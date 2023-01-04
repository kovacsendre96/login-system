import axios from "axios";

export default class RegistrationService {
  async store(user) {
    return axios
      .post("/api/registration", user)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
