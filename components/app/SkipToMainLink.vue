<template>
  <div class="fixed z-50 top-0 w-full">
    <div
      class="text-center px-6 md:px-0 max-w-screen-md mx-auto h-0 flex justify-center items-center"
    >
      <nuxt-link
        id="skip-to-main-link"
        to="#main-content"
        @click.native="scrollFix('#main-content')"
        ref="skipLink"
        class="p-2 transform-gpu -translate-y-64 focus:translate-y-8 rounded-lg border border-gray-400 bg-surface-light dark:bg-surface-dark rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark"
        >Skip to main content</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function scrollFix(hashbang /* valid fragment id */) {
      const nextPoint = document.querySelector(hashbang);
      if (nextPoint) {
        nextPoint.focus();
      }
    }
    return {
      scrollFix,
    };
  },
};
</script>
