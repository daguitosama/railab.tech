<template>
  <section>
    <AppHeading :sectionHeading="contactHeading" class="text-center" />
  </section>
</template>

<script>
import AppHeading from "@/components/app/AppHeading.vue";
export default {
  components: { AppHeading },
  props: {
    mapHeading: {
      type: String,
      default: "Donde encotrarnos",
    },
  },
};
</script>

<style>
</style>