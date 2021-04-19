<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <SkipToMainLinkn />
    <AppNavigation />
    <main id="main-content" tabindex="0" class="focusable-on-visible">
      <Nuxt />
    </main>
    <LazyHydrate when-idle>
      <AppFooter />
    </LazyHydrate>
  </div>
</template>


<script>
import AppNavigation from "@/components/app/AppNavigation.vue";
import SkipToMainLinkn from "@/components/app/SkipToMainLink.vue";
import LazyHydrate from "vue-lazy-hydration";
export default {
  components: {
    AppNavigation,
    AppFooter: () => import("@/components/app/AppFooter.vue"),
    SkipToMainLinkn,
    LazyHydrate,
  },
  head() {
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
