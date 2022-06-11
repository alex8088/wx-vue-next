<script setup lang="ts">
import NavigationView from './components/NavigationView.vue'
</script>

<template>
  <NavigationView :keep-alive="/Home/" />
</template>

<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
