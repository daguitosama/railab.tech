<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <SkipToMainLinkn />
    <!-- <LazyHydrate> -->
      <AppError />
    <!-- </LazyHydrate> -->
    <!-- <LazyHydrate> -->
      <AppNotification />
    <!-- </LazyHydrate> -->
    <AppNavigation />
    <main id="main-content" tabindex="0" class="focusable-on-visible">
      <Nuxt />
    </main>
    <AppCleanFooter />
  </div>
</template>


<script>
import LazyHydrate from "vue-lazy-hydration";
import AppNavigation from "@/components/app/AppNavigation.vue";
import SkipToMainLinkn from "@/components/app/SkipToMainLink.vue";
export default {
  components: {
    AppNavigation,
    LazyHydrate,
    AppCleanFooter: () => import("@/components/app/AppCleanFooter.vue"),
    AppError: () => import("@/components/app/AppError.vue"),
    AppNotification: () => import("@/components/app/AppNotification.vue"),
    SkipToMainLinkn,
  },
  head() {
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
