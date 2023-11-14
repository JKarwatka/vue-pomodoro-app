<script setup lang="ts">
  interface H1Props {
  text: string
}

const props = defineProps<H1Props>()
</script>

<template>
  <h1>
    {{text}}
  </h1>
</template>

<style scoped>
  h1{
    font-size: 100px;
    font-weight: bold;
    line-height: 120px;
    letter-spacing: -5px;
  }
</style>