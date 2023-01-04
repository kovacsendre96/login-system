<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            label="Password"
            required
            type="password"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-btn color="success" class="mr-4" @click="submitLogin">
            Bejelentkezés
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <SnackBar
    color="error"
    :render="renderSnackbar"
    :message="errorMessage"
    :close-function="() => (renderSnackbar = false)"
  />
</template>

<script setup>
import { ref } from "vue";
import SnackBar from "../components/SnackBar.vue";
import LoginService from "../services/loginService";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const renderSnackbar = ref(false);

const registrationService = new LoginService();

const submitLogin = async () => {
  const login = await registrationService.logIn({
    email: email.value,
    password: password.value,
  });
  if (login.status === "error") {
    renderSnackbar.value = true;
    errorMessage.value = login.error;
    return;
  }
  window.location.replace("/welcome");
};
</script>
