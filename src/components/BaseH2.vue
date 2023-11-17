<script setup lang="ts">
interface BaseH2Props {
  text: string
}

defineProps<BaseH2Props>()
</script>

<template>
  <h2>
    {{ text }}
  </h2>
</template>

<style scoped>
h2 {
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
  margin: 0;
}
</style>
