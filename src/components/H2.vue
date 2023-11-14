<script setup lang="ts">
  interface H2Props {
    text: string
  }

  const props = defineProps<H2Props>()
</script>

<template>
  <h2>
    {{text}}
  </h2>
</template>

<style scoped>
  h2{
    font-size: 28px;
    font-weight: bold;
    line-height: 34px;
  }
</style>