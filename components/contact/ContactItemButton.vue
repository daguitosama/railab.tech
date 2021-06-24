<template>
  <a
    rel="”noopener”"
    target="_blank"
    :href="contactItem.link"
    :title="contactItem.tooltip"
    class="
      dark:hover:bg-gray-800
      rounded-xl
      w-full
      block
      focus:outline-none
      focus-visible:ring focus-visible:ring-primary-light
      dark:focus-visible:ring-primary-dark
      pl-2
      py-2
      transform
      transition-colors
      duration-150
    "
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    contactItem: {
      type: Object,
      default: () => ({
        link: "#",
        tooltip: "#",
        body: "#",
      }),
    },
  },
};
</script>

<style>
</style>