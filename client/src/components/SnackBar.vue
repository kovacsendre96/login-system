<template>
  <div class="text-center">
    <v-snackbar
      elevation="24"
      :color="color"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  render: Boolean,
  message: String,
  color: String,
  closeFunction: Function,
});

const snackbar = ref();
const text = ref();
const timeout = ref(1500);

watch(
  () => props.render,
  (newRender) => {
    snackbar.value = newRender;
    setTimeout(() => {
      props.closeFunction();
    }, timeout.value);
  }
);

watch(
  () => props.message,
  (newMessage) => {
    text.value = newMessage;
  }
);
</script>
