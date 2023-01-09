<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent :location="menuPosition">
        <template v-slot:prepend>
          <v-list-item
            v-if="user"
            lines="two"
            :title="`${user.first_name} ${user.last_name}`"
            subtitle="Bejelentkezve"
          ></v-list-item>
          <v-list-item
            v-else
            lines="two"
            title="Nincs bejelentkezve"
            subtitle=""
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav v-if="user">
          <RouterLink :to="{ name: 'Welcome' }">
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home"
            ></v-list-item>
          </RouterLink>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Kijelentkezés"
            value="account"
            @click="logout"
          ></v-list-item>
        </v-list>
        <v-list density="compact" nav v-else>
          <RouterLink :to="{ name: 'Welcome' }">
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home"
            ></v-list-item>
          </RouterLink>
          <RouterLink :to="{ name: 'Login' }">
            <v-list-item
              prepend-icon="mdi-login"
              title="Bejelentkezés"
              value="account"
            ></v-list-item>
          </RouterLink>
          <RouterLink :to="{ name: 'Registration' }">
            <v-list-item
              prepend-icon="mdi-account-plus"
              title="Regisztráció"
              value="users"
            ></v-list-item>
          </RouterLink>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <slot name="content" />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import UserService from "../services/userService";

const userService = new UserService();

const user = ref();
const loading = ref(true);
const menuPosition = ref("left");

const getUser = async () => {
  user.value = await userService.index();
};
const resize = (width) => {
  if (window.innerWidth < 768) {
    menuPosition.value = "top";
  } else {
    menuPosition.value = "left";
  }
};
onMounted(async () => {
  await getUser();
  loading.value = false;
  resize(window.innerWidth);
  window.addEventListener("resize", (e) => {
    const innerWidth = e.target.innerWidth;
    resize(innerWidth);
  });
});

const logout = async () => {
  await userService.logOut();
  window.location.reload();
};
</script>

<style>
a {
  color: #202020;
  text-decoration: none;
}
</style>
