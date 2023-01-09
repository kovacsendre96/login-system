<template>
  <Navbar>
    <template v-slot:content>
      <router-view />
    </template>
  </Navbar>
  <div class="pa-0"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import UserService from "../services/userService";
const userService = new UserService();
const user = ref();
const loading = ref(true);

const getUser = async () => {
  user.value = await userService.index();
};

onMounted(async () => {
  await getUser();
  loading.value = false;
});
</script>
