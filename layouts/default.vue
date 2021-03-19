<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <AppNavigation />
    <AppError/>
    <AppNotification/>
    <Nuxt />
    <AppFooter />
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
import AppFooter from "@/components/app/AppFooter.vue";
import AppError from "@/components/app/AppError.vue";
import AppNotification from "@/components/app/AppNotification.vue";
export default {
  components: {
    AppNavigation,
    AppFooter,
    AppError,
    AppNotification
  },
  head() {
    
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
