<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <SkipToMainLinkn/>
    <AppNavigation />
    <AppError />
    <AppNotification />
    <main id="main-content" tabindex="0" class="focus-visible:outline-none focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
import AppFooter from "@/components/app/AppFooter.vue";
import AppError from "@/components/app/AppError.vue";
import AppNotification from "@/components/app/AppNotification.vue";
import SkipToMainLinkn from '@/components/app/SkipToMainLink.vue'
export default {
  components: {
    AppNavigation,
    AppFooter,
    AppError,
    AppNotification,
    SkipToMainLinkn
  },
  head() {
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
