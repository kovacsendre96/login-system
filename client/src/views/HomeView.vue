<template>
  <v-card
    v-if="!user && !loading"
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title> Üdvözöllek </template>
    <v-card-text
      >A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot
    </v-card-text>
  </v-card>

  <v-card v-else class="mx-auto" width="400" prepend-icon="mdi-home">
    <template v-slot:title> Üdvözöllek </template>

    <v-card-text> {{ user.first_name }} {{ user.last_name }} </v-card-text>
    <v-card-text> {{ user.email }} </v-card-text>
    <v-card-text> {{ user.phone }} </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import UserService from "../services/userService";
const userService = new UserService();
const user = ref({ first_name: "", last_name: "" });
const loading = ref(true);

onMounted(async () => {
  user.value = await userService.index();
  loading.value = false;
});
</script>
