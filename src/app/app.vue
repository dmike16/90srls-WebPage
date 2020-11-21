<template>
  <h1> {{message}} </h1>
</template>

<script lang="ts">
import {defineComponent} from "vue";
/**
 * Studio90srls main class
 */
const studio90srls = defineComponent({
    data() {
      return {
        message: 'Hello Vue js'
    }
  }
});

export default studio90srls;
</script>

