<script setup lang="ts">
  interface H3Props {
  text: string
}

const props = defineProps<H3Props>()
</script>

<template>
  <h3>
    {{text}}
  </h3>
</template>

<style scoped>
  h3{
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    text-transform: uppercase;
    letter-spacing: 15px;
  }
</style>