<template>
  <li
    class="rounded-lg"
    :class="{
      'bg-gray-100 dark:bg-gray-800': isOnPath(navigationLink.path),
    }"
  >
    <nuxt-link
      :to="localePath(navigationLink.localePath)"
      exact=""
      :title="$t(navigationLink.tooltipLocation)"
      :class="{
        'font-semibold text-primary-light dark:text-onDark': isOnPath(
          navigationLink.path
        ),
      }"
      class="
        h-full
        block
        focus:outline-none
        focus-visible:ring focus-visible:ring-primary-light
        dark:focus-visible:ring-primary-dark
        py-2
        pl-2
        hover:bg-gray-100
        dark:hover:bg-gray-800
        rounded-lg
        transform
        transition-colors
        duration-150  
      "
      >{{ $t(navigationLink.bodyLocation) }}</nuxt-link
    >
  </li>
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