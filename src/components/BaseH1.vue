<script setup lang="ts">
interface BaseH1Props {
  text: string
}

defineProps<BaseH1Props>()
</script>

<template>
  <h1>
    {{ text }}
  </h1>
</template>

<style scoped>
h1 {
  font-size: 100px;
  font-weight: bold;
  line-height: 120px;
  letter-spacing: -5px;
  margin: 0;
}
</style>
