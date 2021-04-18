<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <SkipToMainLinkn />
    <AppNavigation />
    <AppError />
    <AppNotification />
    <main id="main-content" tabindex="0" class="focusable-on-visible">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
import SkipToMainLinkn from "@/components/app/SkipToMainLink.vue";
export default {
  components: {
    AppNavigation,
    AppFooter: () => import("@/components/app/AppFooter.vue"),
    AppError: () => import("@/components/app/AppError.vue"),
    AppNotification: () => import("@/components/app/AppNotification.vue"),
    SkipToMainLinkn,
  },
  head() {
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
