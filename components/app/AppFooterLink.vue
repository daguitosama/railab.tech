<template>
  <li
    role="menuitem"
    class="relative px-2 -left-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transform transition-colors duration-300 ease-linear"
  >
    <!-- :class="{
      'bg-gray-100 dark:bg-gray-900': isOnPath(footerLink.path),
    }" -->
    <nuxt-link
      :to="localePath(footerLink.localePath)"
      exact=""
      :title="$t(footerLink.tooltipLocation)"
      :class="{
        'font-semibold text-primary-light dark:text-onDark': isOnPath(
          footerLink.path
        ),
      }"
      class="h-full block"
      >{{ $t(footerLink.bodyLocation) }}</nuxt-link
    >
  </li>
</template>

<script>
export default {
  props: {
    footerLink: {
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