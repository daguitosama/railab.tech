<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <SkipToMainLinkn/>
    <AppNavigation />
    <AppError />
    <AppNotification />
    <main id="main-content" tabindex="0" class="focusable-on-visible">
      <Nuxt />
    </main>
    <AppCleanFooter />
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
import AppCleanFooter from "@/components/app/AppCleanFooter.vue";
import AppError from "@/components/app/AppError.vue";
import AppNotification from "@/components/app/AppNotification.vue";
import SkipToMainLinkn from '@/components/app/SkipToMainLink.vue'
export default {
  components: {
    AppNavigation,
    AppCleanFooter,
    AppError,
    AppNotification,
    SkipToMainLinkn
  },
  head() {
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
