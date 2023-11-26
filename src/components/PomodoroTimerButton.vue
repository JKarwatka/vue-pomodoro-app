<script setup lang="ts">
import { useTimerStore } from '@/stores/TimerStore';
import BaseH3 from './BaseH3.vue';

const store = useTimerStore()
</script>

<template>
    <BaseH3 class='button' :text="store.getButtonLabel" @click="store.onButtonClick" />
</template>

<style scoped>
.button {
  padding: 15px 25px;
  border-radius: 26px;
  border: none;
}
</style>
