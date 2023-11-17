<script setup lang="ts">
import BaseH3 from './BaseH3.vue';

interface PomodoroTimerButtonProps {
  text: string
}

defineProps<PomodoroTimerButtonProps>()
</script>

<template>
    <BaseH3 class='button' :text="text"/>
</template>

<style scoped>
.button {
  padding: 15px 25px;
  border-radius: 26px;
  border: none;
}
</style>
