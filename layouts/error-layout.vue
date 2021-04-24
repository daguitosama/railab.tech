<template>
  <div
    class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
  >
    <main id="main-content" tabindex="0" class="focusable-on-visible">
      <Nuxt />
    </main>
  </div>
</template>


<script>
export default {
  head() {
    return Object.assign({}, this.$nuxtI18nSeo());
  },
};
</script>
