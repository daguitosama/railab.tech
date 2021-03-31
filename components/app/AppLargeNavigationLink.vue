<template>
  <nuxt-link
    :to="localePath(navigationLink.localePath)"
    exact=""
    :title="$t(navigationLink.tooltipLocation)"
    :class="{ 'nuxt-link-exact-active': isOnPath(navigationLink.path) }"
    class="text-lg text-opacity-5 hover:opacity-100 rounded-lg px-1 transition-all duration-100 focus:outline-none focus:border-primary-light focus-visible:ring-4 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
    >{{ $t(navigationLink.bodyLocation) }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    navigationLink: {
      type: Object,
      default: () => ({
        path: "",
        tooltipLocation: "",
        localePath: "",
        bodyLocation: "",
      }),
    },
  },
  methods: {
    isOnPath(path /* string */) {
      return this.$route?.name?.startsWith(path);
    },
  },
};
</script>

<style>
</style>