<script setup lang="ts">
import { useTimerStore } from '@/stores/TimerStore';

const store = useTimerStore()
</script>

<template>
  <svg viewBox="0 0 500 500">
    <circle cx="250" cy="250" r="230" />
  </svg>
</template>

<style scoped>

svg {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  stroke-dasharray: 1444px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 12px;
  stroke: #F87070;
  fill: none;
  animation-name: countdown;
  animation-timing-function: linear;
  animation-duration: calc(v-bind(store.timerLengthMs/1000) * 1s);
  animation-play-state: v-bind(store.getAnimationState);
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 1500px;
  }
}

.paused {
  animation-play-state: paused;
}

.running {
  animation-play-state: running;
}
</style>
