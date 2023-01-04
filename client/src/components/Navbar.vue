<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        theme="dark"
        @click="rail = false"
      >
        <v-list-item v-if="rail">
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-right"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-list-item v-else>
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-list density="compact" nav>
          <RouterLink class="ma-2" :to="{ name: 'Welcome' }">
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Főoldal"
              value="home"
            ></v-list-item>
          </RouterLink>
          <RouterLink v-if="!user" class="ma-2" :to="{ name: 'Login' }">
            <v-list-item
              prepend-icon="mdi-account"
              title="Bejelentkezés"
              value="account"
            ></v-list-item>
          </RouterLink>
          <RouterLink v-if="!user" class="ma-2" :to="{ name: 'Register' }">
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Regisztráció"
              value="users"
            ></v-list-item>
          </RouterLink>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Kijelentkezés"
            value="kijelentkezés"
            @click="logout"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import UserService from "../services/userService";
const userService = new UserService();

const drawer = ref(true);
const rail = ref(true);
const user = ref();
const loading = ref(true);

const getUser = async () => {
  user.value = await userService.index();
};

onMounted(async () => {
  await getUser();
  loading.value = false;
});

const logout = async () => {
  await userService.logOut();
  window.location.reload();
};
</script>
