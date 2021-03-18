<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <AppNavigation />
    <Nuxt />
    <AppFooter />
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
import AppFooter from "@/components/app/AppFooter.vue";
export default {
  components: {
    AppNavigation,
    AppFooter
  },
  head() {
    
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
