<template>
  <a
    rel=”noopener”
    target="_blank"
    :href="contactItem.link"
    :title="contactItem.tooltip"
    class="shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-2xl w-12 h-12 flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark "
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