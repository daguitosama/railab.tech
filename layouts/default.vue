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
import { mapGetters } from "vuex";
export default {
  components: {
    AppNavigation,
  },
  head() {
    let bodyAttrs = {
      bodyAttrs: {
        class: [
          "font-sans antialiased bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear ".concat(
            this.navOpen ? "overflow-hidden absolute inset-0" : ""
          ),
        ],
      },
    };
    return Object.assign({}, this.$nuxtI18nSeo(), bodyAttrs);
  },
  computed: {
    ...mapGetters("ui/", ["navOpen"]),
  },
};
</script>
