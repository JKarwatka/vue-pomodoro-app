<script setup lang="ts">
import BaseH2 from '@/components/BaseH2.vue'
import BaseSwitch from '@/components/BaseSwitch.vue';
import PomodoroTimer from '@/components/PomodoroTimer.vue';
</script>

<template>
  <div class="main">
    <BaseH2 text="pomodoro" />
    <BaseSwitch />
    <PomodoroTimer/>
  </div>
</template>

<style scoped>
.main {
  min-height: 100vh;
  width: 100vw;
  background-color: #1E213F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
