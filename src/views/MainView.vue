<script setup lang="ts">
import BaseH2 from '@/components/BaseH2.vue'
</script>

<template>
  <div class="main">
    <BaseH2 text="pomodoro" />
  </div>
</template>

<style scoped>
.main {
  min-height: 100vh;
  width: 100vw;
  background-color: #161932;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
