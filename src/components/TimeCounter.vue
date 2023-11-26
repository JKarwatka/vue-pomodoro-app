<script setup lang="ts">
interface TimeCounterProps {
  text: string
}

defineProps<TimeCounterProps>()
</script>

<template>
  <p class="body1">
    {{ text }}
  </p>
</template>

<style scoped>
.body1 {
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  margin: 0px;
}
</style>
