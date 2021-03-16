<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <AppNavigation />
    <Nuxt />
    <div class="h-40"></div>
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
export default {
  components: {
    AppNavigation,
  },
  head() {
    let bodyAttrs = {
      bodyAttrs: {
        class: [
          "font-sans antialiased bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear ",
        ],
      },
    };
    return Object.assign({}, this.$nuxtI18nSeo(), bodyAttrs);
  },
  
};
</script>
