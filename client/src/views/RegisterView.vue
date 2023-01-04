<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="firstName"
            label="Keresztnév"
            type="name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="lastName"
            label="Vezetéknév"
            type="name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="email"
            type="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            label="Jelszó"
            required
            type="password"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="phone"
            label="Telefonszám"
            required
            type="phone"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn color="success" class="mr-4" @click="submitRegister">
            Regisztráció
          </v-btn>
        </v-col>
        <v-col cols="12">
          Van már fiókod?
          <RouterLink v-if="!user" class="ma-2" :to="{ name: 'Login' }"
            >Bejelentkezés</RouterLink
          >
        </v-col>
      </v-row>
    </v-container>
    <SnackBar
      color="error"
      :render="renderSnackbar"
      :message="errorMessage"
      :close-function="() => (renderSnackbar = false)"
    />
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import SnackBar from "../components/SnackBar.vue";
import RegistrationService from "../services/registrationService";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const errorMessage = ref("");
const renderSnackbar = ref(false);

const registrationService = new RegistrationService();

const submitRegister = async () => {
  const user = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };
  const registration = await registrationService.store(user);
  if (registration.status === "error") {
    renderSnackbar.value = true;
    errorMessage.value = registration.error;
    return;
  }
  window.location.replace("/welcome");
};
</script>
