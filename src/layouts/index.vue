<script setup lang="ts">
import Navbar from "./Navbar/index.vue";
import Container from "./Container/index.vue";

defineOptions({
  name: "Layout",
});
</script>

<template>
  <div class="font-chinese antialiased">
    <Navbar />
    <Container>
      <RouterView />
    </Container>
  </div>
</template>

<style scoped>

</style>
