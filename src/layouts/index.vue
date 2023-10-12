<script setup lang="ts">
import Navbar from "./Navbar/index.vue";

defineOptions({
  name: "Layout",
});
</script>

<template>
  <div class="font-chinese antialiased">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
