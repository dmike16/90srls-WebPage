<template>
  <std-90-main />
  <std-90-footer />
  <std-90-nav />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainComponent from "@/app/main/main.vue";
import NavBarComponent from "@/app/nav-bar/nav-bar.vue";
import FooterComponent from "@/app/footer/footer.vue";
/**
 * Studio90srls root class
 */
export default defineComponent({
  components: {
    "std-90-main": MainComponent,
    "std-90-nav": NavBarComponent,
    "std-90-footer": FooterComponent,
  },
});
</script>
