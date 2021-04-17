<template>
  <li
    
    class="relative opacity-80 px-2 -left-2 hover:opacity-100  transform transition-colors duration-300 ease-linear"
  >
    
    <nuxt-link
      :to="localePath(footerLink.localePath)"
      exact=""
      :title="$t(footerLink.tooltipLocation)"
      :class="{
        'opacity-100': isOnPath(
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