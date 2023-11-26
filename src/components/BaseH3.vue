<script setup lang="ts">
interface BaseH3Props {
  text: string
}

defineProps<BaseH3Props>()
</script>

<template>
  <h3>
    {{ text }}
  </h3>
</template>

<style scoped>
h3 {
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  text-transform: uppercase;
  letter-spacing: 15px;
  margin: 0;
}
</style>
