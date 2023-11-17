<script setup lang="ts">
interface BaseH4Props {
  text: string
}

defineProps<BaseH4Props>()
</script>

<template>
  <h4>
    {{ text }}
  </h4>
</template>

<style scoped>
h4 {
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0;
}
</style>
